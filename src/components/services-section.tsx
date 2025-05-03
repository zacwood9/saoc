import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Schedule
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Join us to worship the Risen Christ! Service times schedule to
              change - please check the{" "}
              <Link
                className="text-royal-blue hover:text-royal-blue/80 hover:underline"
                href="/calendar"
              >
                calendar
              </Link>{" "}
              for the updated schedule and additional services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#c9a227]" />
                Sunday Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">9:00 AM - Orthros</p>
                    <p className="text-sm text-muted-foreground">
                      Morning prayers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">10:00 AM - Divine Liturgy</p>
                    <p className="text-sm text-muted-foreground">
                      Primary Eucharistic service, followed by Apage Meal
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#c9a227]" />
                Weekday Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Tuesday/Thursday, 5:30 PM</p>
                    <p className="text-sm text-muted-foreground">
                      Daily Vespers
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Saturday, 5:30 PM</p>
                    <p className="text-sm text-muted-foreground">
                      Great Vespers
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center">
          <Link href="/calendar">
            <Button variant="outline" className="mt-4 text-foreground">
              View Full Calendar
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
