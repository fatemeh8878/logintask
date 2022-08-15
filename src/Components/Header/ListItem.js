import Home from "../../assets/image/Home.svg";
import Folder from "../../assets/image/Folder.svg";
import book from "../../assets/image/book.svg";
import receipt from "../../assets/image/receipt.svg";

export const ListItem = [
  { id: 1, title: "صفحه اصلی", icon: Home, to: "/" },
  { id: 2, title: "ایجاد پرونده", icon: Folder, to: "/addFolder" },
  { id: 3, title: "لیست پرونده ها", icon: book, to: "/book" },
  { id: 4, title: "گزارشگیری", icon: receipt, to: "/recepit" },
];