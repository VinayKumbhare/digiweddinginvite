import { Template, Wedding, RSVP, Order, UserProfile } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_indian_wedding_1793776547907.jpg';
export const ROYAL_HERITAGE_IMAGE = '/src/assets/images/template_royal_heritage_1793776548854.jpg';
export const HALDI_MEHENDI_IMAGE = '/src/assets/images/template_haldi_mehendi_1793776551302.jpg';
export const GRAND_RECEPTION_IMAGE = '/src/assets/images/template_grand_reception_1793776551959.jpg';

export const INITIAL_TEMPLATES: Template[] = [
  {
    id: 'tmpl-01',
    name: 'Rajwada Royal Heritage',
    slug: 'rajwada-royal-heritage',
    category: 'Wedding',
    description: 'An ode to majestic Rajputana courtyards, featuring ornate jharokha arches, gold foil borders, and auspicious shloka calligraphy.',
    price: 2499,
    originalPrice: 4999,
    thumbnailUrl: ROYAL_HERITAGE_IMAGE,
    previewUrl: '/templates/rajwada-royal-heritage',
    isActive: true,
    style: 'Royal Rajasthani',
    primaryColor: '#5B1020',
    secondaryColor: '#C6A15B',
    popular: true,
    features: ['Live RSVP Manager', 'Google Maps Venue Link', 'WhatsApp 1-Click Share', 'Background Shehnai Audio', 'Pre-wedding Photo Wall'],
    musicTitle: 'Mangal Dhwani - Traditional Shehnai & Sitar'
  },
  {
    id: 'tmpl-02',
    name: 'Vibrant Phoolon Ki Haldi',
    slug: 'vibrant-phoolon-ki-haldi',
    category: 'Haldi',
    description: 'Sun-kissed marigold garland design, brass urli floating petals, and playful festive typography celebrating the auspicious yellow ritual.',
    price: 1499,
    originalPrice: 2999,
    thumbnailUrl: HALDI_MEHENDI_IMAGE,
    previewUrl: '/templates/vibrant-phoolon-ki-haldi',
    isActive: true,
    style: 'Floral Pastel',
    primaryColor: '#D97706',
    secondaryColor: '#C6A15B',
    popular: true,
    features: ['Custom Dress Code Notice', 'Event Countdown Timer', 'Google Maps Pin', 'Photo Upload Album'],
    musicTitle: 'Genda Phool - Festive Folk Instrumental'
  },
  {
    id: 'tmpl-03',
    name: 'Jalsa Night & Mehendi',
    slug: 'jalsa-night-mehendi',
    category: 'Mehendi',
    description: 'Intricate henna mandala lace work adorned with royal emerald green and antique brass lanterns for memorable sangeet celebrations.',
    price: 1699,
    originalPrice: 3499,
    thumbnailUrl: HALDI_MEHENDI_IMAGE,
    previewUrl: '/templates/jalsa-night-mehendi',
    isActive: true,
    style: 'Contemporary Mughal',
    primaryColor: '#064E3B',
    secondaryColor: '#C6A15B',
    features: ['Sangeet Playlist Link', 'Dress Code Advice', 'Guest Wishes Wall', 'WhatsApp Auto-Text'],
    musicTitle: 'Mehndi Hai Rachnewali - Sitar Melody'
  },
  {
    id: 'tmpl-04',
    name: 'Imperial Grand Dawat Reception',
    slug: 'imperial-grand-dawat-reception',
    category: 'Reception',
    description: 'Glamorous candlelit ballroom aesthetic with rich burgundy velvet curtains, crystal chandelier illumination, and gold embossed monogram.',
    price: 1999,
    originalPrice: 3999,
    thumbnailUrl: GRAND_RECEPTION_IMAGE,
    previewUrl: '/templates/imperial-grand-dawat-reception',
    isActive: true,
    style: 'Velvet Regal',
    primaryColor: '#5B1020',
    secondaryColor: '#E6C98A',
    popular: true,
    features: ['Seating Table Planner Note', 'Live RSVP Tracker', 'Direction Guide for Outstation Guests', 'High-Res Slideshow'],
    musicTitle: 'Royal Banquet Instrumental Symphony'
  },
  {
    id: 'tmpl-05',
    name: 'Roka & Sagan Shubh Aarambh',
    slug: 'roka-sagan-shubh-aarambh',
    category: 'Engagement',
    description: 'Clean, elegant ivory parchment texture framed with delicate marigold toran and twin rings insignia, perfect for intimate formal blessings.',
    price: 1299,
    originalPrice: 2499,
    thumbnailUrl: ROYAL_HERITAGE_IMAGE,
    previewUrl: '/templates/roka-sagan-shubh-aarambh',
    isActive: true,
    style: 'South Indian Heritage',
    primaryColor: '#7B1E2B',
    secondaryColor: '#C6A15B',
    features: ['Simple RSVP Attendance', 'Venue Directions', 'Family Blessings Note', 'WhatsApp Share'],
    musicTitle: 'Shubh Vivah Shloka Recitation'
  },
  {
    id: 'tmpl-06',
    name: 'Swarna Varshikothsav Golden Jubilee',
    slug: 'swarna-varshikothsav-golden-jubilee',
    category: 'Anniversary',
    description: 'Celebrating 25 or 50 years of timeless matrimony with antique gold borders, milestone photo journey, and heartfelt children tributes.',
    price: 1499,
    originalPrice: 2999,
    thumbnailUrl: GRAND_RECEPTION_IMAGE,
    previewUrl: '/templates/swarna-varshikothsav-golden-jubilee',
    isActive: true,
    style: 'Royal Rajasthani',
    primaryColor: '#5B1020',
    secondaryColor: '#C6A15B',
    features: ['Milestone Timeline', 'Blessings Guestbook', 'Venue Map', 'Memory Video Link'],
    musicTitle: 'Everlasting Raag Bhairavi Flute'
  },
  {
    id: 'tmpl-07',
    name: 'Griha Pravesh & Shanti Path',
    slug: 'griha-pravesh-shanti-path',
    category: 'Housewarming',
    description: 'Sacred kalash and mango leaf toran invitation for new beginnings, havan puja schedules, and warm hospitality for dear guests.',
    price: 999,
    originalPrice: 1999,
    thumbnailUrl: HALDI_MEHENDI_IMAGE,
    previewUrl: '/templates/griha-pravesh-shanti-path',
    isActive: true,
    style: 'South Indian Heritage',
    primaryColor: '#831843',
    secondaryColor: '#C6A15B',
    features: ['Puja Muhurat Schedule', 'Google Maps Landmark Note', 'WhatsApp RSVP', 'Parking Instructions'],
    musicTitle: 'Gayatri Mantra & Vedic Chants'
  }
];

export const INITIAL_WEDDINGS: Wedding[] = [
  {
    id: 'wed-01',
    userId: 'usr-cust-01',
    templateId: 'tmpl-01',
    slug: 'rahul-weds-priya',
    brideName: 'Priya Sharma',
    groomName: 'Rahul Verma',
    weddingDate: '2026-12-14',
    weddingTime: '07:30 PM',
    city: 'Udaipur, Rajasthan',
    welcomeMessage: 'With the divine grace of Lord Ganesha and the blessings of our beloved elders, we invite you to celebrate our union of hearts and families in the royal city of lakes.',
    coverImage: HERO_IMAGE,
    brideParents: {
      mother: 'Smt. Sunita Sharma',
      father: 'Shri Rajesh Sharma'
    },
    groomParents: {
      mother: 'Smt. Meenakshi Verma',
      father: 'Shri Vikram Verma'
    },
    status: 'published',
    themePalette: 'deep-maroon',
    backgroundMusicTitle: 'Mangal Dhwani - Royal Shehnai',
    backgroundMusicPlaying: false,
    viewCount: 1420,
    createdAt: '2026-10-12',
    updatedAt: '2026-11-01',
    events: [
      {
        id: 'evt-01',
        title: 'Shubh Mehendi & Sangeet',
        date: 'December 13, 2026',
        time: '04:00 PM onwards',
        venueName: 'The Zenana Courtyard, City Palace',
        venueAddress: 'Old City, Udaipur, Rajasthan 313001',
        mapUrl: 'https://maps.google.com/?q=City+Palace+Udaipur',
        description: 'An evening filled with aromatic henna, folk melodies, joyful sangeet performances, and Rajasthani chaat delicacies.',
        dressCode: 'Royal Emerald Green & Mustard Yellow'
      },
      {
        id: 'evt-02',
        title: 'Haldi & Tel Baan Ceremony',
        date: 'December 14, 2026',
        time: '10:30 AM',
        venueName: 'Poolside Lawn, Shiv Niwas Palace',
        venueAddress: 'Lake Pichola Heritage Complex, Udaipur',
        mapUrl: 'https://maps.google.com/?q=Shiv+Niwas+Palace+Udaipur',
        description: 'Bathing the bride and groom in turmeric, rose water, and auspicious blessings under the morning sun.',
        dressCode: 'Festive Bright Yellows'
      },
      {
        id: 'evt-03',
        title: 'Baraat, Varmala & Pheras',
        date: 'December 14, 2026',
        time: '06:30 PM Baraat | 08:30 PM Hastamelap',
        venueName: 'Jagmandir Island Palace',
        venueAddress: 'Lake Pichola, Udaipur, Rajasthan',
        mapUrl: 'https://maps.google.com/?q=Jagmandir+Palace+Lake+Pichola',
        description: 'Grand royal procession by the lake, sacred vows around the holy fire, followed by a regal gala dinner banquet.',
        dressCode: 'Traditional Indian Splendor (Deep Maroon, Gold & Ivory)'
      }
    ],
    gallery: [
      { id: 'g-01', url: HERO_IMAGE, caption: 'The Royal Engagement at Udaipur' },
      { id: 'g-02', url: ROYAL_HERITAGE_IMAGE, caption: 'Mandap by Lake Pichola' },
      { id: 'g-03', url: HALDI_MEHENDI_IMAGE, caption: 'Courtyard setup for Mehendi' },
      { id: 'g-04', url: GRAND_RECEPTION_IMAGE, caption: 'Grand banquet dining arrangement' }
    ]
  },
  {
    id: 'wed-02',
    userId: 'usr-cust-01',
    templateId: 'tmpl-02',
    slug: 'arjun-weds-ananya',
    brideName: 'Ananya Iyer',
    groomName: 'Arjun Nair',
    weddingDate: '2027-01-22',
    weddingTime: '09:00 AM',
    city: 'Bengaluru, Karnataka',
    welcomeMessage: 'We cordially invite you with family and friends to join us in celebrating our wedding rituals and auspicious Muhurtham.',
    coverImage: ROYAL_HERITAGE_IMAGE,
    brideParents: {
      mother: 'Smt. Shanti Iyer',
      father: 'Dr. Subramanian Iyer'
    },
    groomParents: {
      mother: 'Smt. Radhika Nair',
      father: 'Shri Madhavan Nair'
    },
    status: 'draft',
    themePalette: 'antique-gold',
    viewCount: 184,
    createdAt: '2026-10-28',
    updatedAt: '2026-11-02',
    events: [
      {
        id: 'evt-04',
        title: 'Nandi & Muhurtham',
        date: 'January 22, 2027',
        time: '08:45 AM to 10:15 AM',
        venueName: 'The Tamarind Tree Heritage Villa',
        venueAddress: 'Avalahalli, Kanakapura Road, Bengaluru',
        mapUrl: 'https://maps.google.com/?q=The+Tamarind+Tree+Bengaluru',
        description: 'Traditional Vedic ceremony amidst sacred open-air stone pavilions and temple bells.',
        dressCode: 'Kanjivaram Silk Sarees & Dhoti'
      }
    ],
    gallery: [
      { id: 'g-05', url: ROYAL_HERITAGE_IMAGE, caption: 'Temple architecture' }
    ]
  }
];

export const INITIAL_RSVPS: RSVP[] = [
  {
    id: 'rsvp-01',
    weddingId: 'wed-01',
    guestName: 'Col. Devendra Rathore & Family',
    guestPhone: '+91 98290 11223',
    guestEmail: 'rathore.dev@gmail.com',
    attendeesCount: 3,
    attendanceStatus: 'attending',
    eventsAttending: ['Shubh Mehendi & Sangeet', 'Baraat, Varmala & Pheras'],
    message: 'Warmest congratulations to Rahul & Priya! Delighted to join the celebrations in Udaipur.',
    createdAt: '2026-11-01 14:32'
  },
  {
    id: 'rsvp-02',
    weddingId: 'wed-01',
    guestName: 'Dr. Kavita & Arvind Singhal',
    guestPhone: '+91 98101 44556',
    guestEmail: 'kavita.singhal@yahoo.com',
    attendeesCount: 2,
    attendanceStatus: 'attending',
    eventsAttending: ['Haldi & Tel Baan Ceremony', 'Baraat, Varmala & Pheras'],
    message: 'Looking forward to blessings and royal festivities!',
    createdAt: '2026-11-02 09:15'
  },
  {
    id: 'rsvp-03',
    weddingId: 'wed-01',
    guestName: 'Sameer Merchant',
    guestPhone: '+91 99200 88771',
    attendeesCount: 1,
    attendanceStatus: 'attending',
    eventsAttending: ['Baraat, Varmala & Pheras'],
    message: 'Rahul bro, wouldn\'t miss your wedding for the world!',
    createdAt: '2026-11-02 18:40'
  },
  {
    id: 'rsvp-04',
    weddingId: 'wed-01',
    guestName: 'Meera Deshmukh',
    guestPhone: '+91 94220 33211',
    attendeesCount: 0,
    attendanceStatus: 'declined',
    eventsAttending: [],
    message: 'Sending all our love and blessings from London! Sad to miss the royal celebrations.',
    createdAt: '2026-11-03 11:05'
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-1001',
    orderNumber: 'DWI-2026-8812',
    userId: 'usr-cust-01',
    customerName: 'Rahul Verma',
    customerEmail: 'rahul.verma@example.com',
    templateId: 'tmpl-01',
    templateName: 'Rajwada Royal Heritage',
    weddingSlug: 'rahul-weds-priya',
    amount: 2499,
    currency: 'INR',
    status: 'completed',
    createdAt: '2026-10-12 18:22',
    paymentMethod: 'UPI (Razorpay)'
  },
  {
    id: 'ord-1002',
    orderNumber: 'DWI-2026-8845',
    userId: 'usr-cust-01',
    customerName: 'Rahul Verma',
    customerEmail: 'rahul.verma@example.com',
    templateId: 'tmpl-02',
    templateName: 'Vibrant Phoolon Ki Haldi',
    weddingSlug: 'arjun-weds-ananya',
    amount: 1499,
    currency: 'INR',
    status: 'completed',
    createdAt: '2026-10-28 11:45',
    paymentMethod: 'Netbanking (HDFC)'
  },
  {
    id: 'ord-1003',
    orderNumber: 'DWI-2026-8901',
    userId: 'usr-cust-02',
    customerName: 'Sanjay Kapoor',
    customerEmail: 'sanjay.k@outlook.com',
    templateId: 'tmpl-04',
    templateName: 'Imperial Grand Dawat Reception',
    weddingSlug: 'sanjay-weds-kavya',
    amount: 1999,
    currency: 'INR',
    status: 'completed',
    createdAt: '2026-11-01 16:10',
    paymentMethod: 'Credit Card (Razorpay)'
  }
];

export const MOCK_USERS: { customer: UserProfile; admin: UserProfile } = {
  customer: {
    id: 'usr-cust-01',
    fullName: 'Rahul Verma',
    email: 'rahul.verma@example.com',
    phone: '+91 98200 45678',
    role: 'customer',
    avatarInitials: 'RV',
    createdAt: '2026-10-10'
  },
  admin: {
    id: 'usr-adm-01',
    fullName: 'DigiAdmin (Royal Concierge)',
    email: 'admin@digiweddinginvite.in',
    phone: '+91 80000 12345',
    role: 'admin',
    avatarInitials: 'DA',
    createdAt: '2026-01-01'
  }
};
