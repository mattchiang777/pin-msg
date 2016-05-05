var React = require('react');
var Header = require('./Header');
// var ChatHistory = require('./ChatHistory');
var SendMessageContainer = require('../containers/SendMessageContainer');
var ViewPinnedMessages = require('./ViewPinnedMessages');

function Conversation(props) {
    return (
        <div>
            <Header />
            <ViewPinnedMessages />

            <SendMessageContainer chatLog={props.chatLog}
                                  onTextChange={props.onTextChange}
                                  onPressEnterKey={props.onPressEnterKey}
                                  onClickSend={props.onClickSend}
                                  onClickPin={props.onClickPin}
                                  senderName="Matthew Chiang" />
        </div>
    )
}

/* props
 chatLog={this.state.chatLog}
 onTextChange={this.handleChange}
 onPressEnterKey={this.handleKeyPress}
 onClickSend={this.handleClickSend}
 onClickPin={this.handleClickPin}
 senderName="Matthew Chiang"
 */

module.exports = Conversation;
