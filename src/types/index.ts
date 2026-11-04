export type TemplateCategory =
  | 'All'
  | 'Wedding'
  | 'Engagement'
  | 'Haldi'
  | 'Mehendi'
  | 'Reception'
  | 'Anniversary'
  | 'Housewarming';

export interface Template {
  id: string;
  name: string;
  slug: string;
  category: TemplateCategory;
  description: string;
  price: number;
  originalPrice: number;
  thumbnailUrl: string;
  previewUrl: string;
  isActive: boolean;
  style: 'Royal Rajasthani' | 'South Indian Heritage' | 'Contemporary Mughal' | 'Floral Pastel' | 'Velvet Regal';
  primaryColor: string;
  secondaryColor: string;
  features: string[];
  musicTitle?: string;
  musicUrl?: string;
  popular?: boolean;
}

export interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venueName: string;
  venueAddress: string;
  mapUrl: string;
  description: string;
  dressCode?: string;
  iconName?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
}

export interface Wedding {
  id: string;
  userId: string;
  templateId: string;
  slug: string;
  brideName: string;
  groomName: string;
  weddingDate: string;
  weddingTime: string;
  city: string;
  welcomeMessage: string;
  coverImage: string;
  brideParents: {
    mother: string;
    father: string;
  };
  groomParents: {
    mother: string;
    father: string;
  };
  events: WeddingEvent[];
  gallery: GalleryPhoto[];
  status: 'draft' | 'published' | 'unpublished';
  themePalette: 'deep-maroon' | 'royal-ruby' | 'emerald-palace' | 'antique-gold';
  backgroundMusicTitle?: string;
  backgroundMusicPlaying?: boolean;
  createdAt: string;
  updatedAt: string;
  viewCount: number;
}

export interface RSVP {
  id: string;
  weddingId: string;
  guestName: string;
  guestPhone: string;
  guestEmail?: string;
  attendeesCount: number;
  attendanceStatus: 'attending' | 'declined' | 'tentative';
  eventsAttending: string[];
  message?: string;
  createdAt: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  customerName: string;
  customerEmail: string;
  templateId: string;
  templateName: string;
  weddingSlug: string;
  amount: number;
  currency: string;
  status: 'completed' | 'processing' | 'refunded';
  createdAt: string;
  paymentMethod: string;
}

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: 'customer' | 'admin';
  avatarInitials: string;
  createdAt: string;
}
