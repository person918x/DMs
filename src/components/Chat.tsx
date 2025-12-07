import ContactHeader from "./ContactHeader";
import Message, { type MessageI } from "./ChatBubble";
import MessageField from "./MessageField";
import message_groups from '../assets/messages.json';

export default function Chat() {
  const contact = {
    name: 'Do Not Answer',
    avatar: "https://scontent-sea5-1.xx.fbcdn.net/v/t39.30808-1/462140760_2807746069407758_5993805066772312114_n.jpg?stp=c161.0.966.966a_dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f907e8&_nc_ohc=XeeGZM0okfMQ7kNvwGQiCqw&_nc_oc=Adn8jhPOEkaWMnPk7QqXpHIC8HzeUVeLvcjvmueUlK481Na5H02XAwZri8tqH8ERUIY&_nc_zt=24&_nc_ht=scontent-sea5-1.xx&_nc_gid=zN5LmOfIMkggztpz9eKIDg&oh=00_AfkhGVCyNreyrltpDzQ3MkF4StqK5tfQ7rnG8zxgBF-WeA&oe=69372631",
  }

  return (
    <div className="chat flex flex-col h-screen justify-between p-0">
      <ContactHeader name={contact.name} avatar={contact.avatar} />
      <div className="chat-body grow min-h-0 m-5">
        <div className="overflow-y-scroll h-full">
          {message_groups.map(({ time, messages }, index) => (
            <div key={index}>
              <time className="text-xs opacity-50">{time}</time>
              {messages.map((msg, i) => (
                <Message key={i} incoming={true} message={msg} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <MessageField />
    </div>
  );
}