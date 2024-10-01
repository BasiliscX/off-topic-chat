"use client";

import React, { useEffect, useState } from "react";

interface Message {
  content: string;
  created_at: string;
  nickname: string;
  tag_id: number;
}

export default function MessageList() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          "https://off-topic-backend.vercel.app/api/messages"
        );
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="flex-grow bg-slate-200 shadow-md rounded-lg">
      <div className="p-4 bg-gray-100 rounded-t-lg">
        <h2 className="text-xl font-bold">Mensajes</h2>
      </div>

      <div className="p-4 h-44 md:h-4/5 overflow-y-auto flex flex-col-reverse">
        {messages
          .slice()
          .reverse()
          .map((message, index) => (
            <div key={index} className="mb-4 p-4 border rounded-md shadow-sm">
              <div className="font-bold">{message.nickname}</div>
              <div className="mt-2">{message.content}</div>
              <div className="mt-1 text-sm text-gray-500">
                {new Date(message.created_at).toLocaleString()}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
