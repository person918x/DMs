import { useEffect, useState } from "react";
import { DocumentTextIcon } from "@heroicons/react/24/solid";

type Props = {
  src: string;
}

function Preview({ src }: Props) {
  const [content, setContent] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(src)
      .then((resp) => resp.text())
      .then((txt) => setContent(txt));
  }, [src]);

  return (
    <pre>
      {content}
    </pre>
  )
}

export default function Attachment({ src }: Props) {
  // @ts-ignore
  const preview = () => document.getElementById(src)?.showModal();

  return (
    <>
      <button className="button hover: cursor-pointer" onClick={preview}>
        <DocumentTextIcon className="size-10 flex-none" title="View attachment" />
      </button>
      <dialog id={src} className="modal">
        <div className="modal-box h-full w-full max-w-3xl bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <Preview src={src} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}