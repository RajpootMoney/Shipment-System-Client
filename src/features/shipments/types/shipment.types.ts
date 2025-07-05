export interface Shipment {
  id: string;
  trackingNumber: string;
  status: ShipmentStatus;
  origin: Address;
  destination: Address;
  weight: number;
  dimensions: Dimensions;
  customer: Customer;
  createdAt: string;
  updatedAt: string;
  estimatedDelivery?: string;
  actualDelivery?: string;
}

export type ShipmentStatus = 
  | 'pending'
  | 'in_transit'
  | 'out_for_delivery'
  | 'delivered'
  | 'failed'
  | 'returned';

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: 'cm' | 'inch';
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface CreateShipmentData {
  origin: Address;
  destination: Address;
  weight: number;
  dimensions: Dimensions;
  customerId: string;
}

export interface UpdateShipmentData {
  status?: ShipmentStatus;
  estimatedDelivery?: string;
  actualDelivery?: string;
} 