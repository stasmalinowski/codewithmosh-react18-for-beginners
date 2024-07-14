import { AddExpenseForm } from "./components/AddExpenseForm"

const App = () => {
  const categories = ["Fun", "Food", "Transport", "Housing"]

  return (
    <AddExpenseForm categories={categories}/>
  )
}

export default App