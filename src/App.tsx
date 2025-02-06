import { useContext } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import FormAndFriend from "./components/FormAndFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { FriendsListContext } from "./context/friensListContext";

function App() {
  const friendsListContext = useContext(FriendsListContext);
  if (!friendsListContext) return;
  const { openFriendModal, setOpenFriendModal, selectedFriend } =
    friendsListContext;

  function onShowAddFriendHandler() {
    setOpenFriendModal((prev) => !prev);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {openFriendModal && (
          <FormAndFriend setOpenFriendModal={setOpenFriendModal} />
        )}
        <Button clickHandler={onShowAddFriendHandler}>
          {openFriendModal ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill key={selectedFriend.id} />}
    </div>
  );
}

export default App;
