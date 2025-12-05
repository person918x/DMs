export interface MessageI {
  incoming?: boolean;
  avatar?: string;
  name?: string;
  time: Date | string;
  message: string;
  status?: string;
};

export default function Message({
  incoming = false,
  avatar,
  name = 'Unknown',
  time,
  message,
  status = '',
}: MessageI) {
  return (
    <div className={`chat ${incoming ? 'chat-start' : 'chat-end'}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt={`${name} avatar`}
            src={avatar}
          />
        </div>
      </div>
      <div className="chat-header">
        {name}
        <time className="text-xs opacity-50">{time.toString()}</time>
      </div>
      <div className={`chat-bubble ${incoming ? 'chat-bubble-primary' : 'chat-bubble-secondary'}`}>{message}</div>
      <div className="chat-footer opacity-50">{status}</div>
    </div >
  );
} 