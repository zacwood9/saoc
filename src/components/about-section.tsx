import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
          <div className="space-y-4 max-w-full">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl break-words">
              Our Parish History
            </h2>
            <div className="text-muted-foreground md:text-xl break-words">
              <p>
                Founded in 1987, St. Athanasius Orthodox Church has been serving
                the spiritual needs of Orthodox Christians in the Santa Barbara
                area for over 35 years.
              </p>
              <p className="mt-4">
                Our parish is named after St. Athanasius the Great, a defender
                of Orthodox Christianity in the 4th century who is known for his
                unwavering commitment to the truth of Christ.
              </p>
              <p className="mt-4">
                We are a diverse and welcoming community united by our shared
                Orthodox faith and traditions.
              </p>
            </div>
            <Link href="/about" className="mt-6 inline-block">
              <Button variant="outline">Learn More About Us</Button>
            </Link>
          </div>
          <div className="w-full">
            <Image
              src="https://www.stathanasius.org/site/assets/files/11462/img_0197.jpg"
              width={600}
              height={400}
              alt="Church Interior"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
