/**
 * Architectural illustration for the homepage hero: stacked isometric slabs
 * that read as layered foundations. Pure SVG, rendered on the server.
 */

interface Slab {
  width: number;
  centerY: number;
}

const CENTER_X = 280;
const THICKNESS = 18;

const slabs: Slab[] = [
  { width: 440, centerY: 368 },
  { width: 340, centerY: 306 },
  { width: 240, centerY: 250 },
  { width: 140, centerY: 198 },
];

function points(...pairs: [number, number][]): string {
  return pairs.map(([x, y]) => `${x},${y}`).join(" ");
}

function faces({ width, centerY }: Slab) {
  const half = width / 2;
  const rise = width / 4;
  const cx = CENTER_X;
  return {
    top: points(
      [cx, centerY - rise],
      [cx + half, centerY],
      [cx, centerY + rise],
      [cx - half, centerY],
    ),
    left: points(
      [cx - half, centerY],
      [cx, centerY + rise],
      [cx, centerY + rise + THICKNESS],
      [cx - half, centerY + THICKNESS],
    ),
    right: points(
      [cx, centerY + rise],
      [cx + half, centerY],
      [cx + half, centerY + THICKNESS],
      [cx, centerY + rise + THICKNESS],
    ),
  };
}

function outline(width: number, centerY: number): string {
  const half = width / 2;
  const rise = width / 4;
  return points(
    [CENTER_X, centerY - rise],
    [CENTER_X + half, centerY],
    [CENTER_X, centerY + rise],
    [CENTER_X - half, centerY],
  );
}

export function HeroGraphic({ className }: { className?: string }) {
  const topSlab = slabs[slabs.length - 1]!;
  return (
    <svg
      viewBox="0 0 560 520"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g fill="none" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="3 7">
        <polygon points={outline(540, 392)} />
        <polygon points={outline(500, 392)} />
      </g>
      <line
        x1={CENTER_X}
        x2={CENTER_X}
        y1={40}
        y2={150}
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeDasharray="2 6"
      />
      {slabs.map((slab, index) => {
        const face = faces(slab);
        const isTop = index === slabs.length - 1;
        return (
          <g key={slab.width} stroke="currentColor" strokeOpacity="0.24" strokeWidth="1">
            <polygon points={face.left} fill="currentColor" fillOpacity="0.03" />
            <polygon points={face.right} fill="currentColor" fillOpacity="0.09" />
            <polygon
              points={face.top}
              fill="currentColor"
              fillOpacity={isTop ? 0.12 : 0.05}
              className={isTop ? "text-accent" : undefined}
              stroke={isTop ? "currentColor" : undefined}
              strokeOpacity={isTop ? 0.9 : undefined}
            />
          </g>
        );
      })}
      <circle cx={CENTER_X} cy={topSlab.centerY} r="4" className="fill-accent" />
    </svg>
  );
}
