import { useContext } from "react";
import Friend from "./Friend";
import { FriendsListContext } from "../context/friensListContext";

export default function FriendsList() {
  const friendsList = useContext(FriendsListContext);
  if (!friendsList) return;
  const { friends } = friendsList;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
