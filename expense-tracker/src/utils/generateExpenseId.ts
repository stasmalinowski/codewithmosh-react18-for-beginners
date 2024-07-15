import { Expense } from "../components/AddExpenseForm"

export const generateExpenseId = (): number => {
  return Math.random() * 1e30
}