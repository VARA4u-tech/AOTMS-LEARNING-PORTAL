import React, { useEffect, useRef } from "react";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false,
  });
  const time = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Use alpha: true and maybe desynchronized to improve rendering performance on mobile
    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    let animationFrameId: number;

    const dots: {
      x: number;
      y: number;
      baseRadius: number;
      color: string;
      phase: number;
    }[] = [];
    const colors = ["#0075CF", "#0075CF", "#FD5A1A", "#FD5A1A", "#000000"];

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Optimize for mobile by increasing spacing (reducing dot count)
      const isMobile = width < 768;
      const spacing = isMobile ? 48 : 32;

      dots.length = 0;
      const cols = Math.floor(width / spacing) + 1;
      const rows = Math.floor(height / spacing) + 1;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          dots.push({
            x: i * spacing,
            y: j * spacing,
            baseRadius: isMobile ? 2.0 : 2.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            phase: (i + j) * 0.2, // For wave offset
          });
        }
      }
    };

    const draw = () => {
      // Slow down the natural time wave slightly to feel smoother on mobile
      time.current += 0.05;
      const m = mouse.current;

      // Smooth interpolation for the trailing effect
      if (m.active) {
        m.x += (m.targetX - m.x) * 0.15;
        m.y += (m.targetY - m.y) * 0.15;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        // Snake-like wave calculation
        const waveX = Math.sin(time.current * 0.5 + dot.phase) * 15;
        const waveY = Math.cos(time.current * 0.3 + dot.phase) * 15;

        const currentX = dot.x + waveX;
        const currentY = dot.y + waveY;

        let radius = dot.baseRadius;
        let alpha = 0.4;

        if (m.active) {
          const dx = m.x - currentX;
          const dy = m.y - currentY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) {
            const factor = 1 - dist / 200;
            radius += factor * 8;
            alpha = 0.4 + factor * 0.6;

            // Enhanced interactive effect: Web connections
            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(currentX, currentY);
              ctx.lineTo(m.x, m.y);
              const strokeAlpha = 0.6 * factor;
              ctx.strokeStyle =
                dot.color === "#FD5A1A"
                  ? `rgba(253, 90, 26, ${strokeAlpha})`
                  : dot.color === "#0075CF"
                    ? `rgba(0, 117, 207, ${strokeAlpha})`
                    : `rgba(0, 0, 0, ${strokeAlpha})`;
              ctx.lineWidth = 2.5;
              ctx.stroke();
            }
          }
        } else {
          // Subtle pulsation when idle
          alpha = 0.4 + Math.sin(time.current * 0.2 + dot.phase) * 0.2;
        }

        ctx.beginPath();
        ctx.arc(currentX, currentY, radius, 0, Math.PI * 2);

        const hex = dot.color.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();
      });

      // Draw custom pointer ring with enhanced pulse
      if (m.active) {
        const ringSize = 16 + Math.sin(time.current * 2) * 4;
        ctx.beginPath();
        ctx.arc(m.x, m.y, ringSize, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,0,0,0.5)";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(m.x, m.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#FD5A1A";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", init);
    // Slight delay on init to ensure layout bounds are correct
    setTimeout(init, 100);
    draw();

    // Attach global mouse and touch events to window
    const handleMove = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;

      if ("touches" in e) {
        if (e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          return;
        }
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      mouse.current.targetX = clientX;
      mouse.current.targetY = clientY;
      mouse.current.active = true;

      if (mouse.current.x === -1000) {
        mouse.current.x = mouse.current.targetX;
        mouse.current.y = mouse.current.targetY;
      }
    };

    const handleLeave = () => {
      mouse.current.active = false;
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("touchstart", handleMove, { passive: true });
    window.addEventListener("touchend", handleLeave, { passive: true });
    window.addEventListener("mouseleave", handleLeave, { passive: true });

    return () => {
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchstart", handleMove);
      window.removeEventListener("touchend", handleLeave);
      window.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default InteractiveBackground;
