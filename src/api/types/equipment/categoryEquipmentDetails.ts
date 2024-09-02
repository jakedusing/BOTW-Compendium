export interface CategoryEquipmentDetails {
  data: {
    name?: string;
    description?: string;
    category: string;
    common_locations?: string[];
    properties: {
      attack: number;
      defense: number;
    };
  };
}
