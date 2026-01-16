// Represents a circular hole in a part's geometry.
export interface Hole {
  x: number;
  y: number;
  diameter: number;
}

/**
 * Represents the geometric definition of a part.
 * Used to drive the 2D visualization.
 */
export interface Geometry {
  width: number;
  height: number;
  holes: Hole[];
}

/**
 * Defines the allowed status values for a part.
 * Using a union type ensures type safety across the application.
 */
export type PartStatus =
  | "Draft"
  | "In Review"
  | "Approved"
  | "Rejected";

// Core domain model representing a manufactured part.
export interface Part {
  id: string;
  name: string;
  status: PartStatus;
  supplier: string;
  material: string;
  weight: number;
  critical: boolean;
  lastUpdated: string;
  geometry: Geometry;
}
