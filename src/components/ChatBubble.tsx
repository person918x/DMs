export interface MessageI {
  message: string;
  incoming?: boolean;
  name?: string;
  status?: string;
};

export default function Message({
  message,
  incoming = false,
  name = '',
  status = '',
}: MessageI) {
  return (
    <div className={`chat ${incoming ? 'chat-start' : 'chat-end'}`}>
      {name
        ?
        (
          <div className="chat-header">
            {name}
          </div>
        )
        : undefined
      }
      <div className={`chat-bubble ${incoming ? 'chat-bubble-secondary' : 'chat-bubble-primary'}`}>{message}</div>
      <div className="chat-footer opacity-50">{status}</div>
    </div >
  );
} 