var React = require('react');
var PropTypes = React.PropTypes;
var Header = require('./Header');
var ChatHistory = require('./ChatHistory');
var SendMessageContainer = require('../containers/SendMessageContainer');
var ViewPinnedMessages = require('./ViewPinnedMessages');

function Conversation(props) {
    return (
        <div style={styles.conversation}>
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

Conversation.propTypes = {
    chatLog: PropTypes.array.isRequired,
    pinnedLog: PropTypes.array.isRequired,
    onTextChange: PropTypes.func.isRequired,
    onPressEnterKey: PropTypes.func.isRequired,
    onClickSend: PropTypes.func.isRequired,
    onClickPin: PropTypes.func.isRequired,
    onUnclickPin: PropTypes.func.isRequired,
    senderName: PropTypes.string.isRequired
};

/*
    Styles (taken from Facebook)
 */

var styles = {
    conversation: {
        width: '461px',
        border: '1px solid #e0e0e0',
        fontFamily: 'helvetica, arial, sans-serif',
        fontSize: '12px',
        color: '#141823',
        margin: '0px',
        padding: '0px'
    }
};

/* props
 chatLog={this.state.chatLog}
 pinnedLog={this.state.pinnedLog}
 onTextChange={this.handleChange}
 onPressEnterKey={this.handleKeyPress}
 onClickSend={this.handleClickSend}
 onClickPin={this.handleClickPin}
 onUnclickPin={this.handleUnclickPin}
 senderName="Matthew Chiang"
 */

module.exports = Conversation;
