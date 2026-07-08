console.log("Program started");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const employeeRoutes = require("./Routes/EmployeeRoutes");
app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Backend is working");
});

const PORT = 8888;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
