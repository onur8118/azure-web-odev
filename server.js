const express = require("express");
const path = require("path");
const app = express();

// Azure genellikle 8080 portunu tercih eder
const PORT = process.env.PORT || 8080;

// Statik dosyaların (html, css, js) okunmasını sağlar
app.use(express.static(__dirname));

// Ana sayfa isteği geldiğinde index.html'i gösterir
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Test için API endpoint'i
app.get("/test", (req, res) => {
  res.json({ status: "success", message: "Azure sunucusu aktif!" });
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portu üzerinde çalışıyor.`);
});