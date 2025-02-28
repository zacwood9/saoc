import type { FC } from "hono/jsx";

export const AdminLoginPage: FC<{ error?: string }> = ({ error }) => (
  <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
    <div className="bg-blue-900 text-white py-4 px-6">
      <h2 className="text-xl font-bold">Admin Login</h2>
    </div>

    <form action="/admin/login" method="post" className="p-6">
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 font-medium mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md transition duration-200"
        >
          Sign In
        </button>
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        <a href="/" className="text-blue-600 hover:underline">
          Return to Website
        </a>
      </div>
    </form>
  </div>
);
