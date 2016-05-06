var React = require('react');
var PropTypes = React.PropTypes;
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
                    var mouseEnter = this.mouseOver.bind(this, i);
                    var mouseLeave = this.mouseOut.bind(this, i);
                    var boundClick = this.handleClickPin.bind(this, i);
                    var boundUnclick = this.handleUnclickPin.bind(this, i);
                    console.log(messageObj.messageKey + "is now at ith spot: " + i);
                    return (
                        <div key={i}
                             onMouseEnter={mouseEnter}
                             onMouseLeave={mouseLeave}>
                            <Message
                                onClickPin={boundClick}
                                onUnclickPin={boundUnclick}
                                isPinned={true}
                                inPinnedList={true}
                                text={messageObj.message}
                                messageKey={messageObj.message}
                                senderName={messageObj.senderName}
                                dateSent={utils.getAndFormatCurrentDate()} // TODO rendering Messages on SendMessageContainer causes dateSent to be re-rendered
                            >
                            </Message>
                        </div>
                    )
                }, this)}
            </div>
        )
    }
});

PinnedMessagesList.propTypes = {
    pinnedLog: PropTypes.array.isRequired,
    onClickPin: PropTypes.func.isRequired,
    onUnclickPin: PropTypes.func.isRequired,
};

/*
 pinnedLog={props.pinnedLog}
 onClickPin={props.onClickPin}
 onUnclickPin={props.onUnclickPin}
 */

module.exports = PinnedMessagesList;
