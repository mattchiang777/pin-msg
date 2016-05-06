var React = require('react');
var Message = require('./Message');
var utils = require('../utils/utils');

var PinnedMessagesList = React.createClass({
    getInitialState: function() {
        return { hover: false };
    },
    mouseOver: function() {
        this.setState({hover: true});
    },
    mouseOut: function() {
        this.setState({hover: false});
    },
    handleClickPin: function(i, props) {
        this.props.onClickPin(i, props);
    },
    handleUnclickPin: function(i, props) {
        this.props.onUnclickPin(i, props);
    },
    render: function() {
        return (
            <div>
                <h1>Pinned Messages List</h1>
                {this.props.pinnedLog.map(function(messageObj, i) { // Re-read and understand how you're binding functions here
                    // var mouseEnter = this.mouseOver;
                    // var mouseLeave = this.mouseOut;
                    // var hoverState = this.state.hover;
                    var boundClick = this.handleClickPin.bind(this, i);
                    var boundUnclick = this.handleUnclickPin.bind(this, i);
                    return (
                        <div key={i}>
                            <Message
                                onClickPin={boundClick}
                                onUnclickPin={boundUnclick}
                                text={messageObj.message}
                                messageKey={messageObj.message}
                                senderName={messageObj.senderName}
                                isPinned={true}
                                dateSent={utils.getAndFormatCurrentDate()} // rendering Messages on SendMessageContainer causes dateSent to be re-rendered
                            >
                            </Message>
                        </div>
                    )
                }, this)}
            </div>
        )
    }
});

/*
 props.pinnedLog
 */

module.exports = PinnedMessagesList;
