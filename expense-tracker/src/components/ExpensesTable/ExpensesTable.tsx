import "./ExpensesTable.css"

export const ExpensesTable = () => {
  return (
    <div className="expenses-table">
      <select className="form-control" name="category-filter" id="category-filter">
        <option value={0}>Option 0</option>
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
        <option value={4}>Option 4</option>
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
          <tr>
            <td>d0001</td>
            <td>d0002</td>
            <td>d0003</td>
            <td>d0004</td>
          </tr>
          <tr>
            <td>d0001</td>
            <td>d0002</td>
            <td>d0003</td>
            <td>d0004</td>
          </tr>
          <tr>
            <td>d0001</td>
            <td>d0002</td>
            <td>d0003</td>
            <td>d0004</td>
          </tr>
          <tr>
            <td>d0001</td>
            <td>d0002</td>
            <td>d0003</td>
            <td>d0004</td>
          </tr>
          <tr>
            <td>d0001</td>
            <td>d0002</td>
            <td>d0003</td>
            <td>d0004</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
