import { Expense, AddExpenseForm } from "./components/AddExpenseForm"

const App = () => {
  const categories = ["Fun", "Food", "Transport", "Housing"]

  return (
    <AddExpenseForm onSubmit={expense => console.log(expense)} categories={categories}/>
  )
}

export default App