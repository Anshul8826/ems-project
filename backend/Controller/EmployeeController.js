let employees = [];
let nextId = 1;

const getEmployees = (req, res) => {
  res.json(employees);
};

const addEmployee = (req, res) => {
  const { name, department, salary } = req.body;

  const newEmployee = {
    id: nextId++,
    name,
    department,
    salary,
  };

  employees.push(newEmployee);
  res.status(201).json(newEmployee);
};

const deleteEmployee = (req, res) => {
  const id = parseInt(req.params.id);
  employees = employees.filter((emp) => emp.id !== id);
  res.status(200).json({ message: "Deleted successfully" });
};

module.exports = { getEmployees, addEmployee, deleteEmployee };
