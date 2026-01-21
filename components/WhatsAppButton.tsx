
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5511999999999'; // From footer content
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Resilient.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-transform duration-300 hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.317 4.814 4.895-1.297zM9.372 8.408c-.135-.271-.27-.271-.405-.271-.135 0-.27.001-.405.001-.135 0-.338.068-.506.338-.168.271-.675 1.651-.675 2.822 0 1.171.675 2.158.778 2.326.104.168 1.35 2.122 3.324 2.923.442.203.803.324 1.088.405.419.122.803.104 1.118-.068.39-.189 1.651-.675 1.888-1.317.237-.642.237-1.171.168-1.317-.068-.147-.203-.229-.405-.317-.203-.087-1.171-.571-1.35-.642-.18-.068-.315-.104-.45.168-.135.271-.506.642-.61.778-.104.135-.203.168-.38.087-.18-.087-.743-.271-1.418-.871-.525-.487-.889-1.088-.992-1.272-.104-.184-.001-.271.087-.38.087-.104.203-.271.317-.405.113-.135.147-.229.229-.38.087-.152.043-.29-.023-.38-.068-.087-.315-.743-.43-.993z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
