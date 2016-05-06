var React = require('react');
var Header = require('./Header');
var ChatHistory = require('./ChatHistory');
var SendMessageContainer = require('../containers/SendMessageContainer');
var ViewPinnedMessages = require('./ViewPinnedMessages');

function Conversation(props) {
    return (
        <div>
            <Header />
            <ViewPinnedMessages pinnedLog={props.pinnedLog}
                                onClickPin={props.onClickPin}
                                onUnclickPin={props.onUnclickPin} />
            <ChatHistory chatLog={props.chatLog}
                         onClickPin={props.onClickPin}
                         onUnclickPin={props.onUnclickPin}
                         senderName="Matthew Chiang" />
            <SendMessageContainer onTextChange={props.onTextChange}
                                  onPressEnterKey={props.onPressEnterKey}
                                  onClickSend={props.onClickSend} />
        </div>
    )
}

/* props
 chatLog={this.state.chatLog}
 pinnedLog={this.state.pinnedLog}
 onTextChange={this.handleChange}
 onPressEnterKey={this.handleKeyPress}
 onClickSend={this.handleClickSend}
 onClickPin={this.handleClickPin}
 senderName="Matthew Chiang"
 */

module.exports = Conversation;
