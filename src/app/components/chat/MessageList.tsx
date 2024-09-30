import React, { useEffect, useRef } from "react";

interface Message {
  nickname: string;
  content: string;
  created_at?: string;
}

interface MessageListProps {
  messages: Message[];
}

/**
 * Component for displaying a list of messages.
 * @param {Array} messages - Array of message objects to display.
 */
const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desplazar el contenedor de mensajes al fondo
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={messagesEndRef}
      className="h-64 overflow-y-scroll mb-4 scrollbar-hide"
    >
      {messages.map((msg, index) => (
        <div key={index} className="p-2 border-b border-gray-200">
          <strong>{msg.nickname}:</strong> {msg.content}
          <div className="text-xs text-gray-500">
            {msg.created_at
              ? new Date(msg.created_at).toLocaleString()
              : "No date available"}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
