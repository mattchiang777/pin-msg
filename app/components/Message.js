/*
    Pin icon by Creative Stall: https://thenounproject.com/search/?q=pin&i=111356
 */

var React = require('react');
var PinContainer = require('../containers/PinContainer');

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
        var isPinned;
        console.log("initial-rendering");
        if (this.props.isPinned) {
            isPinned = true;
        } else {
            isPinned = false;
        }
        return { hover: false,
                 pinned: isPinned
        };
    },
    mouseOver: function() {
        this.setState({hover: true});
    },
    mouseOut: function() {
        this.setState({hover: false});
    },
    handleClick: function() {
        // if pinned, highlight the pin icon -- Functionality of toggling causing a message to be pinned or unpinned is missing right now
        this.setState({pinned: !this.state.pinned}, function() {
            if (this.state.pinned) {
                this.props.onClickPin(this.props); // binding/passing props
            } else {
                this.props.onUnclickPin(this.props);
            }
        });
    },
    render: function() {
        return (
            <div>
                <ProfilePicture />
                <div>{this.props.senderName}</div>
                <div onMouseEnter={this.mouseOver}
                     onMouseLeave={this.mouseOut}>
                    <MessageText text={this.props.text} />
                    { !this.state.pinned ? // check if it's pinned first, then if it's being hovered on. if it's pinned, then leave the icon highlighted
                            this.state.hover ? <img src="./app/data/images/icon-pin-hover.png"
                                              onClick={this.handleClick} />
                                : null
                        : <img src="./app/data/images/icon-pin-clicked.png"
                               onClick={this.handleClick} />
                    }
                </div>
                <div>
                    {this.props.dateSent}
                </div>
            </div>
        )
    }
});

/*
 onClickPin={boundClick}
 onUnclickPin={boundUnclick}
 text={message}
 key={i}
 messageKey={message}
 senderName={this.props.senderName}
 isPinned={false}
 dateSent={utils.getAndFormatCurrentDate()} // rendering Messages on SendMessageContainer causes dateSent to be re-rendered
 ref={'message' + i}
 */

/* From PinnedMessagesList
 text={messageObj.message}
 senderName={messageObj.senderName}
 key={i}
 isPinned={true}
 dateSent={utils.getAndFormatCurrentDate()}
 */

module.exports = Message;
