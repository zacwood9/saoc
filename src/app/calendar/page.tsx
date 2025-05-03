import { GoogleCalendarEmbed } from "@/components/google-calendar-embed";
import CommonLayout from "@/components/common-layout";

export default function CalendarPage() {
  return (
    <CommonLayout className="flex-1 flex flex-col">
      <section id="services" className="w-full py-12 flex-1 flex flex-col">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 flex flex-col gap-4 flex-1">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Calendar
            </h2>
          </div>

          <GoogleCalendarEmbed className="w-full flex-1" />
        </div>
      </section>
    </CommonLayout>
  );
}
