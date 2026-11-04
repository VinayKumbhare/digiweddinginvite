import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/common/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { TemplatesPage } from './pages/TemplatesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { PublicWeddingInvite } from './components/wedding/PublicWeddingInvite';

// Customer Dashboard
import { DashboardOverview } from './pages/DashboardOverview';
import { DashboardWeddings } from './pages/DashboardWeddings';
import { DashboardWeddingEdit } from './pages/DashboardWeddingEdit';
import { DashboardRsvps } from './pages/DashboardRsvps';
import { DashboardOrders } from './pages/DashboardOrders';

// Admin Dashboard
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminTemplates } from './pages/AdminTemplates';
import { AdminOrders } from './pages/AdminOrders';
import { AdminCustomers } from './pages/AdminCustomers';

const RouterView: React.FC = () => {
  const { currentRoute, navigate } = useApp();

  // 1. Live Public Wedding View: /w/:slug
  if (currentRoute.startsWith('/w/')) {
    const slug = currentRoute.replace('/w/', '').split('/')[0];
    return <PublicWeddingInvite slug={slug} />;
  }

  // 2. Customer Dashboard Routes
  if (currentRoute === '/dashboard') {
    return <DashboardOverview />;
  }
  if (currentRoute === '/dashboard/weddings') {
    return <DashboardWeddings />;
  }
  if (currentRoute.startsWith('/dashboard/weddings/') && currentRoute.endsWith('/edit')) {
    const parts = currentRoute.split('/');
    const weddingId = parts[3]; // e.g. /dashboard/weddings/wed-01/edit
    return <DashboardWeddingEdit weddingId={weddingId} />;
  }
  if (currentRoute === '/dashboard/rsvps') {
    return <DashboardRsvps />;
  }
  if (currentRoute === '/dashboard/orders') {
    return <DashboardOrders />;
  }

  // 3. Admin Console Routes
  if (currentRoute === '/admin') {
    return <AdminDashboard />;
  }
  if (currentRoute === '/admin/templates') {
    return <AdminTemplates />;
  }
  if (currentRoute === '/admin/orders') {
    return <AdminOrders />;
  }
  if (currentRoute === '/admin/customers') {
    return <AdminCustomers />;
  }

  // 4. Authentication Routes
  if (currentRoute === '/login') {
    return <LoginPage />;
  }
  if (currentRoute === '/register') {
    return <RegisterPage />;
  }

  // 5. Public Marketing & Information Routes
  if (currentRoute === '/templates' || currentRoute.startsWith('/templates/')) {
    return <TemplatesPage />;
  }
  if (currentRoute === '/pricing') {
    return <PricingPage />;
  }
  if (currentRoute === '/about') {
    return <AboutPage />;
  }
  if (currentRoute === '/contact') {
    return <ContactPage />;
  }
  if (currentRoute === '/faq') {
    return <FaqPage />;
  }

  if (currentRoute === '/privacy' || currentRoute === '/terms') {
    return (
      <div className="py-16 px-4 max-w-4xl mx-auto space-y-6">
        <h1 className="font-serif text-3xl font-bold text-[#5B1020]">
          {currentRoute === '/privacy' ? 'Privacy Policy' : 'Terms of Service'}
        </h1>
        <div className="bg-white rounded-2xl p-8 border border-[#C6A15B]/30 shadow-xs text-xs sm:text-sm text-[#33241F]/80 leading-relaxed space-y-4">
          <p>
            Welcome to Digi Wedding Invite. We are dedicated to protecting your sacred family memories, photographs, and guest information with utmost reverence and highest standards of digital confidentiality.
          </p>
          <p>
            <strong>Data Ownership:</strong> You retain 100% full legal ownership of all wedding photographs, guest RSVPs, telephone numbers, and ceremony information uploaded to your wedding invitation.
          </p>
          <p>
            <strong>Guest Privacy:</strong> We strictly do not sell, license, or disclose guest contact numbers or attendee counts to any third-party advertisers or commercial entities.
          </p>
          <p>
            <strong>Website Hosting:</strong> Your unique wedding URL is hosted securely on our servers for a full 12 months following your wedding date, allowing friends and family to reminisce and view your high-resolution gallery.
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 bg-[#5B1020] text-white text-xs font-semibold rounded hover:bg-[#7B1E2B] transition-colors"
          >
            ← Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  // Default: Homepage
  return <HomePage />;
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

const AppContent: React.FC = () => {
  const { currentRoute } = useApp();
  const isPublicWedding = currentRoute.startsWith('/w/');

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8ED] text-[#33241F]">
      {!isPublicWedding && <Navbar />}
      <main className="flex-1">
        <RouterView />
      </main>
      {!isPublicWedding && <Footer />}
      <ToastContainer />
    </div>
  );
};
