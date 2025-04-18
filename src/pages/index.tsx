import Head from 'next/head';
import { HeroSection } from '@/components/HeroSection';
import { ProductsSection } from '@/components/ProductsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { TickerStrip } from '@/components/TickerStrip';

export default function Home() {
  return (
    <>
      <Head>
        <title>TheforexCompany - Advanced Trading Solutions</title>
        <meta name="description" content="Professional forex trading solutions powered by advanced algorithms" />
      </Head>

      <TickerStrip direction="rtl" className="border-t-0" />
      <main>
        <HeroSection />
        <TickerStrip direction="ltr" className="my-8" />
        <ProductsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
} 