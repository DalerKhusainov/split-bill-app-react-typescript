import Button from "./Button";

export default function FormAndFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="">👯‍♂️ Friend name </label>
      <input type="text" name="" id="" />

      <label htmlFor="">🖼 Image URL</label>
      <input type="text" name="" id="" />

      <Button>Add</Button>
    </form>
  );
}
