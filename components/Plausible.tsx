import Script from "next/script";

export const Plausible = () => {
  return (
    <Script
      defer
      data-domain="fraps.hackclub.com"
      src="https://plausible.io/js/script.js"
    />
  );
};
