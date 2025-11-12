const forceDatabaseRefresh = false;

import express from "express";
import cors from "cors"
import path from "path";
import { fileURLToPath } from "url";
import { sequelize } from './models/index.js'
import router from "./routes/index.js"



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const app = express();
const PORT = process.env.PORT || 3001

console.log('mounting cors')
app.use(cors());

console.log('Mounting express')
app.use(express.json());

console.log('mounting /api router')
app.use('/api', router);

// console.log('mounting *')
// app.get('/*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
// });

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
  });
});

