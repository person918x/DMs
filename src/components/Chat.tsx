import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../store';
import { setMessages } from '../store/messages';
import ContactHeader from './ContactHeader';
import Message from './ChatBubble';
import MessageField from './MessageField';
import message_groups from '../assets/messages.json';
import ally_mcbeal_screenplay from '../assets/ally-mcbeal.txt';
import felicity_screenplay from '../assets/felicity.txt';
import avatar from '../assets/918-avatar.jpg';

export default function Chat() {
  const contact = {
    name: 'Do Not Answer',
    avatar,
  }
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.messages)

  useEffect(() => {
    if (message_groups && ally_mcbeal_screenplay && felicity_screenplay) {
      const msgs = message_groups.map(({ time, messages }, i) => ({
        time,
        messages: messages.map((message, j) => {
          let attachment;
          if (message === '<INSERT ALLY MCBEAL SCREENPLAY>')
            attachment = ally_mcbeal_screenplay;
          else if (message === '<INSERT FELICITY SCREENPLAY>')
            attachment = felicity_screenplay;

          return ({
            incoming: true,
            message: attachment ? '' : message,
            attachment,
            status: (i === message_groups.length - 1) && (j === messages.length - 1)
              ? 'Delivered'
              : undefined,
          });
        }),
      }));
      dispatch(setMessages(msgs));
    }
  }, [dispatch, message_groups, ally_mcbeal_screenplay, felicity_screenplay]);

  return (
    <div className="chat flex flex-col h-screen justify-between p-0">
      <ContactHeader name={contact.name} avatar={contact.avatar} />
      <div className="chat-body grow min-h-0">
        <div id="chat" className="overflow-y-scroll h-full p-5">
          {messages.map(({ time, messages }, index) => (
            <div key={index} className="m-2">
              <time className="text-xs opacity-50">{time}</time>
              {messages.map((msg, i) => <Message key={i} {...msg} />)}
            </div>
          ))}
        </div>
      </div>
      <MessageField />
    </div>
  );
}