import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// --- Fade In Animation Wrapper ---
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${className}`}
    >
      {children}
    </div>
  );
};

// --- Buttons ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold';
  icon?: boolean;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon = false,
  to,
  className = '',
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-sm font-medium transition-all duration-300 ease-out rounded-lg group cursor-pointer";

  const variants = {
    primary: "bg-gradient-to-r from-accentPrimary to-blue-600 text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:-translate-y-1 hover:scale-[1.03] active:scale-95 relative overflow-hidden",
    secondary: "bg-surface text-textPrimary hover:bg-textPrimary/10 hover:-translate-y-1 active:scale-[0.98]",
    outline: "border border-textPrimary/10 text-textPrimary hover:border-accentPrimary hover:text-accentPrimary hover:-translate-y-1 hover:shadow-[0_0_16px_rgba(139,92,246,0.15)] active:scale-[0.98]",
    gold: "bg-gradient-to-r from-accentLuxury to-yellow-600 text-white hover:shadow-[0_0_28px_rgba(198,167,94,0.4)] hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98]",
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
      {variant === 'primary' && (
        <>
          <div className="absolute inset-0 rounded-lg ring-1 ring-textPrimary/20 group-hover:ring-textPrimary/50 transition-all duration-300" />
          <div className="absolute inset-0 rounded-lg bg-textPrimary/0 group-hover:bg-textPrimary/5 transition-all duration-300" />
        </>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  );
};

// --- Section Wrapper ---
export const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
    {children}
  </section>
);

// --- Card ---
export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-surface/40 backdrop-blur-sm border border-textPrimary/5 p-8 rounded-2xl hover:-translate-y-1.5 hover:shadow-2xl hover:border-accentPrimary/50 transition-all duration-300 ease-out ${className}`}>
    {children}
  </div>
);

// --- Mesh Background (Standard - Used on other pages) ---
export const MeshBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accentPrimary/20 rounded-full blur-[120px] animate-pulse-slow" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accentSecondary/10 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
    <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow delay-2000" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
  </div>
);

// --- Hero Background (Luxury Particle System) ---
export const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId: number;
    let particles: Particle[] = [];

    // Mouse state for smooth parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    // Configuration
    const PARTICLE_COUNT = 20; // Minimal count (10-25)
    const ACCENT_COLOR_1 = '#6EE7FF'; // Soft Cyan
    const ACCENT_COLOR_2 = '#8B5CF6'; // Soft Purple

    class Particle {
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
      baseAlpha: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5; // 0.5px - 2px
        this.vx = (Math.random() - 0.5) * 0.15; // Extremely slow velocity
        this.vy = (Math.random() - 0.5) * 0.15;

        // Color distribution (80% base, 20% accent)
        const rand = Math.random();
        if (rand > 0.9) this.color = ACCENT_COLOR_1;
        else if (rand > 0.8) this.color = ACCENT_COLOR_2;
        else this.color = 'BASE_COLOR';

        this.baseAlpha = Math.random() * 0.1 + 0.05; // 0.05 - 0.15 opacity
        this.alpha = this.baseAlpha;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Subtle Parallax Calculation
        // Offset range: -5px to +5px based on mouse position from center
        const parallaxX = (mouseX - width / 2) * 0.005;
        const parallaxY = (mouseY - height / 2) * 0.005;

        ctx.beginPath();
        ctx.arc(this.x + parallaxX, this.y + parallaxY, this.size, 0, Math.PI * 2);

        const isLight = document.body.classList.contains('light');
        const resolvedColor = this.color === 'BASE_COLOR' ? (isLight ? '#0F172A' : '#FFFFFF') : this.color;

        ctx.fillStyle = resolvedColor;
        ctx.globalAlpha = this.alpha;

        // Soft Glow
        ctx.shadowBlur = 15;
        ctx.shadowColor = resolvedColor;

        ctx.fill();

        // Reset context
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth Easing for Mouse
      // Lerp: current + (target - current) * factor
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-bgPrimary">
      {/* Deep Background Gradient Base - Subtle Atmospheric */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-bgPrimary via-bgSecondary to-bgPrimary opacity-80" />

      {/* Very faint accent glows for depth */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-accentPrimary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-accentSecondary/5 rounded-full blur-[150px]" />

      {/* The Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};