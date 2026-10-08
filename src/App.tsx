/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialGalleryData } from './data/galleryData';
import { GalleryItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { DoubleGlazeSection } from './components/DoubleGlazeSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { CostEstimator } from './components/CostEstimator';
import { BookingForm } from './components/BookingForm';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { UrlManagerModal } from './components/UrlManagerModal';
import { VercelGuideModal } from './components/VercelGuideModal';

const STORAGE_KEY = 'restore_my_window_custom_gallery_urls';

export default function App() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return initialGalleryData.map((item, idx) => ({
            ...item,
            imageUrl: parsed[idx] || item.imageUrl,
            isPlaceholder: false
          }));
        }
      }
    } catch (e) {
      // fallback
    }
    return initialGalleryData;
  });

  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [isUrlManagerOpen, setIsUrlManagerOpen] = useState(false);
  const [isVercelGuideOpen, setIsVercelGuideOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);
  const [bookingWindowCount, setBookingWindowCount] = useState<number>(4);

  // Scroll to section helper
  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handlers for gallery URLs
  const handleSaveUrls = (updatedItems: GalleryItem[]) => {
    setGalleryItems(updatedItems);
    try {
      const urlList = updatedItems.map(i => i.imageUrl);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(urlList));
    } catch (e) {
      console.warn('Could not persist to localStorage', e);
    }
  };

  const handleResetUrls = () => {
    setGalleryItems(initialGalleryData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
    setIsUrlManagerOpen(false);
  };

  // Lightbox carousel navigation
  const handleNextLightbox = () => {
    if (!lightboxItem) return;
    const idx = galleryItems.findIndex(i => i.id === lightboxItem.id);
    const nextIdx = (idx + 1) % galleryItems.length;
    setLightboxItem(galleryItems[nextIdx]);
  };

  const handlePrevLightbox = () => {
    if (!lightboxItem) return;
    const idx = galleryItems.findIndex(i => i.id === lightboxItem.id);
    const prevIdx = (idx - 1 + galleryItems.length) % galleryItems.length;
    setLightboxItem(galleryItems[prevIdx]);
  };

  const handleSelectServiceFromCard = (serviceTitle: string) => {
    setBookingService(serviceTitle);
    scrollToBooking();
  };

  const handleBookDoubleGlaze = () => {
    setBookingService('Double Glaze & Re-Glaze Existing Sash');
    scrollToBooking();
  };

  const handleApplyEstimate = (est: { windowCount: number; serviceName: string; style: string }) => {
    setBookingWindowCount(est.windowCount);
    setBookingService(est.serviceName);
    scrollToBooking();
  };

  const handleBookFromLightbox = (windowTitle: string) => {
    setBookingService(`Style: ${windowTitle}`);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-[#54595F] selection:bg-[#6EC1E4] selection:text-[#062A4D]">
      {/* Navigation Bar */}
      <Navbar
        onOpenBooking={scrollToBooking}
        onOpenVercelGuide={() => setIsVercelGuideOpen(true)}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenBooking={scrollToBooking}
          onOpenGallery={scrollToGallery}
        />

        {/* Before & After Interactive Slider */}
        <BeforeAfterSlider />

        {/* Dedicated Double Glaze & Re-Glaze Existing Sash Section */}
        <DoubleGlazeSection
          onBookDoubleGlazing={handleBookDoubleGlaze}
        />

        {/* Core Services Section */}
        <ServicesSection
          onSelectService={handleSelectServiceFromCard}
        />

        {/* 15-Item High-Quality Photo Gallery with URL Placeholder Support */}
        <GallerySection
          galleryItems={galleryItems}
          onOpenLightbox={(item) => setLightboxItem(item)}
          onOpenUrlManager={() => setIsUrlManagerOpen(true)}
        />

        {/* Interactive Cost Estimator & Replacement Savings */}
        <CostEstimator
          onApplyToBooking={handleApplyEstimate}
        />

        {/* Comprehensive Booking & Inspection Form */}
        <BookingForm
          initialService={bookingService}
          initialWindowCount={bookingWindowCount}
        />

        {/* Contact, Workshop & Direct Inquiries */}
        <ContactSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={scrollToBooking}
        onOpenVercelGuide={() => setIsVercelGuideOpen(true)}
      />

      {/* Modals & Overlays */}
      <LightboxModal
        item={lightboxItem}
        allItems={galleryItems}
        onClose={() => setLightboxItem(null)}
        onSelectNext={handleNextLightbox}
        onSelectPrev={handlePrevLightbox}
        onBookThisStyle={handleBookFromLightbox}
      />

      <UrlManagerModal
        isOpen={isUrlManagerOpen}
        onClose={() => setIsUrlManagerOpen(false)}
        galleryItems={galleryItems}
        onSaveUrls={handleSaveUrls}
        onResetUrls={handleResetUrls}
      />

      <VercelGuideModal
        isOpen={isVercelGuideOpen}
        onClose={() => setIsVercelGuideOpen(false)}
      />
    </div>
  );
}
