import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../redux/features/conversations/conversationsApi";
import ChatItem from "./ChatItem";
import moment from "moment/moment";
import getPartnerInfo from "../../utils/getPartnerInfo";
import gravatarUrl from "gravatar-url";
import { Link } from "react-router-dom";

export default function ChatItems() {
  const { user } = useSelector((state) => state.auth);
  const { email } = user || {};
  const {
    data: conversation,
    isLoading,
    isError,
    error,
  } = useGetConversationsQuery(email);

  // decide what to render

  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading..........</li>;
  } else if (!isLoading && isError) {
    content = <li className="m-2 text-center">Error happen ${error?.data}</li>;
  } else if (!isLoading && !isError && conversation?.length === 0) {
    content = <li className="m-2 text-center">No conversation Found!</li>;
  } else if (!isLoading && !isError && conversation?.length > 0) {
    content = conversation.map((conversation) => {
      const { id, message, timestamp } = conversation;
      const { name, email: partnerEmail } = getPartnerInfo(
        conversation.users,
        email
      );
      return (
        <li key={id}>
          <Link to={`/inbox/${id}`}>
         
            <ChatItem
              avatar={gravatarUrl(partnerEmail, {
                size: 80,
              })}
              name={name}
              lastMessage={message}
              lastTime={moment(timestamp).fromNow()}
            />
          </Link>
        </li>
      );
    });
  }
  return <ul>{content}</ul>;
}
