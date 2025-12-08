import { PlusIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { useState, type ChangeEvent, type FormEvent } from "react";

export default function MessageField() {
  const [message, setMessage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event?: FormEvent) => {
    event?.preventDefault();
    console.log(message);
    setMessage('');
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
            onSubmit={handleSubmit}
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