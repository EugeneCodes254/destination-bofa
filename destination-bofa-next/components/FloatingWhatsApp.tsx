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
      <span>WhatsApp</span>
    </a>
  );
}