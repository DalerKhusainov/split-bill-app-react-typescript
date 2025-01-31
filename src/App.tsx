import "./App.css";
import FriendsList from "./components/FriendsList";
import FormAndFriend from "./components/FormAndFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAndFriend />
        <Button>Add friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
