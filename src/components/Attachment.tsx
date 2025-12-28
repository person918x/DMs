import { DocumentTextIcon } from "@heroicons/react/24/solid";

type Props = {
  src: string;
};

export default function Attachment({ src }: Props) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="button hover: cursor-pointer"
    >
      <DocumentTextIcon className="size-10 flex-none" title="View attachment" />
    </a>
  );
}
