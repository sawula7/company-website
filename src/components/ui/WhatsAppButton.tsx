import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '94777924732';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
