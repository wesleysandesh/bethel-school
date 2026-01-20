"use client";

import contact from "@/content/contact.json";

export default function MobileContactButtons() {
  return (
    <div className="fixed bottom-6 left-4 right-4 z-[9999] flex gap-4 md:hidden">
      {/* Call Button */}
      <a
        href={`tel:${contact.phone}`}
        className="flex-1 bg-blue-200 text-blue-900 rounded-full py-3
           flex items-center justify-center gap-2 shadow-xl
           border border-blue-300"
      >
        📞 <span className="font-semibold">Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
          contact.whatsappMessage,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-green-600 text-white rounded-full py-3
                   flex items-center justify-center gap-2 shadow-xl"
      >
        💬 <span className="font-semibold">WhatsApp</span>
      </a>
    </div>
  );
}
