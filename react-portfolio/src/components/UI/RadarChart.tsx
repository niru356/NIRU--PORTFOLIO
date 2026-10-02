import React, { useRef, useEffect } from 'react';

interface RadarChartProps {
  labels: string[];
  values: number[];
  title: string;
}

export const RadarChart: React.FC<RadarChartProps> = ({ labels, values, title }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;

    const handleResize = () => {
      const ratio = window.devicePixelRatio || 1;
      const width = canvas.clientWidth || 320;
      const height = canvas.clientHeight || 240;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 + 10;
      const radius = Math.min(width, height) * 0.28;
      const accent = '#c4874b';

      context.lineWidth = 1;
      context.font = '11px Outfit, sans-serif';
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      // Draw background rings
      for (let ring = 1; ring <= 4; ring += 1) {
        context.beginPath();
        labels.forEach((_, index) => {
          const angle = -Math.PI / 2 + (index * 2 * Math.PI) / labels.length;
          const pointRadius = (radius * ring) / 4;
          const x = centerX + Math.cos(angle) * pointRadius;
          const y = centerY + Math.sin(angle) * pointRadius;
          index === 0 ? context.moveTo(x, y) : context.lineTo(x, y);
        });
        context.closePath();
        context.strokeStyle = 'rgba(196, 135, 75, 0.18)';
        context.stroke();
      }

      // Draw axes and labels
      labels.forEach((label, index) => {
        const angle = -Math.PI / 2 + (index * 2 * Math.PI) / labels.length;
        context.beginPath();
        context.moveTo(centerX, centerY);
        context.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
        context.strokeStyle = 'rgba(196, 135, 75, 0.16)';
        context.stroke();
        
        context.fillStyle = 'rgba(215, 226, 234, 0.7)';
        const labelDist = radius + 25;
        const x = centerX + Math.cos(angle) * labelDist;
        const y = centerY + Math.sin(angle) * labelDist;
        context.fillText(label, x, y);
      });

      // Draw data shape
      context.beginPath();
      values.forEach((value, index) => {
        const angle = -Math.PI / 2 + (index * 2 * Math.PI) / values.length;
        const pointRadius = radius * (value / 100);
        const x = centerX + Math.cos(angle) * pointRadius;
        const y = centerY + Math.sin(angle) * pointRadius;
        index === 0 ? context.moveTo(x, y) : context.lineTo(x, y);
      });
      context.closePath();
      context.fillStyle = 'rgba(196, 135, 75, 0.22)';
      context.strokeStyle = accent;
      context.lineWidth = 2;
      context.fill();
      context.stroke();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [labels, values]);

  return (
    <div className="w-full flex flex-col items-center">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D7E2EA]/80 mb-4">{title}</h4>
      <canvas ref={canvasRef} className="w-full max-w-[420px] aspect-[4/3] cursor-pointer" />
    </div>
  );
};

export default RadarChart;
