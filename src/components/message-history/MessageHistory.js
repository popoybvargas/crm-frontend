import PropTypes from 'prop-types';

import './message-history.css';

const MessageHistory = ({ conversation }) =>
{
  const renderConversation = () =>
  {
    if (!conversation || !conversation.length) return null;

    return conversation.map((msg, index) => (
      <div key={ index } className="message-history mt-3">
        <div className="send font-weight-bold text-secondary">
          <div className="sender">{ msg.messageBy }</div>
          <div className="date">{ msg.date }</div>
        </div>
        <div className="message">{ msg.message }</div>
      </div>
    ));
  };

  return renderConversation();
};

MessageHistory.propTypes = { conversation: PropTypes.array };

export default MessageHistory;