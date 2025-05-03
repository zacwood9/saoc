import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { db } from "@/database";
import CommonLayout from "@/components/common-layout";

export default async function Home() {
  return (
    <CommonLayout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </CommonLayout>
  );
}
