import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./AddExpenseForm.css";

interface Props {
  categories: string[];
}

const schema = z.object({
  description: z.string().min(3),
  amount: z
    .number({ invalid_type_error: "This field is required!" })
    .min(1, { message: "The amount must be at least 1!" }),
  category: z.number().min(1, { message: "You need to pick a category!" }),
});

type FormData = z.infer<typeof schema>;

export const AddExpenseForm = ({ categories }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="add-expense-form"
      action=""
    >
      <div className="form-group">
        <label htmlFor="description" className="form-label">
          Description*
        </label>
        <input
          {...register("description")}
          id="description-field"
          name="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="amount" className="form-label">
          Amount*
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount-field"
          name="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="category" className="form-label">
          Category*
        </label>
        <select
          {...register("category", { valueAsNumber: true })}
          defaultValue={0}
          id="category-select"
          name="category"
          className="form-control"
        >
          <option disabled={true} value={0}></option>
          {categories.map((c, i) => <option value={i+1}>{c}</option>)}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
