
import { useState } from "react";

function Beat() {
  const [abierto, setAbierto] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [conversacion, setConversacion] = useState([
    {
      autor: "beat",
      texto: "¡Hola! 🎧 Soy BEAT. ¿En qué puedo ayudarte con tu evento?"
    }
  ]);

  function responder(pregunta) {
    const texto = pregunta.toLowerCase();

    if (texto.includes("presupuesto") || texto.includes("precio") || texto.includes("cotizar")) {
      return "¡Claro! 🎉 Podés solicitar un presupuesto personalizado en la sección Cotiza tu evento.";
    }

    if (texto.includes("fecha") || texto.includes("disponible") || texto.includes("reserva")) {
      return "📅 Podemos consultar la disponibilidad de tu fecha. Por ahora, completá el formulario para coordinar tu evento.";
    }

    if (texto.includes("música") || texto.includes("musica") || texto.includes("dj")) {
      return "🎶 En StarNight nos encanta crear experiencias musicales para cada celebración. ¡Contanos qué música te gusta!";
    }

    if (texto.includes("fiesta") || texto.includes("casamiento") || texto.includes("cumpleaños") || texto.includes("evento")) {
      return "🎉 Realizamos casamientos, cumpleaños de 15, cumpleaños y otros eventos especiales.";
    }

    if (texto.includes("hola") || texto.includes("buenas")) {
      return "¡Hola! 😊 ¿Querés consultar por un evento, una fecha o un presupuesto?";
    }

    return "🎧 Puedo ayudarte con información sobre eventos, música, fechas y presupuestos de StarNight. ¿Qué te gustaría saber?";
  }

  function enviar(textoIngresado = mensaje) {
    const texto = textoIngresado.trim();
    if (!texto) return;

    const respuesta = responder(texto);

    setConversacion((anterior) => [
      ...anterior,
      { autor: "usuario", texto },
      { autor: "beat", texto: respuesta }
    ]);

    setMensaje("");
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {abierto && (
        <div className="mb-4 flex h-96 w-[min(350px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl">
          <div className="flex items-center justify-between bg-purple-700 p-4">
            <div>
              <h3 className="font-bold">🎧 Asistente BEAT</h3>
              <p className="text-xs text-purple-100">StarNight Disco</p>
            </div>
            <button
              type="button"
              onClick={() => setAbierto(false)}
              aria-label="Cerrar chat"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {conversacion.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl p-3 text-sm ${
                  item.autor === "usuario"
                    ? "ml-8 bg-purple-700"
                    : "mr-8 bg-zinc-800"
                }`}
              >
                {item.texto}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 px-3 pb-2">
            {["Presupuestos", "Fechas disponibles", "Eventos"].map((opcion) => (
              <button
                key={opcion}
                type="button"
                onClick={() => enviar(opcion)}
                className="rounded-full border border-purple-500 px-3 py-1 text-xs hover:bg-purple-700"
              >
                {opcion}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              enviar();
            }}
            className="flex gap-2 border-t border-zinc-700 p-3"
          >
            <input
              type="text"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribí tu pregunta..."
              aria-label="Escribí tu pregunta"
              className="min-w-0 flex-1 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-white outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-purple-700 px-4 py-2 font-bold hover:bg-purple-600"
            >
              ➤
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setAbierto(!abierto)}
        className="ml-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-700 text-3xl shadow-lg transition hover:scale-105 hover:bg-purple-600"
        aria-label={abierto ? "Cerrar asistente BEAT" : "Abrir asistente BEAT"}
      >
        🎧
      </button>
    </div>
  );
}

export default Beat;
