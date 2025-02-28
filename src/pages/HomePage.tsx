import type { FC } from "hono/jsx";

export const HomePage: FC = () => (
  <>
    <section className="relative">
      <div className="h-96 bg-cover bg-center hero-background">
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to St. Athanasius
            </h2>
            <p className="text-xl mb-6">
              Come and see the beauty of Orthodox Christianity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calendar-section"
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-lg"
              >
                Service Times
              </a>
              <a
                href="#visit-section"
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about-section" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Christ is in our midst!
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            St. Athanasius Orthodox Church welcomes you. We are a parish of the
            Antiochian Orthodox Christian Archdiocese of North America, serving
            Goleta, Santa Barbara, and surrounding communities.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're Orthodox, interested in learning about Orthodoxy, or
            just visiting, we invite you to join us for worship and fellowship.
          </p>
        </div>
      </div>
    </section>

    <section id="services-section" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Service Schedule
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Sunday Services
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="font-medium">Orthros (Matins):</span>
                <span>9:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Divine Liturgy:</span>
                <span>10:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Agape Meal:</span>
                <span>11:45 AM</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Weekday Services
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="font-medium">Great Vespers:</span>
                <span>Saturday 5:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Daily Matins:</span>
                <span>Monday, Wednesday, Friday 7:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Daily Vespers:</span>
                <span>Tuesday, Thursday 5:30PM</span>
              </li>
              <li>
                <span className="font-medium italic">
                  See calendar for special services and feast days
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="calendar-section" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Calendar
        </h2>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-lg shadow-md">
          <div
            className="hidden md:block relative"
            style={{ paddingTop: "75%" }}
          >
            <iframe
              src="https://calendar.google.com/calendar/embed?src=office%40stathanasius.org&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>

          <div className="md:hidden relative" style={{ paddingTop: "150%" }}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=office%40stathanasius.org&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0&mode=AGENDA"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>

        <div className="text-center mt-6">
          <a
            href="https://calendar.google.com/calendar/embed?src=office%40stathanasius.org&ctz=America%2FLos_Angeles"
            target="_blank"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg"
          >
            View Full Calendar
          </a>
        </div>
      </div>
    </section>

    <section id="about-parish-section" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                About Our Parish
              </h2>
              <p className="text-gray-700 mb-4">
                Founded in 1987, St. Athanasius Orthodox Church has been serving
                the spiritual needs of Orthodox Christians in the Santa Barbara
                area for over 35 years.
              </p>
              <p className="text-gray-700 mb-4">
                Our parish is named after St. Athanasius the Great, a defender
                of Orthodox Christianity in the 4th century who is known for his
                unwavering commitment to the truth of Christ.
              </p>
              <p className="text-gray-700 mb-4">
                We are a diverse and welcoming community united by our shared
                Orthodox faith and traditions.
              </p>
              <a
                href="#"
                className="inline-block mt-2 text-blue-700 hover:text-blue-900 font-medium"
              >
                Learn more about our history →
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://www.stathanasius.org/site/assets/files/11462/img_0197.jpg"
                alt="Church Interior"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="clergy-section" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Our Clergy
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="https://www.stathanasius.org/site/assets/files/12036/img_5760.jpg"
                alt="Fr. Symeon"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-2">
                Fr. Symeon Halsell
              </h3>
              <p className="text-gray-600 italic mb-4">Parish Priest</p>
              <p className="text-gray-700">
                Fr. Symeon has served as the priest of St. Athanasius since
                2020. He received his Master of Divinity from St. Vladimir's
                Orthodox Theological Seminary and was ordained to the priesthood
                in 2019. Fr. Symeon is dedicated to pastoral care, Orthodox
                education, and community outreach.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-700 hover:text-blue-900 font-medium"
              >
                Contact Fr. Symeon →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="visit-section" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Visit Us
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-4">
                Contact Information
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-700 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    300 Sumida Gardens Lane
                    <br />
                    Goleta, CA 93111
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-700 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>(805) 555-1234</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-700 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>office@stathanasius.org</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-bold text-gray-800 mb-2">Office Hours</h4>
                <p>Monday - Friday: 12:00 PM - 5:00 PM</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-xl font-bold text-blue-800">
                  Our Location
                </h3>
              </div>
              <div className="h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6581.416600821109!2d-119.81661062332172!3d34.43416387301559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e93f69b6b77a29%3A0x310258d0bbe016e4!2sSt.%20Athanasius%20Orthodox%20Church!5e0!3m2!1sen!2sus!4v1740705625255!5m2!1sen!2sus"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-4 bg-gray-50">
                <a
                  href="https://maps.app.goo.gl/6Yomddnw7syzkzYe9"
                  target="_blank"
                  className="text-blue-700 hover:text-blue-900 font-medium flex items-center"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
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
  </>
);
