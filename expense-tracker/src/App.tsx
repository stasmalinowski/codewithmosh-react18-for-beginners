import { Expense, AddExpenseForm } from "./components/AddExpenseForm";
import { ExpensesTable } from "./components/ExpensesTable";

const App = () => {
  const categories = ["Fun", "Food", "Transport", "Housing"];
  const expenses = [
    { description: "Cinema", amount: 15, category: categories[0] },
    { description: "Burgers", amount: 30, category: categories[1] },
    { description: "Bus Tickets", amount: 10, category: categories[2] },
    { description: "Train Tickets", amount: 20, category: categories[2] },
    { description: "Rent", amount: 550, category: categories[3] },
    { description: "Drinks", amount: 30, category: categories[1] }
  ];

  return (
    <main>
      <AddExpenseForm
        onSubmit={(expense) => console.log(expense)}
        categories={categories}
      />
      <ExpensesTable categories={categories} expenses={expenses} />
    </main>
  );
};

export default App;
