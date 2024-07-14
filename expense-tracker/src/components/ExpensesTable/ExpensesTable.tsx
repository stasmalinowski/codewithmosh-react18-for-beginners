import { Expense } from "../AddExpenseForm";
import "./ExpensesTable.css";

interface Props {
  expenses: Expense[];
  categories: string[];
  selectedIndex?: number;
}

export const ExpensesTable = ({
  categories,
  selectedIndex = -1,
  expenses,
}: Props) => {

  let filteredExpenses: Expense[];
  if (selectedIndex < 0 || categories.length <= selectedIndex)
    filteredExpenses = [...expenses];
  else
    filteredExpenses = expenses.filter(
      (e) => e.category === categories[selectedIndex]
    );

  return (
    <div className="expenses-table">
      <select
        className="form-control"
        name="category-filter"
        id="category-filter"
      >
        <option value={0}>All categories</option>
        {categories.map((cat, i) => (
          <option value={i}>{cat}</option>
        ))}
      </select>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((e) => (
            <tr>
              <td>{e.description}</td>
              <td>{e.amount}</td>
              <td>{e.category}</td>
              <td>
                <button className="btn btn-danger" type="button">
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
