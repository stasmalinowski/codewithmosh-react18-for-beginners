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

  const [expenses, setExpenses] = useState<Expense[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const getExpensesCopy = () => {
    return[
      ...expenses.map((e: Expense) => {
        return { ...e };
      }),
    ];
  }

  const addExpense = (expense: Expense) =>{
    console.log(expense)
    const expensesCopy = getExpensesCopy()
    expensesCopy.push(expense)
    setExpenses(expensesCopy)
  }

  const handleCategoryFilterChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const deleteExpense = (expense: Expense) => {
    setExpenses(getExpensesCopy().filter((e: Expense) => e.id != expense.id));
  };

  return (
    <main>
      <AddExpenseForm
        onSubmit={addExpense}
        categories={categories}
      />
      <ExpensesTable
        selectedCategory={selectedCategory}
        handleChange={handleCategoryFilterChange}
        handleDelete={deleteExpense}
        categories={categories}
        expenses={expenses}
      />
    </main>
  );
};

export default App;
