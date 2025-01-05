const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000; // Puerto dinámico para Render

app.use(cors());
app.use(express.json()); // Permitir recibir datos en formato JSON

// Base de datos en memoria (puedes usar una real más adelante)
let resultados = [];

// Ruta para obtener los resultados
app.get("/resultados", (req, res) => {
  res.json(resultados);
});

// Ruta para agregar un nuevo resultado
app.post("/resultados", (req, res) => {
  const { tiempo, resultado } = req.body;
  if (tiempo === undefined || !resultado) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  // Agregar el resultado a la "base de datos"
  resultados.push({ tiempo, resultado, fecha: new Date() });
  res.status(201).json({ message: "Resultado guardado" });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
