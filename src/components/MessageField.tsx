import { PlusIcon, PaperAirplaneIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { useEffect, type ChangeEvent, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editMessage, addMessage, clearError } from '../store/messages';
import type { AppDispatch, RootState } from '../store';

export default function MessageField() {
  const dispatch: AppDispatch = useDispatch();
  const message = useSelector((state: RootState) => state.message);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);

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

  const handleClear = () => {
    dispatch(clearError());
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="message-field navbar bg-base-100 shadow-sm flex-none">
          <PlusIcon className="size-5 flex-none mr-2" />
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
      <dialog className="modal" open={!!error}>
        <div className="modal-box card bg-base-100 max-w-fit text-center">
          <div className='card-title flex'>
            <ExclamationCircleIcon className='size-5' />
            Message could not be delivered
          </div>
          <div className='card-body'>
            {error ? 'This user is no longer available.' : undefined}
          </div>
          <div className='card-actions flex justify-end'>
            <form method="dialog" onSubmit={handleClear}>
              <button className='btn border-gray-500'>Okay</button>
            </form>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop" onSubmit={handleClear}>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}