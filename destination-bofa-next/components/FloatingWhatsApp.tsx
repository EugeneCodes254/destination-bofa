export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hello, I would like to enquire about The Destination at Bofa."
  );

  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/254736786014?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with The Destination at Bofa on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M16.04 3.2A12.7 12.7 0 0 0 5.1 22.37L3.6 28.8l6.58-1.72A12.7 12.7 0 1 0 16.04 3.2Zm0 23.12a10.54 10.54 0 0 1-5.38-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.5 10.5 0 1 1 8.88 4.89Zm5.78-7.87c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.23 3.4 5.4 4.77.75.32 1.34.51 1.8.65.76.24 1.45.21 1.99.13.61-.09 1.88-.77 2.15-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
    </a>
  );
}