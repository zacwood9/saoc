"use client";

import { useIsMobile } from "@/hooks/use-mobile";

export function GoogleCalendarEmbed(props: React.ComponentProps<"iframe">) {
  const isMobile = useIsMobile();
  let src =
    "https://calendar.google.com/calendar/embed?src=office%40stathanasius.org&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0";

  if (isMobile) {
    src =
      "https://calendar.google.com/calendar/embed?src=office%40stathanasius.org&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&mode=AGENDA";
  }

  return <iframe src={src} {...props}></iframe>;
}
