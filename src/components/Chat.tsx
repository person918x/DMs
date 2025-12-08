import ContactHeader from "./ContactHeader";
import Message from "./ChatBubble";
import MessageField from "./MessageField";
import message_groups from '../assets/messages.json';
import ally_mcbeal_screenplay from '../assets/ally-mcbeal.txt';
import felicity_screenplay from '../assets/felicity.txt';
import avatar from '../assets/918-avatar.jpg';

export default function Chat() {
  const contact = {
    name: 'Do Not Answer',
    avatar,
  }

  return (
    <div className="chat flex flex-col h-screen justify-between p-0">
      <ContactHeader name={contact.name} avatar={contact.avatar} />
      <div className="chat-body grow min-h-0">
        <div className="overflow-y-scroll h-full p-5">
          {message_groups.map(({ time, messages }, index) => (
            <div key={index} className="m-2">
              <time className="text-xs opacity-50">{time}</time>
              {messages.map((msg, i) => {
                if (msg === '<INSERT ALLY MCBEAL SCREENPLAY>') {
                  return <Message key={i} incoming={true} message='' attachment={ally_mcbeal_screenplay} />
                } else if (msg === '<INSERT FELICITY SCREENPLAY>') {
                  return <Message key={i} incoming={true} message='' attachment={felicity_screenplay} />
                } else {
                  return <Message key={i} incoming={true} message={msg} />
                }
              })}
            </div>
          ))}
        </div>
      </div>
      <MessageField />
    </div>
  );
}