export default function ControlPanel() {
  return (
    <div className="flex flex-col mt-10 md:mt-0 md:w-1/4 space-y-4">
      <button type="button" className="p-2 bg-blue-500 text-white rounded-md">
        Nuevo mensaje
      </button>
      <button type="button" className="p-2 bg-blue-500 text-white rounded-md">
        Borrar mensajes
      </button>
    </div>
  );
}
