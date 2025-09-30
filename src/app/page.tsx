'use client';

import { Box } from '@mantine/core';
import { Navigation } from '@/components/sections/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { AdvantagesSection } from '@/components/sections/AdvantagesSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <Box style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
