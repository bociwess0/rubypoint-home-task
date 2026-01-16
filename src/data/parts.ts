export const initialParts= [
  {
    id: 'part-001',
    name: 'Mounting Bracket',
    status: 'Approved',
    supplier: 'Internal',
    material: 'Aluminum 6061',
    weight: 0.85,
    critical: true,
    lastUpdated: '2024-05-10T14:32:00Z',
    geometry: {
      width: 120,
      height: 80,
      holes: [
        { x: 20, y: 20, diameter: 10 },
        { x: 100, y: 20, diameter: 10 },
        { x: 60, y: 60, diameter: 16 }
      ]
    }
  },
  {
    id: "part-002",
    name: "Gear Housing",
    status: "In Review",
    supplier: "Acme Manufacturing",
    material: "Steel",
    weight: 2.4,
    critical: false,
    lastUpdated: "2024-05-12T09:10:00Z",
    geometry: {
      width: 200,
      height: 150,
      holes: [
        { x: 40, y: 40, diameter: 12 },
        { x: 160, y: 40, diameter: 12 }
      ]
    }
  },
  {
    id: "part-003",
    name: "Test",
    status: "Draft",
    supplier: "Test Supplier",
    material: "Wood",
    weight: 2.4,
    critical: false,
    lastUpdated: "2024-05-12T09:10:00Z",
    geometry: {
      width: 170,
      height: 130,
      holes: [
        { x: 40, y: 30, diameter: 12 },
        { x: 160, y: 120, diameter: 10 },
        { x: 10, y: 40, diameter: 15 },
        { x: 110, y: 50, diameter: 11 }
      ]
    }
  }
];
