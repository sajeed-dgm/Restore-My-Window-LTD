export interface GalleryItem {
  id: number;
  title: string;
  category: 'sash' | 'double-glazing' | 'rot-repair' | 'casement' | 'heritage';
  period: string;
  location: string;
  description: string;
  imageUrl: string;
  beforeImageUrl?: string;
  isPlaceholder?: boolean;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  postcode: string;
  address: string;
  propertyType: 'victorian' | 'georgian' | 'edwardian' | 'listed' | 'other';
  windowType: 'sliding-sash' | 'casement' | 'bay-sash' | 'french-doors' | 'mixed';
  windowCount: number;
  servicesNeeded: string[];
  preferredDate: string;
  preferredTimeSlot: 'morning' | 'afternoon' | 'flexible';
  urgency: 'routine' | 'urgent' | 'within-month';
  notes: string;
  hasPhotos: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  typicalDuration: string;
  warranty: string;
}
