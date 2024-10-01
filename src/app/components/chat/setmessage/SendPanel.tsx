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
          isNicknameEmpty ? "card-inner" : "card-2 text-black"
        }`}
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <textarea
        placeholder="Mensaje"
        className="p-4 bg-gray-200 rounded-md card-inner text-black"
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="button"
        className="p-2 bg-blue-500 text-white rounded-md"
        onClick={handleSubmit}
      >
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Enviar mensaje</span>
      </button>
    </div>
  );
}
