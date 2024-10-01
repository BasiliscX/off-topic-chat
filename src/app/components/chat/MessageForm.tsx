import React from "react";
import { FaSync } from "react-icons/fa";

interface MessageFormProps {
  onSendMessage: (message: string, nickname: string, tag: string) => void;
  currentTag: string;
  refreshMessages: () => void;
}

const MessageForm: React.FC<MessageFormProps> = () => {
  return (
    <form className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={"anonymous"}
          className="p-2 border border-gray-300 rounded-md focus:outline-none flex-grow"
          placeholder="Tu nickname..."
        />
        <div className="relative group">
          <button
            type="button"
            className="p-2 bg-gray-200 rounded-md focus:outline-none"
          >
            <FaSync className="text-gray-600" />
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-max p-2 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Actualizar mensajes
          </div>
        </div>
      </div>
      <input
        type="text"
        value={"Hola"}
        className="p-2 border border-gray-300 rounded-md focus:outline-none"
        placeholder="Escribe tu mensaje..."
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-md hidden md:block"
      >
        Enviar
      </button>
    </form>
  );
};

export default MessageForm;
