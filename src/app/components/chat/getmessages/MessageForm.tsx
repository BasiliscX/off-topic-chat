import MessageList from "./MessageList";
export default function MessageForm() {
  return (
    <div className="flex-grow md:w-0 bg-slate-200 shadow-md rounded-lg card">
      <div className="p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Mensajes</h2>
      </div>

      <MessageList />
    </div>
  );
}
