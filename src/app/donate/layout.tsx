import Script from "next/script";

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Script src="https://js.stripe.com/v3/buy-button.js" />
    </>
  );
}
