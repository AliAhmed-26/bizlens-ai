import express from "express";
import pool from "./config/db.js";
import businessRoutes from "./routes/businessRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"
import cors from "cors"


const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/businesses", businessRoutes)
app.use("/api/products", productRoutes)
app.use("/api/dashboard", dashboardRoutes)

app.get("/", (req, res) => {
  res.json({
    message: "BizLens API is running",
  });
});

const PORT = 5000;

app.listen(PORT, async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("PostgreSQL connected successfully");
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error("PostgreSQL connection failed:", error);
  }
});