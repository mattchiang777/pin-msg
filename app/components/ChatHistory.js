var React = require('react');
var PropTypes = React.PropTypes;
var Message = require('./Message');
var utils = require('../utils/utils');

var ChatHistory = React.createClass({
    handleClickPin: function(i, props) {
        this.props.onClickPin(i, props);
    },
    handleUnclickPin: function(i, props) {
        this.props.onUnclickPin(i, props);
    },
    render: function () {
        return (
            <div>
                <h1>Chat History Bro</h1>
                {this.props.chatLog.map(function (messageObj, i) { // Re-read and understand how you're binding functions here
                    var boundClick = this.handleClickPin.bind(this, i);
                    var boundUnclick = this.handleUnclickPin.bind(this, i);
                    console.log(i + ": " + messageObj.isPinned);
                    return (
                        <Message onClickPin={boundClick}
                                 onUnclickPin={boundUnclick}
                                 text={messageObj.message}
                                 key={i}
                                 isPinned={messageObj.isPinned}
                                 messageKey={messageObj.message}
                                 senderName={this.props.senderName}
                                 dateSent={messageObj.dateSent} // rendering Messages on SendMessageContainer causes dateSent to be re-rendered
                                 ref={'message' + i}>
                        </Message>
                    )
                }, this)}
            </div>
        )
    }
});

ChatHistory.propTypes = {
    chatLog: PropTypes.array.isRequired,
    onClickPin: PropTypes.func.isRequired,
    onUnclickPin: PropTypes.func.isRequired,
    senderName: PropTypes.string.isRequired
};

/* props
 chatLog={props.chatLog}
 onClickPin={props.onClickPin}
 onUnclickPin={props.onUnclickPin}
 senderName="Matthew Chiang"
 */

module.exports = ChatHistory;
