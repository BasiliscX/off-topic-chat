import React from "react";
import SendPanel from "./setmessage/SendPanel";
import MessageForm from "./getmessages/MessageForm";

const Chat = () => {
  return (
    <div className="bg-gray-100 pt-3.5 h-[86vh] flex flex-col items-center justify-center bg-patern-2">
      <h1 className="invisible md:visible text-4xl font-bold text-black">
        Off Topic Chat
      </h1>
      <div className="flex flex-col-reverse md:flex-row w-full h-2/3 px-5 md:px-10 md:space-x-4 mt-4">
        <SendPanel />
        <MessageForm />
      </div>
    </div>
  );
};

export default Chat;
