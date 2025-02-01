import {
  useState,
  FormEvent,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import Button from "./Button";
import { FriendType } from "../types/friendsListType";
import { FriendsListContext } from "../context/friensListContext";

interface FormAndFriendProps {
  setOpenFriendModal: Dispatch<SetStateAction<boolean>>;
}

export default function FormAndFriend({
  setOpenFriendModal,
}: FormAndFriendProps) {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("https://i.pravatar.cc/48");

  const friendsListContext = useContext(FriendsListContext);
  if (!friendsListContext) return;
  const { onAddFriendHandler } = friendsListContext;

  function onSubmitHandler(e: FormEvent) {
    e.preventDefault();

    if (!name.trim() || !image.trim()) return;

    const id = crypto.randomUUID();

    const newFriend: FriendType = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriendHandler(newFriend);
    setOpenFriendModal((prev) => !prev);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={onSubmitHandler}>
      <label htmlFor="">👯‍♂️ Friend name </label>
      <input
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="">🖼 Image URL</label>
      <input
        type="text"
        name=""
        id=""
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
