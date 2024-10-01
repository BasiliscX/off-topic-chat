import MessageList from "./MessageList";
export default function MessageForm() {
  return (
    <div className="flex-grow bg-slate-200 shadow-md rounded-lg">
      <div className="p-4 bg-gray-100 rounded-t-lg">
        <h2 className="text-xl font-bold">Mensajes</h2>
      </div>

      <MessageList />
    </div>
  );
}
