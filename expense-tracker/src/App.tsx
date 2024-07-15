import { ChangeEvent, useState } from "react";
import { Expense, AddExpenseForm } from "./components/AddExpenseForm";
import { ExpensesTable } from "./components/ExpensesTable";

const App = () => {
  const [categories, setCategories] = useState([
    "Fun",
    "Food",
    "Transport",
    "Housing",
  ]);

  const [expenses, setExpenses] = useState([
    { description: "Cinema", amount: 15, category: "Fun" },
    { description: "Burgers", amount: 30, category: "Food" },
    { description: "Bus Tickets", amount: 10, category: "Transport" },
    { description: "Train Tickets", amount: 20, category: "Transport" },
    { description: "Rent", amount: 550, category: "Housing" },
    { description: "Drinks", amount: 30, category: "Food" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryFilterChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleExpenseDelete = (expense: Expense) => {
    const expensesCopy = [
      ...expenses.map((e: Expense) => {
        return { ...e };
      }),
    ];
    setExpenses(expensesCopy.filter((e: Expense) => {
      return (e.description !== expense.description || e.amount !== expense.amount || e.category !== expense.category)
    }));
  };

  return (
    <main>
      <AddExpenseForm
        onSubmit={(expense) => console.log(expense)}
        categories={categories}
      />
      <ExpensesTable
        selectedCategory={selectedCategory}
        handleChange={handleCategoryFilterChange}
        handleDelete={handleExpenseDelete}
        categories={categories}
        expenses={expenses}
      />
    </main>
  );
};

export default App;
