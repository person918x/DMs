import Message, { type MessageI } from "./ChatBubble";

export default function Chat() {
  const messages: MessageI[] = [
    {
      incoming: true,
      name: "You",
      avatar: "https://scontent-sea5-1.xx.fbcdn.net/v/t39.30808-1/462140760_2807746069407758_5993805066772312114_n.jpg?stp=c161.0.966.966a_dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f907e8&_nc_ohc=XeeGZM0okfMQ7kNvwGQiCqw&_nc_oc=Adn8jhPOEkaWMnPk7QqXpHIC8HzeUVeLvcjvmueUlK481Na5H02XAwZri8tqH8ERUIY&_nc_zt=24&_nc_ht=scontent-sea5-1.xx&_nc_gid=zN5LmOfIMkggztpz9eKIDg&oh=00_AfkhGVCyNreyrltpDzQ3MkF4StqK5tfQ7rnG8zxgBF-WeA&oe=69372631",
      time: "12:45",
      message: "K.",
      status: "Read",
    },
    {
      incoming: false,
      name: "Me",
      avatar: "https://cdn.ebaumsworld.com/2024/10/02/010718/87611665/breeding-castle-dump2.jpg",
      time: "13:00",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      incoming: false,
      name: "Me",
      avatar: "https://cdn.ebaumsworld.com/2024/10/02/010718/87611665/breeding-castle-dump2.jpg",
      time: "13:01",
      message: "How does this look so far? We can get cute with interactivity and easter eggs later.",
      status: "Delivered",
    },
  ];

  return (
    <>
      {messages.map((msg, index) => (
        <Message key={index} {...msg} />
      ))}
    </>
  );
}