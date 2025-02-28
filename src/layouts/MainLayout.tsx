import type { FC, PropsWithChildren } from "hono/jsx";

type MainLayoutProps = PropsWithChildren<{
  title?: string;
}>;

export const MainLayout: FC<MainLayoutProps> = ({
  children,
  title = "St. Athanasius Orthodox Church",
}) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
      <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      <style>
        {`
        .hero-background {
          background-image: url(https://www.stathanasius.org/site/assets/files/12036/img_5748.jpg);
        }
        `}
      </style>
    </head>

    <body class="bg-gray-50 font-serif">
      <header class="bg-blue-900 text-white shadow-md">
        <div class="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center mb-4 md:mb-0">
            <a href="/" class="flex items-center">
              <img
                src="https://i.etsystatic.com/35048573/r/il/89f712/5234301949/il_fullxfull.5234301949_4jg7.jpg"
                alt="Church Logo"
                class="h-10 w-10 mr-3 rounded-full object-cover"
              />
              <div>
                <h1 class="text-xl font-bold">St. Athanasius</h1>
                <p class="text-sm text-blue-200">
                  Orthodox Church • Goleta, CA
                </p>
              </div>
            </a>
          </div>
          <nav class="flex flex-wrap justify-center gap-x-6">
            <a href="/" class="hover:text-yellow-300 py-2">
              Home
            </a>
            <a href="/#about-section" class="hover:text-yellow-300 py-2">
              About
            </a>
            <a href="/#services-section" class="hover:text-yellow-300 py-2">
              Services
            </a>
            <a href="/#calendar-section" class="hover:text-yellow-300 py-2">
              Calendar
            </a>
            <a href="/#clergy-section" class="hover:text-yellow-300 py-2">
              Ministries
            </a>
            <a
              href="/donate"
              class="hover:text-yellow-300 py-2 font-semibold text-yellow-300"
            >
              Donate
            </a>
            <a href="/#visit-section" class="hover:text-yellow-300 py-2">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {children}

      <footer class="bg-blue-900 text-white py-8">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-lg font-bold mb-4">
                St. Athanasius Orthodox Church
              </h3>
              <p class="text-blue-200">
                300 Sumida Gardens Lane
                <br />
                Goleta, CA 93111
              </p>
              <div class="mt-4 flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  class="text-white hover:text-yellow-300"
                >
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  class="text-white hover:text-yellow-300"
                >
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  class="text-white hover:text-yellow-300"
                >
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li>
                  <a
                    href="/#about-section"
                    class="text-blue-200 hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/#services-section"
                    class="text-blue-200 hover:text-white"
                  >
                    Service Schedule
                  </a>
                </li>
                <li>
                  <a
                    href="/#calendar-section"
                    class="text-blue-200 hover:text-white"
                  >
                    Parish Calendar
                  </a>
                </li>
                <li>
                  <a
                    href="/#clergy-section"
                    class="text-blue-200 hover:text-white"
                  >
                    Ministries
                  </a>
                </li>
                <li>
                  <a href="/donate" class="text-blue-200 hover:text-white">
                    Online Giving
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p class="text-blue-200 mb-4">
                Stay updated with parish news and events
              </p>
              <form class="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  class="bg-white/80 px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div class="border-t border-blue-800 mt-8 pt-6 text-center text-blue-300">
            <p>
              &copy; 2025 St. Athanasius Orthodox Church. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </body>
  </html>
);
