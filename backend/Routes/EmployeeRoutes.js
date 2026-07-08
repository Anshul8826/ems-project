const route = require("express").Router();
const { getEmployees, addEmployee, deleteEmployee } = require("../Controller/EmployeeController");

route.get("/", getEmployees);
route.post("/", addEmployee);
route.delete("/:id", deleteEmployee);

module.exports = route;
