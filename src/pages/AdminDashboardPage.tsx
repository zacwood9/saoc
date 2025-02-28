import type { FC } from "hono/jsx";

export const AdminDashboardPage: FC = () => (
  <div>
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">
        Welcome to the Admin Dashboard
      </h2>
      <p className="text-gray-700 mb-4">
        This is the administration area for St. Athanasius Orthodox Church
        website. From here, you can manage website content, events, and more.
      </p>

      <div className="flex space-x-2">
        <a
          href="/admin/logout"
          className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
        >
          Logout
        </a>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-3">
          <svg
            className="h-5 w-5 inline-block mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Manage Calendar Events
        </h3>
        <p className="text-gray-600 mb-4">
          Add, edit, or remove events from the parish calendar.
        </p>
        <a href="#" className="text-blue-600 hover:underline">
          Manage Events →
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-3">
          <svg
            className="h-5 w-5 inline-block mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
          Update Content
        </h3>
        <p className="text-gray-600 mb-4">
          Edit website content, announcements, and parish information.
        </p>
        <a href="#" className="text-blue-600 hover:underline">
          Edit Content →
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-3">
          <svg
            className="h-5 w-5 inline-block mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-7.586 7.586a2 2 0 01-2.828 0L3.586 11.586a2 2 0 012.828-2.828l1.172 1.172L13.586 3.586z" />
          </svg>
          Manage Service Schedule
        </h3>
        <p className="text-gray-600 mb-4">
          Update service times and special liturgical events.
        </p>
        <a href="#" className="text-blue-600 hover:underline">
          Update Schedule →
        </a>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-3">
          <svg
            className="h-5 w-5 inline-block mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a1 1 0 10-2 0 8 8 0 0016 0 1 1 0 00-2 0 5.986 5.986 0 00-.454 2.916A5 5 0 008 11z"
              clipRule="evenodd"
            />
          </svg>
          User Management
        </h3>
        <p className="text-gray-600 mb-4">
          Manage admin accounts and permissions.
        </p>
        <a href="/admin/users" className="text-blue-600 hover:underline">
          Manage Users →
        </a>
      </div>
    </div>
  </div>
);
