require("dotenv").config();
const express = require("express");
const path = require("path");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.use(express.static('build'))

// app.get("/", (req, res) => {
// res.json({ message: "API running..." });
// });

app.use("/api/products", productRoutes);

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
