type Props = {
  name?: string;
  avatar?: string;
}

export default function ContactHeader({ name = 'Unknown', avatar }: Props) {
  return (
    <div className="message-field navbar bg-base-300 shadow-sm flex">
      <div className="avatar flex-none">
        <div className="w-10 rounded-full">
          <img
            alt={`${name} avatar`}
            src={avatar}
          />
        </div>
      </div>
      <p className="text-lg grow pl-5">{name}</p>
    </div>
  );
}