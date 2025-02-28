import type { FC } from "hono/jsx";

export const DonationPage: FC = () => {
  return (
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-blue-900 mb-6">
          Support Our Parish
        </h1>

        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-2xl font-semibold text-blue-800 mb-4">
            Make a Donation
          </h2>
          <p class="text-gray-700 mb-6">
            Your generous donations help us maintain our church, support our
            ministries, and serve our community. Thank you for your support of
            St. Athanasius Orthodox Church.
          </p>

          <div class="mb-8">
            <h3 class="text-xl font-medium text-blue-800 mb-4">
              One-Time Donation
            </h3>
            <div id="stripe-button-container">
              {/* 
                The Stripe button is loaded via client-side JavaScript.
                We'll include the script in the page head and render the button here.
              */}
              <stripe-buy-button
                buy-button-id="buy_btn_1QtercGbBi0LwuLYcjGHxGDX"
                publishable-key="pk_test_51Iz5ZbGbBi0LwuLY4z9b7TPghCnu7AcUaFSRoLiyfhjHntDd4bYOxCyMDqq5dPHMlPcQRzVYij1WHQnWIFQciwcv00tVdTIIe3"
              ></stripe-buy-button>
            </div>
          </div>

          <div class="mb-8">
            <h3 class="text-xl font-medium text-blue-800 mb-4">
              Recurring Donation
            </h3>
            <div>
              <stripe-buy-button
                buy-button-id="buy_btn_1QHBPgGbBi0LwuLYddIDMepg"
                publishable-key="pk_test_51Iz5ZbGbBi0LwuLY4z9b7TPghCnu7AcUaFSRoLiyfhjHntDd4bYOxCyMDqq5dPHMlPcQRzVYij1WHQnWIFQciwcv00tVdTIIe3"
              ></stripe-buy-button>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-6">
            <h3 class="text-xl font-medium text-blue-800 mb-4">
              Other Ways to Give
            </h3>
            <p class="text-gray-700 mb-4">
              If you prefer to donate by check or cash, you can:
            </p>
            <ul class="list-disc pl-5 text-gray-700 mb-4">
              <li class="mb-2">
                Place your donation in the offering basket during services
              </li>
              <li class="mb-2">
                Mail a check to: St. Athanasius Orthodox Church, 300 Sumida
                Gardens Lane, Goleta, CA 93111
              </li>
              <li>
                Contact the church office for information about planned giving
                or other donation options
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-blue-50 rounded-lg p-6">
          <h2 class="text-xl font-semibold text-blue-800 mb-3">
            Thank You for Your Support
          </h2>
          <p class="text-gray-700">
            Your donations make a difference in our parish community and beyond.
            If you have any questions about donating or would like to discuss
            other ways to support our church, please contact our church office.
          </p>
        </div>
      </div>
    </div>
  );
};
