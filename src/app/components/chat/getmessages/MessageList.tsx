"use client";

import React, { useEffect, useState } from "react";

// Interface para mensajes
interface Message {
  content: string;
  created_at: string;
  nickname: string;
  tag_id: number;
}

// Componente principal
export default function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para el loader

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/messages`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMessages(data);
        setIsLoading(false); // Dejar de mostrar el loader
      } catch (error) {
        console.error("Error fetching messages:", error);
        setIsLoading(false); // Dejar de mostrar el loader incluso en error
      }
    };

    fetchMessages();
    const intervalId = setInterval(fetchMessages, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  // Esqueleto de loader
  const skeletonLoader = (
    <div className="skeleton-loader">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-line skeleton-nickname"></div>
          <div className="skeleton-line skeleton-content"></div>
          <div className="skeleton-line skeleton-date"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-4 h-64 md:h-4/5 overflow-y-auto flex flex-col-reverse card-inner text-black">
      {isLoading
        ? skeletonLoader // Muestra el loader si está cargando
        : messages
            .slice()
            .reverse()
            .map((message, index) => (
              <div
                key={index}
                className="mb-4 p-4 border rounded-md shadow-sm card"
              >
                <div className="font-bold">{message.nickname}</div>
                <div className="mt-2">{message.content}</div>
                <div className="mt-1 text-sm text-gray-500">
                  {new Date(message.created_at).toLocaleString()}
                </div>
              </div>
            ))}
    </div>
  );
}
