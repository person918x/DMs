import { PlusIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import type { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editMessage, addMessage } from '../store/messages';
import type { RootState } from '../store';

export default function MessageField() {
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.message);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(editMessage(event.target.value));
  };

  const handleSubmit = (event?: FormEvent) => {
    event?.preventDefault();
    dispatch(addMessage());
    const chat = document.querySelector('#chat')!;
    chat.scrollTop = chat.scrollHeight;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="message-field navbar bg-base-100 shadow-sm flex-none">
        <PlusIcon className="size-5 flex-none mr-2" title="Add attachment" />
        <div className="flex grow">
          <input
            type="text"
            placeholder="Message"
            className="input bg-base-300 grow"
            onChange={handleChange}
            value={message}
          />
        </div>
        <button className="button hover: cursor-pointer" onClick={handleSubmit}>
          <PaperAirplaneIcon className="size-5 flex-none ml-2 text-primary" title="Send" />
        </button>
      </div>
    </form>
  );
}