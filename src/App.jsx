import emailjs from "@emailjs/browser";
import Beat from "./Beat";
function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* MENÚ SUPERIOR */}
      <header className="absolute top-0 z-20 flex w-full items-center justify-between px-8 py-8">

       <img
  src="/imagenes/logo.png"
  alt="StarNight Disco"
  className="w-36 md:w-44"
/>

        <nav className="hidden gap-8 md:flex">
          <a href="#nosotros">Nosotros</a>
          <a href="#fiestas">Fiestas</a>
          <a href="#musica">Música</a>
          <a href="#contacto">Contacto</a>
        </nav>

  <a
  href="#contacto"
  className="rounded-full bg-white px-8 py-3 text-black font-medium hover:bg-gray-200 transition"
>
  Cotiza tu evento
</a>
      </header>

      {/* IMAGEN PRINCIPAL */}
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center pt-32"
        style={{
          backgroundImage: "url('/imagenes/dj.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 text-center">
          
<h2 className="text-5xl font-bold tracking-wide md:text-7xl">
  NOS MUEVE LA MÚSICA
</h2>


          <p className="mt-6 text-xl">
            Hacemos que cada noche sea inolvidable.
          </p>

        </div>
      </section>

      {/* SECCIONES */}
      
<section
  id="nosotros"
  className="bg-black px-6 py-28 text-center"
>
  <h2 className="text-4xl font-bold md:text-5xl">
    NOSOTROS
  </h2>

  <div className="mx-auto mt-6 h-1 w-16 bg-purple-500"></div>

  <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-gray-300">
    En StarNight creemos que la música es el alma
    de cada celebración.

    Nos dedicamos a crear experiencias únicas,
    acompañando cada momento con la música ideal.

    Casamientos, cumpleaños de 15, fiestas y eventos
    especiales. Cada celebración es diferente y
    queremos que la tuya sea inolvidable.
  </p>
</section>


    

<section id="fiestas" className="bg-zinc-950 px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <h2 className="text-center text-4xl font-bold md:text-5xl">
      FIESTAS
    </h2>

    <div className="mx-auto mt-6 h-1 w-16 bg-purple-500"></div>

    <p className="mb-12 mt-8 text-center text-gray-300">
      Momentos únicos, música y celebraciones inolvidables.
    </p>

    {/* GALERÍA DE FOTOS */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

      {["fiesta1.jpg", "fiesta2.jpeg", "fiesta3.jpeg", "fiesta4.jpeg"].map((foto) => (
        <div
          key={foto}
          className="overflow-hidden rounded-xl"
        >
          <img
            src={`/imagenes/${foto}`}
            alt="Evento StarNight"
            className="h-72 w-full object-cover transition duration-500 hover:scale-105 md:h-80"
          />
        </div>
      ))}

    </div>
  </div>
</section>


<section id="musica" className="bg-black px-6 py-24">
  <div className="mx-auto max-w-5xl text-center">

    <h2 className="text-4xl font-bold md:text-5xl">
      MÚSICA
    </h2>

    <div className="mx-auto mt-6 h-1 w-16 bg-purple-500"></div>

    <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-300">
      La música nos mueve, nos conecta y transforma
      cada momento en una experiencia única.
      Escuchá nuestra selección musical y empezá
      a vivir la experiencia StarNight.
    </p>

    {/* REPRODUCTOR DE SPOTIFY */}
    <div className="mx-auto mt-12 max-w-3xl">
      <iframe
        title="Playlist de StarNight en Spotify"
        src="https://open.spotify.com/embed/playlist/0vzWHQPvNdcNpadc1fmuXI"
        width="100%"
        height="352"
        style={{ borderRadius: "12px" }}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>

  </div>
</section>


<section id="contacto" className="bg-zinc-950 px-6 py-24">
  <div className="mx-auto max-w-2xl">

    <h2 className="text-center text-4xl font-bold">
      COTIZA TU EVENTO
    </h2>

    <div className="mx-auto mt-6 h-1 w-16 bg-blue-500"></div>

    <p className="mt-8 text-center text-gray-300">
      Completá tus datos y solicitá un presupuesto
      personalizado para tu evento.
    </p>

    <form
      className="mt-12 space-y-5"
      
onSubmit={async (e) => {
  e.preventDefault();

  const formulario = e.currentTarget;
  const datos = new FormData(formulario);

  const parametros = {
    nombre: datos.get("nombre"),
    evento: datos.get("evento"),
    fecha: datos.get("fecha"),
    invitados: datos.get("invitados"),
    telefono: datos.get("telefono"),
  };

  try {
    await emailjs.send(
      "service_lz9enls",
      "template_5qrq5og",
      parametros,
      "65oXaq88JkGhoplFl"
    );

    alert("¡Tu solicitud fue enviada correctamente!");
    formulario.reset();

 
} catch (error) {
  console.error("Error de EmailJS:", error);
  alert("Error al enviar: " + (error?.text || error?.message || "Error desconocido"));
}

}}

    >

      <input
        name="nombre"
        type="text"
        placeholder="Nombre completo"
        required
        className="w-full rounded-lg bg-zinc-800 p-4 text-white"
      />

      <select
        name="evento"
        required
        defaultValue=""
        className="w-full rounded-lg bg-zinc-800 p-4 text-white"
      >
        <option value="" disabled>
          Seleccioná el tipo de evento
        </option>
        <option>Casamiento</option>
        <option>Cumpleaños de 15</option>
        <option>Cumpleaños</option>
        <option>Otro evento</option>
      </select>

      <input
        name="fecha"
        type="date"
        required
        className="w-full rounded-lg bg-zinc-800 p-4 text-white"
      />

      <input
        name="invitados"
        type="number"
        min="1"
        placeholder="Cantidad aproximada de invitados"
        required
        className="w-full rounded-lg bg-zinc-800 p-4 text-white"
      />

      <input
        name="telefono"
        type="tel"
        placeholder="Teléfono de contacto"
        required
        className="w-full rounded-lg bg-zinc-800 p-4 text-white"
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 p-4 font-bold transition hover:bg-blue-700"
      >
        SOLICITAR PRESUPUESTO
      </button>

    </form>
  </div>
      </section>

      <Beat />

    </div>
  );
}

export default App;