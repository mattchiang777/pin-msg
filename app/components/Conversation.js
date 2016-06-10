var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var Header = require('./Header');
var ChatHistory = require('./ChatHistory');
var SendMessageContainer = require('../containers/SendMessageContainer');
var ViewPinnedMessages = require('./ViewPinnedMessages');

var Conversation = React.createClass({
    getInitialState: function() {
        return {
            clickedFiller: false
        }
    },
    // resize: function() {
    //     var chatHistoryNode = ReactDOM.findDOMNode(this.refs.chatHistory);
    //     chatHistoryNode.scrollTop = chatHistoryNode.scrollHeight + 1000;
    // },
    onPressEnterKey: function() {
        var chatHistoryNode = ReactDOM.findDOMNode(this.refs.chatHistory);
        this.props.onPressEnterKey(chatHistoryNode);
        // this.resize();
    },
    onClickSend: function() {
        var chatHistoryNode = ReactDOM.findDOMNode(this.refs.chatHistory);
        this.props.onClickSend(chatHistoryNode);
        // this.resize();
    },
    handleFillerClick: function() {
        var chatHistoryNode = ReactDOM.findDOMNode(this.refs.chatHistory);
        this.props.onFillerClick(chatHistoryNode);
    },
    // TODO why are the old props same as the new props already when resizing the scroll area?
    componentWillUpdate: function(nextProps) {
        // console.log("this props:" + this.props.chatLog)
        // console.log(this.props.chatLog)
        // console.log("next props:" + nextProps.chatLog)
        // console.log(nextProps.chatLog)
        // console.log(nextProps.chatLog, this.props.chatLog)
        return true;
    },
    render: function() {
        return (
            <div style={styles.conversation}>
                <Header />
                <ViewPinnedMessages pinnedLog={this.props.pinnedLog}
                                    onClickPin={this.props.onClickPin}
                                    onUnclickPin={this.props.onUnclickPin} />
                <ChatHistory chatLog={this.props.chatLog}
                             onClickPin={this.props.onClickPin}
                             onUnclickPin={this.props.onUnclickPin}
                             ref="chatHistory"
                             clickedFiller={this.state.clickedFiller} />
                <SendMessageContainer onTextChange={this.props.onTextChange}
                                      onPressEnterKey={this.onPressEnterKey}
                                      onClickSend={this.props.onClickSend} />
                { /*<button className="btn btn-default"
                        onClick={this.handleFillerClick}>Render Filler Messages</button> */
                        }
            </div>
        )
    }
});

Conversation.propTypes = {
    chatLog: PropTypes.array.isRequired,
    pinnedLog: PropTypes.array.isRequired,
    onTextChange: PropTypes.func.isRequired,
    onPressEnterKey: PropTypes.func.isRequired,
    onClickSend: PropTypes.func.isRequired,
    onClickPin: PropTypes.func.isRequired,
    onUnclickPin: PropTypes.func.isRequired,

    onFillerClick: PropTypes.func
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
        margin: '0px auto',
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
