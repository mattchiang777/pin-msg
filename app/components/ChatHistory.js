var React = require('react');
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
                {this.props.chatLog.map(function (message, i) { // Re-read and understand how you're binding functions here
                    var boundClick = this.handleClickPin.bind(this, i);
                    var boundUnclick = this.handleUnclickPin.bind(this, i);
                    return (
                        <Message onClickPin={boundClick}
                                 onUnclickPin={boundUnclick}
                                 text={message}
                                 key={i}
                                 messageKey={message}
                                 senderName={this.props.senderName}
                                 dateSent={utils.getAndFormatCurrentDate()} // rendering Messages on SendMessageContainer causes dateSent to be re-rendered
                                 ref={'message' + i}>
                        </Message>
                    )
                }, this)}
            </div>
        )
    }
});

/* props
 chatLog={props.chatLog}
 onClickPin={props.onClickPin}
 onUnclickPin={props.onUnclickPin}
 senderName="Matthew Chiang"
 */

module.exports = ChatHistory;
