import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PartDetails from "../components/PartDetails";
import type { Part } from "../types";

describe("PartDetails", () => {
  const mockPart: Part = {
    id: "part-001",
    name: "Mounting Bracket",
    status: "Approved",
    supplier: "Internal",
    material: "Aluminum",
    weight: 0.85,
    critical: true,
    lastUpdated: "2024-05-10T14:32:00Z",
    geometry: {
      width: 100,
      height: 80,
      holes: [],
    },
  };

  it("calls onStatusChange when status is changed", () => {
    const onStatusChange = vi.fn();

    render(
      <PartDetails
        part={mockPart}
        onStatusChange={onStatusChange}
      />
    );

    const select = screen.getByDisplayValue("Approved");

    fireEvent.change(select, {
      target: { value: "Rejected" },
    });

    expect(onStatusChange).toHaveBeenCalledWith("Rejected");
  });
});
