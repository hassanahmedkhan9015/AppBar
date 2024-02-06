import Pi from "../assets/pi.svg";
import D from "../assets/d.svg";
import Handshake from "../assets/handsshake.svg";
import Investor from "../assets/Investors_Icon.svg";
import NoteBook from "../assets/notebook.svg";
import Save from "../assets/save.svg";
import Search from "../assets/search.svg";
import BoxImg from "../assets/Box.svg";
import Company from "../assets/company.svg";
import Vector from "../assets/Vector.svg";
import Msg from "../assets/msg.svg";
import Bot from "../assets/bot.svg";
import Profile from "../assets/Profile.svg";

export const items = [
  { image: Pi, label: "1.2Mio€" },
  { image: D, label: "12" },
  { image: Handshake, label: 3 },
  { image: Investor, label: 12 },
  { image: NoteBook, label: 4 },
  { image: Save, label: 12 },
];

 export const dropdownData = [
    { heading: "Search", icon:Search, decorator:true,options: ["Item 1", "Item 2", "Item 3"] },
    { heading: "Produkte",icon:BoxImg, decorator:true ,options: ["Item 1", "Item 2", "Item 3"] },
    { heading: "Company", icon:Company, decorator:false, options:[] },
  ];
// export const listItemsTwo = [
//   { text: "hrNetzwerk", icon: Vector, decorator: false },
//   { text: "Nachrichten", icon: Msg, decorator: false },
//   { text: "Mitteilungen", icon: Bot, decorator: false },
//   { text: "Sie", decorator: true },
// ];


export const badgesData = [
  { badgeContent: 2,icon: Vector, text: "hrNetzwerk" },
  { badgeContent: 10, icon: Msg,text: "Nachrichten" },
  { badgeContent: 10, icon: Bot,text: "Mitteilungen" },
];

export const dropdownDataTwo = {
  imageSrc: Profile,
  altText: "Profile",
  buttonText: "Sie",
  email:"sie@gmail.com",
  menuItems: ["Help", "Setting","Privacy", "Log out"],
};