const express = require("express");
const app = express();

// Azure için önemli
const PORT = process.env.PORT || 3000;

// Ana sayfa
app.get("/", (req, res) => {
  res.send("Azure CI/CD çalışıyor 🚀");
});

// Basit endpoint
app.get("/test", (req, res) => {
  res.json({ message: "API çalışıyor" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});