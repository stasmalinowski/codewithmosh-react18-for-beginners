import { Expense, AddExpenseForm } from "./components/AddExpenseForm"
import { ExpensesTable } from "./components/ExpensesTable"

const App = () => {
  const categories = ["Fun", "Food", "Transport", "Housing"]

  return (
  <main>
    <AddExpenseForm onSubmit={expense => console.log(expense)} categories={categories}/>
    <ExpensesTable />
  </main>
  )
}

export default App