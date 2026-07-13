"use client"

import React, { useEffect, useRef } from 'react'

export default function InteractiveDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.clientWidth
    let height = canvas.clientHeight
    canvas.width = width
    canvas.height = height

    const spacing = 35 // distance between dots
    const dots: { baseX: number; baseY: number; x: number; y: number; size: number; color: string; baseColor: string; hoverColor: string }[] = []

    const initDots = () => {
      dots.length = 0
      const cols = Math.floor(width / spacing)
      const rows = Math.floor(height / spacing)
      
      const offsetX = (width - cols * spacing) / 2
      const offsetY = (height - rows * spacing) / 2

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = offsetX + i * spacing
          const y = offsetY + j * spacing
          
          // Calculate a beautiful gradient (Cyan to Purple/Blue)
          const hue = 190 + (x / width) * 50 + (y / height) * 40
          const baseColor = `hsla(${hue}, 100%, 75%, 0.15)`
          const hoverColor = `hsla(${hue}, 100%, 65%, 0.9)`

          dots.push({
            baseX: x,
            baseY: y,
            x: x,
            y: y,
            size: 1.5,
            color: baseColor,
            baseColor: baseColor,
            hoverColor: hoverColor
          })
        }
      }
    }

    initDots()

    let mouseX = -1000
    let mouseY = -1000
    let isMouseInCanvas = false

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
      isMouseInCanvas = true
    }
    
    const handleMouseLeave = () => {
      isMouseInCanvas = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    const handleResize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width
      canvas.height = height
      initDots()
    }
    window.addEventListener('resize', handleResize)

    let animationFrameId: number
    const maxDistance = 150
    const pullFactor = 0.5 // Adjust how strongly they follow the mouse

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      dots.forEach(dot => {
        let targetX = dot.baseX
        let targetY = dot.baseY

        if (isMouseInCanvas) {
          const dx = mouseX - dot.baseX
          const dy = mouseY - dot.baseY
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            const pull = (maxDistance - dist) / maxDistance
            targetX = dot.baseX + dx * pull * pullFactor
            targetY = dot.baseY + dy * pull * pullFactor
            
            // Highlight dots near the cursor
            dot.color = dot.hoverColor
            dot.size = 2.5
          } else {
            dot.color = dot.baseColor
            dot.size = 1.5
          }
        } else {
          dot.color = dot.baseColor
          dot.size = 1.5
        }

        // Spring physics for smooth movement
        dot.x += (targetX - dot.x) * 0.1
        dot.y += (targetY - dot.y) * 0.1

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}
