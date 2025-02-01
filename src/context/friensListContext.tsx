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
  bill: number;
  paidByUser: number;
  whoIsPaying: string;
  paidByFriend: number;
  setFriends: Dispatch<SetStateAction<FriendsListType>>;
  setOpenFriendModal: Dispatch<SetStateAction<boolean>>;
  setSelectedFriend: Dispatch<SetStateAction<null | FriendType>>;
  setBill: Dispatch<SetStateAction<number>>;
  setPaidByUser: Dispatch<SetStateAction<number>>;
  setWhoIsPaying: Dispatch<SetStateAction<string>>;
  onAddFriendHandler: (friend: FriendType) => void;
  splitBillHandler: (value: number) => void;
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
  const [bill, setBill] = useState<number>(0);
  const [paidByUser, setPaidByUser] = useState<number>(0);
  const [whoIsPaying, setWhoIsPaying] = useState<string>("user");

  const paidByFriend = bill ? Number(bill) - Number(paidByUser) : 0;

  function onAddFriendHandler(friend: FriendType) {
    setFriends((friends) => [...friends, friend]);
  }

  function splitBillHandler(value: number) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
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
        bill,
        setBill,
        whoIsPaying,
        setWhoIsPaying,
        paidByUser,
        setPaidByUser,
        paidByFriend,
        splitBillHandler,
      }}
    >
      {children}
    </FriendsListContext.Provider>
  );
}
