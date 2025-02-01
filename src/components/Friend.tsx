import { useContext } from "react";
import { FriendType } from "../types/friendsListType";
import Button from "./Button";
import { FriendsListContext } from "../context/friensListContext";
interface FriendProps {
  friend: FriendType;
}

export default function Friend({ friend }: FriendProps) {
  const { id, name, image, balance } = friend;

  const friendsListContext = useContext(FriendsListContext);
  if (!friendsListContext) return;
  const { setSelectedFriend, selectedFriend, setOpenFriendModal } =
    friendsListContext;

  function onSelectionHandler() {
    setSelectedFriend((selected) => (selected?.id === id ? null : friend));
    setOpenFriendModal(false);
  }

  const isSelected = selectedFriend?.id === id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance < 0 && (
        <p className="red">
          You owe {name} {Math.abs(balance)}$
        </p>
      )}

      {balance > 0 && (
        <p className="green">
          {name} owes you {Math.abs(balance)}$
        </p>
      )}

      {balance === 0 && <p>You and {name} are even.</p>}

      <Button clickHandler={onSelectionHandler}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
