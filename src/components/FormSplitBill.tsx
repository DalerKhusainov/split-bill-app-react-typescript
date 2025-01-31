import Button from "./Button";

export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h3>Split a bill with X</h3>

      <label htmlFor="">💰 Bill value</label>
      <input type="text" name="" id="" />

      <label htmlFor="">💰 Your expense</label>
      <input type="text" name="" id="" />

      <label htmlFor="">💰 X's expense</label>
      <input type="text" name="" id="" disabled />

      <label htmlFor="">Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
