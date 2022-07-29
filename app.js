import express from "express";

// 加密插件
import CryptoJS from "crypto-js";

const app = express();
const port = 3000;

const hash = CryptoJS.SHA256("Message").toString();

app.get("/", (req, res) => {
  res.send(hash);
});

app.listen(port, () => {
  console.log(`go: http://localhost:${port}`);
});
