import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { GoogleMapsEmbed } from "./google-maps-embed";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Contact Us
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We welcome visitors and inquirers. Reach out to us or visit during
              service times.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-[#c9a227]" />
              <div>
                <h3 className="text-xl font-bold">Location</h3>
                <p className="text-muted-foreground">300 Sumida Gardens Lane</p>
                <p className="text-muted-foreground">Goleta, CA 93111</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-[#c9a227]" />
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-muted-foreground">(805) 555-1234</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-[#c9a227]" />
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <Link
                  href="mailto:office@stathanasius.org"
                  className="text-muted-foreground"
                >
                  office@stathanasius.org
                </Link>
              </div>
            </div>
          </div>
          <GoogleMapsEmbed className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
