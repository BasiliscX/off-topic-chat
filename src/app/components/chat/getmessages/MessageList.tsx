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
          `${process.env.NEXT_PUBLIC_API_URL}/api/messages`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
    const intervalId = setInterval(fetchMessages, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-4 h-40 md:h-4/5 overflow-y-auto flex flex-col-reverse card-inner">
      {messages
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
