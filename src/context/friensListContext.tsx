import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { FriendType, FriendsListType } from "../types/friendsListType";

const initialFriends: FriendsListType = [
  {
    id: "118836",
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: "933372",
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: "499476",
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

interface FriendsListContextType {
  friends: FriendsListType;
  openFriendModal: boolean;
  selectedFriend: null | FriendType;
  setFriends: Dispatch<SetStateAction<FriendsListType>>;
  setOpenFriendModal: Dispatch<SetStateAction<boolean>>;
  setSelectedFriend: Dispatch<SetStateAction<null | FriendType>>;
  onAddFriendHandler: (friend: FriendType) => void;
}

export const FriendsListContext = createContext<
  FriendsListContextType | undefined
>(undefined);

interface FriendsListProviderType {
  children: ReactNode;
}

export default function FriendsListProvider({
  children,
}: FriendsListProviderType) {
  const [friends, setFriends] = useState<FriendsListType>(initialFriends);
  const [openFriendModal, setOpenFriendModal] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<null | FriendType>(null);

  function onAddFriendHandler(friend: FriendType) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <FriendsListContext.Provider
      value={{
        friends,
        setFriends,
        onAddFriendHandler,
        openFriendModal,
        setOpenFriendModal,
        selectedFriend,
        setSelectedFriend,
      }}
    >
      {children}
    </FriendsListContext.Provider>
  );
}
