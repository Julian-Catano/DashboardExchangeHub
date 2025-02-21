const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3001;

app.get("/estadisticas", (req, res) => {
  res.json({
    cambios_hechos: 120,
    cambios_cancelados: 15,
    cambios_en_espera: 8,
  });
});

app.get("/ganancias", (req, res) => {
  res.json({
    gananciasDia05: 1500000,
    gananciasDia10: 800000,
    gananciasDia15: 340000,
    gananciasDia20: 200000,
    gananciasDia25: 400000,
    gananciasDia30: 450000,
  });
});

app.get("/cambios-por-ciudad", (req, res) => {
  res.json([
    { ciudad: "Medellín", cambios: 45 },
    { ciudad: "Bogotá", cambios: 60 },
    { ciudad: "Cali", cambios: 30 },
  ]);
});
app.get("/exchanges", (req, res) => {
  res.json([
    {
      idExchange: 1,
      idArticleOne: 101,
      idArticleTwo: 202,
      idUserOne: 1,
      idUserTwo: 2,
      exchangeDate: "2024-02-20",
      status: "completed",
    },
    {
      idExchange: 2,
      idArticleOne: 103,
      idArticleTwo: 204,
      idUserOne: 3,
      idUserTwo: 4,
      exchangeDate: "2024-02-19",
      status: "pending",
    },
  ]);
});


app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));
