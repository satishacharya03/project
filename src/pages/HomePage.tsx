import React from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { PackagesPage } from './PackagesPage';
import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';

export function HomePage() {
  return (
    <>
      <HeroBanner />
      <PackagesPage />
      <AboutPage/>
      <ContactPage/>
    </>
  );
}