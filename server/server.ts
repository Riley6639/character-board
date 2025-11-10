const forceDatabaseRefresh = false;

import express from "express";
import cors from "cors"
import path from "path";
import { fileURLToPath } from "url";
import { sequelize } from '.models/index.js'
import router from "./routes/index.js"



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json());

app.use(router);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
  });
});

