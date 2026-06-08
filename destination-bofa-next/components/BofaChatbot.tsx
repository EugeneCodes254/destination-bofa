"use client";

import { useState } from "react";

const quickReplies = [
  {
    label: "Rates",
    response:
      "Rates start from KES 75,000 per villa per night depending on the season. Share your dates and group size for accurate availability.",
  },
  {
    label: "Capacity",
    response:
      "Each villa hosts up to 8 guests comfortably. The property has twin beachfront villas, each with four bedrooms.",
  },
  {
    label: "Location",
    response:
      "The Destination at Bofa is located along the Kilifi coast near Bofa Beach, with direct beachfront access.",
  },
  {
    label: "Book",
    response:
      "You can send a booking enquiry through the form or WhatsApp the reservations team on +254 736 786 014.",
  },
];

export default function BofaChatbot() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState(
    "Hi, I can help with rates, villa capacity, location, and booking enquiries."
  );

  return (
    <div className={`bofa-chatbot ${open ? "is-open" : ""}`}>
      {open && (
        <div className="bofa-chatbot-panel">
          <div className="bofa-chatbot-header">
            <div>
              <span>Villa Assistant</span>
              <strong>The Destination at Bofa</strong>
            </div>

            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <div className="bofa-chatbot-body">
            <p>{answer}</p>

            <div className="bofa-chatbot-options">
              {quickReplies.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setAnswer(item.response)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <a
            className="bofa-chatbot-cta"
            href="https://wa.me/254736786014?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20The%20Destination%20at%20Bofa."
            target="_blank"
            rel="noreferrer"
          >
            Continue on WhatsApp
          </a>
        </div>
      )}

      <button
        className="bofa-chatbot-toggle"
        type="button"
        aria-label="Open villa assistant"
        onClick={() => setOpen((current) => !current)}
      >
        <span>N</span>
      </button>
    </div>
  );
}