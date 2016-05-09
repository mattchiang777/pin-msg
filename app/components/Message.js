/*
    Pin icon by Creative Stall: https://thenounproject.com/search/?q=pin&i=111356
 */

var React = require('react');
var PropTypes = React.PropTypes;

function ProfilePicture(props) {
    // hard-coded
    return (
        <img src="./app/data/images/matthewchiang.jpg"/>
    )
}

function MessageText(props) {
    return (
        <span>
            {props.text}
        </span>
    )
}

var Message = React.createClass({
    getInitialState: function() {
        return { hover: false };
    },
    mouseOver: function() {
        this.setState({hover: true});
    },
    mouseOut: function() {
        this.setState({hover: false});
    },
    handleClick: function() {
        if (this.props.isPinned) { // if it's pinned now, unpin it
            this.props.onUnclickPin(this.props); // binding/passing props
        } else { // if it's unpinned now, pin it
            this.props.onClickPin(this.props);
        };
    },
    // check if it's pinned first, then if it's being hovered on.
    // if it's pinned already, then leave the icon highlighted
    renderPinIcon: function() {
        if (!this.props.isPinned) {
            if (this.state.hover) {
                return (
                    <img src="./app/data/images/icon-pin-hover.png"
                         onClick={this.handleClick} />
                )
            }
        }  else {
            return (
                <img src="./app/data/images/icon-pin-clicked.png"
                     onClick={this.handleClick} />
            )
        }
    },
    render: function() {
        return (
            <div onMouseEnter={this.mouseOver}
                 onMouseLeave={this.mouseOut}>
                <ProfilePicture />
                <div>{this.props.senderName}</div>
                <div>
                    <MessageText text={this.props.text} />
                    {this.renderPinIcon()}
                </div>
                <div>
                    {this.props.dateSent}
                </div>
                { this.props.isPinned && this.state.hover && this.props.inPinnedList ? <span onClick={this.handleClick}>X</span> : null }
            </div>
        )
    }
});

Message.propTypes = {
    onClickPin: PropTypes.func.isRequired,
    onUnclickPin: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    senderName: PropTypes.string.isRequired,
    dateSent: PropTypes.string.isRequired,

    isPinned: PropTypes.bool,
    inPinnedList: PropTypes.bool,
    messageKey: PropTypes.string
};

/* From ChatHistory
 onClickPin={boundClick}
 onUnclickPin={boundUnclick}
 text={message}
 key={i}
 messageKey={message}
 senderName={this.props.senderName}
 dateSent={utils.getAndFormatCurrentDate()} // rendering Messages on SendMessageContainer causes dateSent to be re-rendered
 ref={'message' + i}>
 */

/* From PinnedMessagesList
 onClickPin={boundClick}
 onUnclickPin={boundUnclick}
 text={messageObj.message}
 messageKey={messageObj.message}
 senderName={messageObj.senderName}
 isPinned={true}
 dateSent={utils.getAndFormatCurrentDate()}
 */

module.exports = Message;
