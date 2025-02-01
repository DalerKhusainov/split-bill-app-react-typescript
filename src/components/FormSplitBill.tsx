import { FormEvent, useContext } from "react";
import { FriendsListContext } from "../context/friensListContext";
import Button from "./Button";

export default function FormSplitBill() {
  const friendsListContext = useContext(FriendsListContext);
  if (!friendsListContext) return;
  const {
    selectedFriend,
    setSelectedFriend,
    bill,
    setBill,
    whoIsPaying,
    setWhoIsPaying,
    paidByUser,
    setPaidByUser,
    paidByFriend,
    splitBillHandler,
  } = friendsListContext;

  function onSubmitHandler(e: FormEvent) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    splitBillHandler(whoIsPaying === "user" ? paidByFriend : -paidByUser);

    setSelectedFriend(null);
  }

  return (
    <form className="form-split-bill" onSubmit={onSubmitHandler}>
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

      <Button>Split bill</Button>
    </form>
  );
}
