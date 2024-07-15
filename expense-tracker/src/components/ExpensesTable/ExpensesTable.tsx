import { ChangeEvent } from "react";
import { Expense } from "../AddExpenseForm";
import "./ExpensesTable.css";

interface Props {
  expenses: Expense[];
  categories: string[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleDelete: (expense: Expense) => void
  selectedCategory?: string;
}

export const ExpensesTable = ({
  categories,
  selectedCategory = "All",
  expenses,
  handleChange,
  handleDelete
}: Props) => {
  let selectedCategoryValue = "All";
  let filteredExpenses: Expense[] = [...expenses];
  if (categories.includes(selectedCategory)) {
    filteredExpenses = expenses.filter((e) => e.category === selectedCategory);
    selectedCategoryValue = selectedCategory;
  }

  return (
    <div className="expenses-table">
      <select
        value={selectedCategory}
        onChange={handleChange}
        className="form-control"
        name="category-filter"
        id="category-filter"
      >
        <option key={"All"} value={"All"}>
          All categories
        </option>
        {categories.map((cat, i) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <table className="table table-bordered">
        <thead>
          <tr key="heading">
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((e) => (
            <tr>
              <td key={e.description}>{e.description}</td>
              <td key={e.amount}>{e.amount}</td>
              <td key={e.category}>{e.category}</td>
              <td>
                <button onClick={event => handleDelete(e)} className="btn btn-danger" type="button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
