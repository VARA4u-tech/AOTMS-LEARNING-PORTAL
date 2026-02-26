import React, { useEffect, useRef } from "react";

const InteractiveLeftPanel = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const dots: {
      x: number;
      y: number;
      baseRadius: number;
      color: string;
      phase: number;
    }[] = [];
    const spacing = 32;
    const colors = ["#0075CF", "#0075CF", "#FD5A1A", "#FD5A1A", "#000000"];

    const init = () => {
      const parent = containerRef.current;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;

        dots.length = 0;
        const cols = Math.floor(parent.clientWidth / spacing) + 1;
        const rows = Math.floor(parent.clientHeight / spacing) + 1;

        for (let i = 0; i <= cols; i++) {
          for (let j = 0; j <= rows; j++) {
            dots.push({
              x: i * spacing,
              y: j * spacing,
              baseRadius: 2.5,
              color: colors[Math.floor(Math.random() * colors.length)],
              phase: (i + j) * 0.2, // For wave offset
            });
          }
        }
      }
    };

    const draw = () => {
      time.current += 0.05;
      const m = mouse.current;

      // Smooth interpolation for the trailing effect
      if (m.active) {
        m.x += (m.targetX - m.x) * 0.15;
        m.y += (m.targetY - m.y) * 0.15;
      }

      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);

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
    setTimeout(init, 100);
    draw();

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouse.current.targetX = e.clientX - rect.left;
      mouse.current.targetY = e.clientY - rect.top;
      mouse.current.active = true;
      if (mouse.current.x === -1000) {
        mouse.current.x = mouse.current.targetX;
        mouse.current.y = mouse.current.targetY;
      }
    }
  };

  const handleMouseLeave = () => {
    mouse.current.active = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="hidden lg:flex lg:w-1/2 relative bg-[#E9E9E9] border-r-4 border-black overflow-hidden z-10"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Container for content */}
      <div className="relative z-10 p-12 flex flex-col justify-between w-full h-full pointer-events-none">
        {React.Children.map(children, (child) => (
          <div className="pointer-events-auto">{child}</div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveLeftPanel;
