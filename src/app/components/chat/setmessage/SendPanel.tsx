"use client";

import React, { useState, useEffect } from "react";

export default function SendPanel() {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [isNicknameEmpty, setIsNicknameEmpty] = useState(true);

  useEffect(() => {
    const savedNickname = localStorage.getItem("nickname");
    if (savedNickname) {
      setNickname(savedNickname);
      setIsNicknameEmpty(savedNickname.trim() === "");
    }
  }, []);

  useEffect(() => {
    if (nickname) {
      localStorage.setItem("nickname", nickname);
    }
    setIsNicknameEmpty(nickname.trim() === "");
  }, [nickname]);

  const handleSubmit = async () => {
    const message = {
      nickname: nickname || "Anon",
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
        className={`p-2 bg-gray-200 rounded-md ${
          isNicknameEmpty ? "card-inner" : "card-2"
        }`}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <textarea
        placeholder="Mensaje"
        className="p-4 bg-gray-200 rounded-md card-inner"
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
