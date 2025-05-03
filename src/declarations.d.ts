declare namespace JSX {
  interface IntrinsicElements {
    "stripe-buy-button": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      clientReferenceId?: string;
      publishableKey?: string;
      customerEmail?: string;
      [key: string]: any;
    };
  }
}
