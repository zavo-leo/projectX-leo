import express from "express";
import bodyParser from "body-parser";
import reviewsRoutes from "./routes/reviews.js";
import cors from "cors"; //dit zorgt voor Cross-Origin Resource Sharing, wat ervoor zorgt dat de ene website bij de andere website data mag pakken
import { client } from "./database/client.js";

const app = express();

app.use(cors());
app.use(express.static("public")); // publieke folder

const PORT = 5000;
app.use(bodyParser.json());
app.use("/reviews", reviewsRoutes); // zorgt ervoor dat reviews.js altijd met /reviews start

let db;

app.use(express.json()); // JSON verwerken

async function start() {
  try {
    await client.connect();
    db = client.db("reviewsdb"); // gebruik de databank 'reviewsdb'

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Fout bij verbinden met MongoDB:", err);
  }
}

start();
