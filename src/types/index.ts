export interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category:string;
  featured: boolean;
  onSale: boolean;
  salePrice?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  active: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export interface Order {
  id: string;
  userEmail: string;
  playerInfo: {
    playerName: string;
    playerId: string;
    playerEmail: string;
  };
  packageId: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  amount: number;
  createdAt: Date;
  updatedAt: Date;
  total: number;
  items: any;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discountType: 'PERCENTAGE' | 'FIXED';
  discountValue: number;
  startDate: Date;
  endDate: Date;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}


export interface Page {
name: string;
phone: number;
email: string;
message: string;
category: string[];
facebook: string;
instagram: string;
twitter: string;
youtube: string;
qrcode: string[];
}