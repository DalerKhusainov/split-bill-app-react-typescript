import { useContext, useState } from "react";
import { FriendsListContext } from "../context/friensListContext";
import Button from "./Button";

export default function FormSplitBill() {
  const [bill, setBill] = useState<number>(0);
  const [paidByUser, setPaidByUser] = useState<number>(0);
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const paidByFriend = bill ? Number(bill) - Number(paidByUser) : "";

  const friendsListContext = useContext(FriendsListContext);
  if (!friendsListContext) return;
  const { selectedFriend } = friendsListContext;

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend?.name}</h2>

      <label htmlFor="">💰 Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="">💰 Your expense</label>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label htmlFor="">💰 {selectedFriend?.name}'s expense</label>
      <input
        type="text"
        name=""
        id=""
        disabled={!paidByFriend}
        value={paidByFriend}
      />

      <label htmlFor="">Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>

      <Button clickHandler={() => console.log("Clicked")}>Split bill</Button>
    </form>
  );
}
