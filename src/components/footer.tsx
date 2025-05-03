import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0 px-4 bg-royal-blue text-muted">
      <div className="container mx-auto max-w-7xl flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose md:text-left">
          &copy; {new Date().getFullYear()} St. Athanasius Orthodox Church. All
          rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="/privacy"
            className="text-sm underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/accessibility"
            className="text-sm underline-offset-4 hover:underline"
          >
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  );
}
