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
  const preview = () => document.getElementById(src)?.showModal();

  return (
    <>
      <DocumentTextIcon
        className="size-5 flex-none"
        title="View attachment"
        onClick={preview}
      />
      <dialog id={src} className="modal">
        <div className="modal-box h-full w-full bg-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <Preview src={src} />
        </div>
      </dialog >
    </>
  )
}