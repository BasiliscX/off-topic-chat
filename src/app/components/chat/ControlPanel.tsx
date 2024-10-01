"use client";

import React, { useState } from "react";

export default function ControlPanel() {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const message = {
      nickname: nickname || "Anon", // Usa "Anon" si nickname está vacío
      content,
      createdAt: new Date().toISOString(),
      tag_id: 0,
    };

    try {
      const response = await fetch(
        "https://off-topic-backend.vercel.app/api/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(message),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Clear the form fields after successful submission
      setNickname("");
      setContent("");
    } catch (error) {
      console.error("Error posting message:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center mt-10 md:mt-0 md:w-1/4 space-y-4">
      <input
        type="text"
        placeholder="Anon"
        className="p-2 bg-gray-200 rounded-md"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <textarea
        placeholder="Mensaje"
        className="p-4 bg-gray-200 rounded-md"
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="button"
        className="p-2 bg-blue-500 text-white rounded-md"
        onClick={handleSubmit}
      >
        Enviar mensaje
      </button>
    </div>
  );
}
