export default function ControlPanel() {
  return (
    <div className="flex flex-col justify-center mt-10 md:mt-0 md:w-1/4  space-y-4">
      <input
        type="text"
        placeholder="Anon"
        className="p-2 bg-gray-200 rounded-md"
      />
      <textarea
        placeholder="Mensaje"
        className="p-4 bg-gray-200 rounded-md"
        rows={4}
      />
      <button type="button" className="p-2 bg-blue-500 text-white rounded-md">
        Enviar mensaje
      </button>
    </div>
  );
}
