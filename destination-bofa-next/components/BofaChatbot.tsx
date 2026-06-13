"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type Message = {
  role: "bot" | "user";
  text: string;
};

const knowledgeBase = [
  {
    label: "Rates",
    keywords: [
      "rate",
      "rates",
      "price",
      "prices",
      "cost",
      "fee",
      "season",
      "night",
      "mid",
      "peak",
      "festive",
      "june",
      "july",
      "december",
    ],
    response:
      "2026 accommodation rates are per villa, per night: Mid Season is KES 75,000 from 3 Jan to 30 Jun; Peak Season is KES 87,000 from 1 Jul to 31 Aug; Mid Season is KES 75,000 from 1 Sep to 14 Dec; Festive Season is KES 105,000 from 15 Dec to 3 Jan. Rates cover accommodation only.",
  },
  {
    label: "Villa Capacity",
    keywords: [
      "capacity",
      "guests",
      "people",
      "bedroom",
      "bedrooms",
      "sleep",
      "occupancy",
      "adults",
      "children",
      "kids",
    ],
    response:
      "Each villa hosts up to 8 guests. Each villa has four bedrooms: three ensuite rooms and one twin room with a private bathroom. The enquiry form allows you to share the number of adults and children so the reservations team can advise correctly.",
  },
  {
    label: "Villa Amani vs Villa Raha",
    keywords: [
      "amani",
      "raha",
      "difference",
      "different",
      "which villa",
      "decor",
      "interior",
      "style",
      "villa selection",
      "choose",
    ],
    response:
      "Villa Amani and Villa Raha are twin beachfront villas with similar layouts, but their interior decor and atmosphere differ. Guests are encouraged to preview both villa videos before booking so they choose the villa style they prefer.",
  },
  {
    label: "Property Layout",
    keywords: [
      "property",
      "layout",
      "tour",
      "compound",
      "whole property",
      "beachfront",
      "beach",
      "pool",
      "garden",
      "gazebo",
    ],
    response:
      "The Destination@Bofa has twin beachfront villas set directly by the beach, with private pools, garden spaces, furnished poolside gazebo spaces, open indoor-outdoor living, and direct access to the calm Bofa coastal setting.",
  },
  {
    label: "Comfort & Services",
    keywords: [
      "chef",
      "housekeeping",
      "cleaning",
      "security",
      "wifi",
      "wi-fi",
      "air conditioning",
      "amenities",
      "service",
      "generator",
      "backup",
      "power",
      "water",
      "fresh water",
      "non-seawater",
      "non seawater",
    ],
    response:
      "The stay includes daily housekeeping, private chef service, Wi-Fi, air conditioning throughout, 24/7 security, bathroom amenities, towels, onsite parking, backup generator support, and fresh water supply.",
  },
  {
    label: "Events & Retreats",
    keywords: [
      "event",
      "events",
      "birthday",
      "wedding",
      "retreat",
      "corporate",
      "anniversary",
      "picnic",
      "wellness",
      "gathering",
    ],
    response:
      "The villas can support private gatherings such as picnics, birthdays, anniversaries, weddings, corporate retreats, and wellness escapes. The team can discuss arrangements depending on your group size and needs.",
  },
  {
    label: "Booking",
    keywords: [
      "book",
      "booking",
      "reserve",
      "reservation",
      "availability",
      "available",
      "enquiry",
      "contact",
      "phone",
      "call",
      "whatsapp",
    ],
    response:
      "To enquire or reserve, share your preferred dates, villa selection, number of adults and children, and any special arrangements. You can use the booking form or contact reservations on +254 736 786 014 or +254 733 786 862.",
  },
  {
    label: "Guest Terms",
    keywords: [
      "check in",
      "checkout",
      "check-in",
      "check out",
      "deposit",
      "payment",
      "rules",
      "pork",
      "pets",
      "pet",
      "pool",
      "terms",
      "house rules",
    ],
    response:
      "Check-in is from 2:00 PM to 9:00 PM and checkout is at 10:00 AM. A 10% deposit is required to hold bookings. Each villa is for listed guests only, with a maximum occupancy of 8 people. Pets are not allowed, and pork is not permitted on the villa premises.",
  },
  {
    label: "Location",
    keywords: [
      "location",
      "where",
      "kilifi",
      "bofa",
      "creek",
      "near",
      "map",
      "maps",
      "directions",
      "google maps",
    ],
    response:
      "The Destination@Bofa is located in Kilifi/Bofa, near Bofa Beach and Kilifi Creek. You can view the location here: https://maps.app.goo.gl/uS7Xbq8jpewA6VT26",
  },
  {
    label: "Instagram",
    keywords: [
      "instagram",
      "ig",
      "handle",
      "social",
      "page",
      "account",
    ],
    response:
      "The Instagram handle is IG Handle: @thedestinationkilifi.",
  },
];

const defaultBotMessage =
  "Hi, I can help with rates, villa capacity, Villa Amani vs Villa Raha, booking, services, guest terms, location, and the IG handle.";

export default function BofaChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: defaultBotMessage,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickReplies = useMemo(
    () => [
      "Rates",
      "Villa Amani vs Villa Raha",
      "Villa Capacity",
      "Services",
      "Booking",
      "Guest Terms",
      "Location",
      "IG Handle",
    ],
    []
  );

  useEffect(() => {
    if (!open) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, open]);

  function getResponse(question: string) {
    const normalized = question.toLowerCase();

    const match = knowledgeBase.find((item) =>
      item.keywords.some((keyword) => normalized.includes(keyword))
    );

    if (match) return match.response;

    return "I can help with rates, booking, villa capacity, Villa Amani vs Villa Raha, services, guest terms, location, and the IG handle. For anything specific, WhatsApp the reservations team for the fastest confirmation.";
  }

  function askQuestion(question: string) {
    const trimmed = question.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "bot", text: getResponse(trimmed) },
    ]);

    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    askQuestion(input);
  }

  return (
    <div className={`bofa-chatbot ${open ? "is-open" : ""}`}>
      {open && (
        <div className="bofa-chatbot-panel">
          <div className="bofa-chatbot-header">
            <div>
              <span>Villa Assistant</span>
              <strong>The Destination@Bofa</strong>
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
            <div className="bofa-chatbot-messages">
              {messages.map((message, index) => (
                <p
                  className={`bofa-message ${message.role}`}
                  key={`${message.role}-${index}`}
                >
                  {message.text}
                </p>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="bofa-chatbot-options">
              {quickReplies.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => askQuestion(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <form className="bofa-chatbot-form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                placeholder="Ask about rates, villas, booking..."
                onChange={(event) => setInput(event.target.value)}
              />
              <button type="submit">Ask</button>
            </form>
          </div>

          <a
            className="bofa-chatbot-cta"
            href="https://wa.me/254736786014?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20The%20Destination%40Bofa."
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
        aria-label="Open villa assistant chat"
        onClick={() => setOpen((current) => !current)}
      >
        <span>Chat</span>
      </button>
    </div>
  );
}