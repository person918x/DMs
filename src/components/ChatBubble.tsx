import Attachment from "./Attachment";

export interface MessageI {
  message: string;
  incoming?: boolean;
  name?: string;
  status?: string;
  attachment?: string;
}

export default function Message({
  message,
  incoming = false,
  name = "",
  status = "",
  attachment,
}: MessageI) {
  const incomingStyle = incoming
    ? "chat-bubble-secondary"
    : "chat-bubble-primary";
  return (
    <div className={`chat ${incoming ? "chat-start" : "chat-end"}`}>
      {name ? <div className="chat-header">{name}</div> : undefined}
      <div className={`chat-bubble ${incomingStyle}`}>
        {message}
        {attachment ? <Attachment src={attachment} /> : undefined}
      </div>
      <div className={`chat-footer opacity-50`}>{status}</div>
    </div>
  );
}
