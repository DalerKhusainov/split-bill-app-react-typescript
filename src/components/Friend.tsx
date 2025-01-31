import { FriendType } from "../types/friendsListType";
import Button from "./Button";
interface FriendProps {
  friend: FriendType;
}

export default function Friend({ friend }: FriendProps) {
  const { id, name, image, balance } = friend;

  console.log(id);

  return (
    <li>
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

      <Button>Select</Button>
    </li>
  );
}
