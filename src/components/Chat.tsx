import ContactHeader from "./ContactHeader";
import Message, { type MessageI } from "./ChatBubble";
import MessageField from "./MessageField";

export default function Chat() {
  const messages: MessageI[] = [
    {
      incoming: true,
      name: "You",
      avatar: "https://scontent-sea5-1.xx.fbcdn.net/v/t39.30808-1/462140760_2807746069407758_5993805066772312114_n.jpg?stp=c161.0.966.966a_dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f907e8&_nc_ohc=XeeGZM0okfMQ7kNvwGQiCqw&_nc_oc=Adn8jhPOEkaWMnPk7QqXpHIC8HzeUVeLvcjvmueUlK481Na5H02XAwZri8tqH8ERUIY&_nc_zt=24&_nc_ht=scontent-sea5-1.xx&_nc_gid=zN5LmOfIMkggztpz9eKIDg&oh=00_AfkhGVCyNreyrltpDzQ3MkF4StqK5tfQ7rnG8zxgBF-WeA&oe=69372631",
      time: "12:45",
      message: "K.",
      status: "Read",
    },
    {
      incoming: false,
      name: "Me",
      avatar: "https://cdn.ebaumsworld.com/2024/10/02/010718/87611665/breeding-castle-dump2.jpg",
      time: "13:00",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit viverra dolor. Curabitur vestibulum sapien ac sollicitudin bibendum. In lacinia sagittis eros, vitae volutpat risus rhoncus sit amet. Nunc velit lacus, porttitor eget risus tempus, vehicula semper risus. Aliquam in pharetra neque. Suspendisse tempus aliquam tincidunt. Pellentesque imperdiet finibus turpis. Vivamus ut libero quis ipsum volutpat egestas. Morbi dictum tempor dui, consectetur elementum magna lacinia eu. Quisque efficitur sem ac neque suscipit consectetur. Mauris maximus congue nibh, bibendum ultricies diam porta sed. In hac habitasse platea dictumst.Duis tellus eros, tristique facilisis enim molestie, tincidunt ultrices lorem.Etiam dictum nunc in felis pulvinar tincidunt.Fusce nunc massa, venenatis sed ante eu, pulvinar molestie urna.Aenean elit leo, rhoncus ac libero ut, convallis consectetur mi.Cras non egestas elit.Mauris placerat ultricies nisl eleifend ornare.Praesent sed risus posuere tortor ornare lacinia ac gravida tellus.Mauris tincidunt tempor odio.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Morbi quam risus, condimentum fermentum varius gravida, interdum at est.Maecenas leo augue, porta sed condimentum non, laoreet et metus.Nullam blandit turpis libero, eget ultricies ipsum imperdiet vel.In ac nulla et velit pretium eleifend non quis diam.Curabitur dolor magna, pulvinar vitae interdum commodo, egestas at massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Aenean nibh justo, malesuada a felis ut, laoreet aliquam magna.Quisque pulvinar rutrum accumsan.Nunc tempor sem nec arcu vestibulum, ac tempor quam finibus.Donec sodales felis id nunc volutpat efficitur.Morbi sit amet tellus pretium, consequat elit at, suscipit erat.Vestibulum non elit porttitor, auctor elit vel, pretium dolor. In hac habitasse platea dictumst.Vestibulum in tincidunt nibh, non pharetra arcu.Vivamus bibendum eros sit amet est varius, condimentum tincidunt enim cursus.Sed aliquet magna enim, in vestibulum odio convallis vel.Duis rhoncus ut lectus sit amet mollis.Vestibulum egestas accumsan neque ac hendrerit.Nunc dapibus vel orci sit amet ultrices.Aliquam euismod nisi vitae dui hendrerit, eu rutrum mauris malesuada.Sed elit sapien, gravida sed euismod quis, consectetur eget quam.Donec vitae justo feugiat, aliquet justo vel, laoreet turpis.Integer rhoncus, justo quis tempor viverra, lectus nisi molestie sapien, et vehicula ipsum mi vel eros.Mauris nec sagittis ex.Praesent nunc nulla, cursus ut dapibus vitae, pharetra id libero.",
    },
    {
      incoming: false,
      name: "Me",
      avatar: "https://cdn.ebaumsworld.com/2024/10/02/010718/87611665/breeding-castle-dump2.jpg",
      time: "13:01",
      message: "How does this look so far? We can get cute with interactivity and easter eggs later.",
      status: "Delivered",
    },
  ];

  return (
    <div className="chat flex flex-col h-screen justify-between p-0">
      <ContactHeader name={messages[0].name} avatar={messages[0].avatar} />
      <div className="chat-body grow min-h-0 m-5">
        <div className="overflow-y-scroll h-full">
          {messages.map((msg, index) => (
            <Message key={index} {...msg} />
          ))}
        </div>
      </div>
      <MessageField />
    </div>
  );
}