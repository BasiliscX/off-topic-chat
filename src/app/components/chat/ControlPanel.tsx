import React from "react";
import MessageForm from "./MessageForm";
import TagSelector from "./TagSelector";

interface ControlPanelProps {
  onSendMessage: (message: string) => void;
  currentTag: number;
  setCurrentTag: (tag: number) => void;
  refreshMessages: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  onSendMessage,
  currentTag,
  setCurrentTag,
  refreshMessages,
}) => {
  return (
    <div className="flex flex-col md:w-1/3 m-4">
      <MessageForm
        onSendMessage={onSendMessage}
        currentTag={currentTag.toString()}
        refreshMessages={refreshMessages}
      />
      <TagSelector currentTag={currentTag} setCurrentTag={setCurrentTag} />
    </div>
  );
};

export default ControlPanel;
