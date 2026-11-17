
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Conectar MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado correctamente"))
  .catch(error => console.error("Error MongoDB:", error.message));

// Modelo de fechas reservadas
const Reserva = mongoose.model("Reserva", new mongoose.Schema({
  fecha: { type: String, required: true, unique: true },
  evento: String
}));

// Comprobar si una fecha está disponible
app.get("/api/disponibilidad/:fecha", async (req, res) => {
  try {
    const fecha = req.params.fecha;

    if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha) ||
        Number.isNaN(Date.parse(fecha)) ||
        new Date(fecha).toISOString().slice(0, 10) !== fecha) {
      return res.status(400).json({
        mensaje: "Fecha inválida"
      });
    }

    const reserva = await Reserva.findOne({ fecha });

    res.json({
      fecha,
      disponible: !reserva
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "No se pudo consultar la disponibilidad"
    });
  }
});

// Comprobar que la API funciona
app.get("/api", (req, res) => {
  res.json({
    mensaje: "API de StarNight funcionando correctamente"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
