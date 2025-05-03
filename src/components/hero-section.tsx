import Link from "next/link";
import { Button } from "@/components/ui/button";

const heroImageUrl =
  "https://www.stathanasius.org/site/assets/files/12036/img_5748.jpg";

export function HeroSection() {
  return (
    <section
      className="w-full py-24 md:py-36 lg:py-48 bg-royal-blue text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${heroImageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="flex flex-col justify-center space-y-4 max-w-3xl">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Welcome to St. Athanasius
            </h1>
            <p className="max-w-[600px] text-gray-200 md:text-xl">
              Come and see the beauty of Orthodox Christianity
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild>
              <Link href="#services">Service Schedule</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
