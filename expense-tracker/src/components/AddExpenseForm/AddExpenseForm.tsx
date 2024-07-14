import { useForm } from "react-hook-form";
import "./AddExpenseForm.css"

export const AddExpenseForm = () => {
  const { register } = useForm();

  return (
    <form className="add-expense-form"action="">
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description-field"
          name="description"
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount-field"
          name="amount"
          type="number"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category-select" name="category" className="form-control">
          <option disabled selected value={undefined}></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};
