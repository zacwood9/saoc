import { Hono } from "hono";
import { html } from "hono/html";
import type { FC } from "hono/jsx";

const app = new Hono();

const Site: FC = () => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>St. Athanasius Orthodox Church</title>
      <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
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
            <img
              src="https://i.etsystatic.com/35048573/r/il/89f712/5234301949/il_fullxfull.5234301949_4jg7.jpg"
              alt="Church Logo"
              class="h-12 w-12 mr-3 rounded-full object-cover"
            />
            <div>
              <h1 class="text-xl font-bold">St. Athanasius</h1>
              <p class="text-sm text-blue-200">Orthodox Church • Goleta, CA</p>
            </div>
          </div>
          <nav class="flex flex-wrap justify-center gap-x-6">
            <a href="#" class="hover:text-yellow-300 py-2">
              Home
            </a>
            <a href="#" class="hover:text-yellow-300 py-2">
              About
            </a>
            <a href="#" class="hover:text-yellow-300 py-2">
              Services
            </a>
            <a href="#" class="hover:text-yellow-300 py-2">
              Calendar
            </a>
            <a href="#" class="hover:text-yellow-300 py-2">
              Ministries
            </a>
            <a href="#" class="hover:text-yellow-300 py-2">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section class="relative">
        <div class="h-96 bg-cover bg-center hero-background">
          <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div class="text-center text-white px-4">
              <h2 class="text-4xl font-bold mb-4">Welcome to St. Athanasius</h2>
              <p class="text-xl mb-6">
                Come and see the beauty of Orthodox Christianity
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#calendar-section"
                  class="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-lg"
                >
                  Service Times
                </a>
                <a
                  href="#visit-section"
                  class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-blue-900 mb-6">
              Christ is in our midst!
            </h2>
            <p class="text-lg text-gray-700 mb-6">
              St. Athanasius Orthodox Church welcomes you. We are a parish of
              the Antiochian Orthodox Christian Archdiocese of North America,
              serving Goleta, Santa Barbara, and surrounding communities.
            </p>
            <p class="text-lg text-gray-700">
              Whether you're Orthodox, interested in learning about Orthodoxy,
              or just visiting, we invite you to join us for worship and
              fellowship.
            </p>
          </div>
        </div>
      </section>

      <section id="calendar-section" class="py-12 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-blue-900 mb-10">
            Worship Schedule
          </h2>
          <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold text-blue-800 mb-4">
                Sunday Services
              </h3>
              <ul class="space-y-3">
                <li class="flex justify-between">
                  <span class="font-medium">Orthros (Matins):</span>
                  <span>9:00 AM</span>
                </li>
                <li class="flex justify-between">
                  <span class="font-medium">Divine Liturgy:</span>
                  <span>10:00 AM</span>
                </li>
                <li class="flex justify-between">
                  <span class="font-medium">Agape Meal:</span>
                  <span>11:45 AM</span>
                </li>
              </ul>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold text-blue-800 mb-4">
                Weekday Services
              </h3>
              <ul class="space-y-3">
                <li class="flex justify-between">
                  <span class="font-medium">Great Vespers:</span>
                  <span>Saturday 5:30 PM</span>
                </li>
                <li class="flex justify-between">
                  <span class="font-medium">Daily Matins:</span>
                  <span>Monday, Wednesday, Friday 7:00 AM</span>
                </li>
                <li class="flex justify-between">
                  <span class="font-medium">Daily Vespers:</span>
                  <span>Tuesday, Thursday 5:30PM</span>
                </li>
                <li>
                  <span class="font-medium italic">
                    See calendar for special services and feast days
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="calendar-section" class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-blue-900 mb-10">
            Calendar
          </h2>

          <div class="max-w-5xl mx-auto overflow-hidden rounded-lg shadow-md">
            <div class="hidden md:block relative" style="padding-top: 75%">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=office%40stathanasius.org&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0"
                class="absolute inset-0 w-full h-full"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>

            <div class="md:hidden relative" style="padding-top: 150%">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=office%40stathanasius.org&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&mode=AGENDA"
                class="absolute inset-0 w-full h-full"
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>

          <div class="text-center mt-6">
            <a
              href="https://calendar.google.com/calendar/embed?src=office%40stathanasius.org&ctz=America%2FLos_Angeles"
              target="_blank"
              class="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg"
            >
              View Full Calendar
            </a>
          </div>
        </div>
      </section>

      <section class="py-12 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <div class="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 class="text-3xl font-bold text-blue-900 mb-6">
                  About Our Parish
                </h2>
                <p class="text-gray-700 mb-4">
                  Founded in 1987, St. Athanasius Orthodox Church has been
                  serving the spiritual needs of Orthodox Christians in the
                  Santa Barbara area for over 35 years.
                </p>
                <p class="text-gray-700 mb-4">
                  Our parish is named after St. Athanasius the Great, a defender
                  of Orthodox Christianity in the 4th century who is known for
                  his unwavering commitment to the truth of Christ.
                </p>
                <p class="text-gray-700 mb-4">
                  We are a diverse and welcoming community united by our shared
                  Orthodox faith and traditions.
                </p>
                <a
                  href="#"
                  class="inline-block mt-2 text-blue-700 hover:text-blue-900 font-medium"
                >
                  Learn more about our history →
                </a>
              </div>
              <div class="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://www.stathanasius.org/site/assets/files/11462/img_0197.jpg"
                  alt="Church Interior"
                  class="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-blue-900 mb-10">
            Our Clergy
          </h2>
          <div class="max-w-4xl mx-auto">
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://www.stathanasius.org/site/assets/files/12036/img_5760.jpg"
                  alt="Fr. Symeon"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-blue-800 mb-2">
                  Fr. Symeon Halsell
                </h3>
                <p class="text-gray-600 italic mb-4">Parish Priest</p>
                <p class="text-gray-700">
                  Fr. Symeon has served as the priest of St. Athanasius since
                  2020. He received his Master of Divinity from St. Vladimir's
                  Orthodox Theological Seminary and was ordained to the
                  priesthood in 2019. Fr. Symeon is dedicated to pastoral care,
                  Orthodox education, and community outreach.
                </p>
                <a
                  href="#"
                  class="inline-block mt-4 text-blue-700 hover:text-blue-900 font-medium"
                >
                  Contact Fr. Symeon →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visit-section" class="py-12 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center text-blue-900 mb-10">
            Visit Us
          </h2>
          <div class="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold text-blue-800 mb-4">
                  Contact Information
                </h3>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-blue-700 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      300 Sumida Gardens Lane
                      <br />
                      Goleta, CA 93111
                    </span>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-blue-700 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>(805) 555-1234</span>
                  </li>
                  <li class="flex items-start">
                    <svg
                      class="h-6 w-6 text-blue-700 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>office@stathanasius.org</span>
                  </li>
                </ul>
                <div class="mt-6">
                  <h4 class="font-bold text-gray-800 mb-2">Office Hours</h4>
                  <p>Monday - Friday: 12:00 PM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <div>
              <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <div class="p-4 border-b border-gray-200">
                  <h3 class="text-xl font-bold text-blue-800">Our Location</h3>
                </div>
                <div class="h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6581.416600821109!2d-119.81661062332172!3d34.43416387301559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e93f69b6b77a29%3A0x310258d0bbe016e4!2sSt.%20Athanasius%20Orthodox%20Church!5e0!3m2!1sen!2sus!4v1740705625255!5m2!1sen!2sus"
                    class="w-full h-full"
                    style="border: 0"
                    allowfullscreen={true}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div class="p-4 bg-gray-50">
                  <a
                    href="https://maps.app.goo.gl/6Yomddnw7syzkzYe9"
                    target="_blank"
                    class="text-blue-700 hover:text-blue-900 font-medium flex items-center"
                  >
                    <svg
                      class="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Get directions in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <a href="#" class="text-white hover:text-yellow-300">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" class="text-white hover:text-yellow-300">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" class="text-white hover:text-yellow-300">
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
                  <a href="#" class="text-blue-200 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" class="text-blue-200 hover:text-white">
                    Service Schedule
                  </a>
                </li>
                <li>
                  <a href="#" class="text-blue-200 hover:text-white">
                    Parish Calendar
                  </a>
                </li>
                <li>
                  <a href="#" class="text-blue-200 hover:text-white">
                    Ministries
                  </a>
                </li>
                <li>
                  <a href="#" class="text-blue-200 hover:text-white">
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

app.get("/", (c) => c.html(<Site />));

export default app;
