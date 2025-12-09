import { PlusIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useEffect, type ChangeEvent, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editMessage, addMessage } from '../store/messages';
import type { AppDispatch, RootState } from '../store';

export default function MessageField() {
  const dispatch: AppDispatch = useDispatch();
  const message = useSelector((state: RootState) => state.message);
  const loading = useSelector((state: RootState) => state.loading);

  useEffect(() => {
    const chat = document.querySelector('#chat')!;
    chat.scrollTop = chat.scrollHeight;
  }, [loading]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(editMessage(event.target.value));
  };

  const handleSubmit = (event?: FormEvent) => {
    event?.preventDefault();
    dispatch(addMessage());
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
        <button
          className="button flex flex-none p-2 hover: cursor-pointer"
          onClick={handleSubmit}
          disabled={loading || !message}
        >
          <span className='text-primary ml-2'>
            {loading ? (
              <span className="loading loading-dots size-5"></span>
            ) : (
              <PaperAirplaneIcon className="size-5 text-primary" title="Send" />
            )}
          </span>
        </button>
      </div>
    </form>
  );
}