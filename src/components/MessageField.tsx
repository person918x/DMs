import { PlusIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

export default function MessageField() {
  return (
    <div className="message-field navbar bg-base-100 shadow-sm flex-none">
      <PlusIcon className="size-5 flex-none mr-2" title="Add attachment" />
      <div className="flex grow">
        <input type="text" placeholder="Message" className="input bg-base-300 grow" onSubmit={() => null} />
      </div>
      <PaperAirplaneIcon className="size-5 flex-none ml-2 text-primary" title="Send" />
    </div >
  );
}