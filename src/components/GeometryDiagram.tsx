import type { Geometry } from "../types";

/**
 * Props for GeometryDiagram component.
 * - geometry: geometric definition of the part (dimensions and holes)
 */
interface Props {
  geometry: Geometry;
}

/**
 * GeometryDiagram
 *
 * Renders a simple 2D, data-driven visualization of a part.
 * Uses SVG to draw a rectangle and its holes based on geometry data.
 *
 * This component is purely presentational and has no internal state.
 */

export default function GeometryDiagram({ geometry }: Props) {
  return (
    <div
      className="
        w-full
        aspect-square
        flex
        items-center
        justify-center
        max-h-70
      "
    >
      {/* 
        SVG viewBox defines the coordinate system.
        Geometry values are mapped directly into this space.
        SVG scales automatically to fit the container.
      */}
      <svg
        viewBox={`0 0 ${geometry.width} ${geometry.height}`}
        className="max-w-full max-h-full"
      >
        {/* Outline of the part */}
        <rect
          x={0}
          y={0}
          width={geometry.width}
          height={geometry.height}
          fill="none"
          stroke="black"
        />

        {/* Render holes as circles */}
        {geometry.holes.map((hole, idx) => (
          <circle
            key={idx}
            cx={hole.x}
            cy={hole.y}
            r={hole.diameter / 2}
            fill="none"
            stroke="black"
          />
        ))}
      </svg>
    </div>
  );
}
