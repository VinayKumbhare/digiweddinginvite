import React, { createContext, useContext, useState, useEffect } from 'react';
import { Template, Wedding, RSVP, Order, UserProfile, WeddingEvent } from '../types';
import {
  INITIAL_TEMPLATES,
  INITIAL_WEDDINGS,
  INITIAL_RSVPS,
  INITIAL_ORDERS,
  MOCK_USERS
} from '../data/mockData';

interface ToastInfo {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface AppContextType {
  currentRoute: string;
  navigate: (route: string) => void;
  currentUser: UserProfile | null;
  loginAs: (role: 'customer' | 'admin' | 'guest') => void;
  logout: () => void;
  templates: Template[];
  weddings: Wedding[];
  rsvps: RSVP[];
  orders: Order[];
  updateTemplate: (id: string, updates: Partial<Template>) => void;
  toggleTemplateActive: (id: string) => void;
  updateWedding: (id: string, updates: Partial<Wedding>) => void;
  addEventToWedding: (weddingId: string, event: Omit<WeddingEvent, 'id'>) => void;
  publishWedding: (weddingId: string) => void;
  unpublishWedding: (weddingId: string) => void;
  submitRsvp: (rsvpData: Omit<RSVP, 'id' | 'createdAt'>) => void;
  createMockOrder: (templateId: string) => void;
  toasts: ToastInfo[];
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Sync route with URL hash for easy sharing and browser back/forward support
  const getInitialRoute = () => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash) return hash;
    }
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(getInitialRoute);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(MOCK_USERS.customer); // Start with customer view active by default for easy inspection
  const [templates, setTemplates] = useState<Template[]>(INITIAL_TEMPLATES);
  const [weddings, setWeddings] = useState<Wedding[]>(INITIAL_WEDDINGS);
  const [rsvps, setRsvps] = useState<RSVP[]>(INITIAL_RSVPS);
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [toasts, setToasts] = useState<ToastInfo[]>([]);

  // Listen to hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash) {
        setCurrentRoute(hash);
      } else {
        setCurrentRoute('/');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: string) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const loginAs = (role: 'customer' | 'admin' | 'guest') => {
    if (role === 'guest') {
      setCurrentUser(null);
      showToast('Switched to Guest visitor mode', 'info');
    } else if (role === 'admin') {
      setCurrentUser(MOCK_USERS.admin);
      showToast('Logged in as Administrator (Royal Concierge)', 'success');
      navigate('/admin');
    } else {
      setCurrentUser(MOCK_USERS.customer);
      showToast('Logged in as Customer (Rahul Verma)', 'success');
      navigate('/dashboard');
    }
  };

  const logout = () => {
    setCurrentUser(null);
    showToast('Logged out successfully', 'info');
    navigate('/');
  };

  const updateTemplate = (id: string, updates: Partial<Template>) => {
    setTemplates((prev) =>
      prev.map((tmpl) => (tmpl.id === id ? { ...tmpl, ...updates } : tmpl))
    );
    showToast('Template details updated', 'success');
  };

  const toggleTemplateActive = (id: string) => {
    setTemplates((prev) =>
      prev.map((tmpl) =>
        tmpl.id === id ? { ...tmpl, isActive: !tmpl.isActive } : tmpl
      )
    );
    showToast('Template status updated', 'info');
  };

  const updateWedding = (id: string, updates: Partial<Wedding>) => {
    setWeddings((prev) =>
      prev.map((w) =>
        w.id === id
          ? {
              ...w,
              ...updates,
              updatedAt: new Date().toISOString().split('T')[0]
            }
          : w
      )
    );
    showToast('Wedding details updated successfully', 'success');
  };

  const addEventToWedding = (weddingId: string, eventData: Omit<WeddingEvent, 'id'>) => {
    const newEvent: WeddingEvent = {
      ...eventData,
      id: `evt-${Date.now()}`
    };
    setWeddings((prev) =>
      prev.map((w) =>
        w.id === weddingId ? { ...w, events: [...w.events, newEvent] } : w
      )
    );
    showToast(`Added event "${eventData.title}"`, 'success');
  };

  const publishWedding = (weddingId: string) => {
    setWeddings((prev) =>
      prev.map((w) =>
        w.id === weddingId ? { ...w, status: 'published' } : w
      )
    );
    showToast('Invitation website published to public URL!', 'success');
  };

  const unpublishWedding = (weddingId: string) => {
    setWeddings((prev) =>
      prev.map((w) =>
        w.id === weddingId ? { ...w, status: 'unpublished' } : w
      )
    );
    showToast('Invitation website unpublished', 'info');
  };

  const submitRsvp = (rsvpData: Omit<RSVP, 'id' | 'createdAt'>) => {
    const newRsvp: RSVP = {
      ...rsvpData,
      id: `rsvp-${Date.now()}`,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };
    setRsvps((prev) => [newRsvp, ...prev]);
    showToast(`Dhanyawad ${rsvpData.guestName}! Your RSVP response has been recorded.`, 'success');
  };

  const createMockOrder = (templateId: string) => {
    const template = templates.find((t) => t.id === templateId);
    if (!template) return;
    const orderNumber = `DWI-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber,
      userId: currentUser?.id || 'usr-cust-01',
      customerName: currentUser?.fullName || 'Rahul Verma',
      customerEmail: currentUser?.email || 'rahul.verma@example.com',
      templateId: template.id,
      templateName: template.name,
      weddingSlug: 'my-new-wedding',
      amount: template.price,
      currency: 'INR',
      status: 'completed',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      paymentMethod: 'UPI (Test Mode)'
    };
    setOrders((prev) => [newOrder, ...prev]);
    showToast(`Order #${orderNumber} created for "${template.name}". Proceed to personalize!`, 'success');
    navigate('/dashboard/weddings');
  };

  return (
    <AppContext.Provider
      value={{
        currentRoute,
        navigate,
        currentUser,
        loginAs,
        logout,
        templates,
        weddings,
        rsvps,
        orders,
        updateTemplate,
        toggleTemplateActive,
        updateWedding,
        addEventToWedding,
        publishWedding,
        unpublishWedding,
        submitRsvp,
        createMockOrder,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
