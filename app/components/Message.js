/*
    Pin icon by Creative Stall: https://thenounproject.com/search/?q=pin&i=111356
 */

var React = require('react');
var PropTypes = React.PropTypes;

function ProfilePicture(props) {
    // hard-coded
    return (
        <div>
            <img src="./app/data/images/matthewchiang.jpg"
                 style={styles.profilePic}/>
        </div>
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
                         onClick={this.handleClick}
                         style={styles.pinIcon}  />
                )
            }
        }  else {
            return (
                <img src="./app/data/images/icon-pin-clicked.png"
                     onClick={this.handleClick}
                     style={styles.pinIcon}  />
            )
        }
    },
    render: function() {
        return (
            <div onMouseEnter={this.mouseOver}
                 onMouseLeave={this.mouseOut}
                 style={styles.container}>
                <ProfilePicture />
                <div style={styles.textContainer}>
                    <div style={styles.date}>
                        <div>{this.props.dateSent}</div>
                        { this.props.isPinned && this.state.hover && this.props.inPinnedList ? <div onClick={this.handleClick} style={styles.removePinned}>x</div> : null }
                    </div>
                    <div style={styles.profileName}>{this.props.senderName}</div>
                    <div style={styles.msgText}>
                        <MessageText text={this.props.text} />
                        {this.renderPinIcon()}
                    </div>
                </div>
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

var styles = {
    container: {
        padding: '8px 20px 7px',
        position: 'relative'
    },
    profilePic: {
        marginTop: '1px',
        marginRight: '10px',
        display: 'block',
        float: 'left',
        width: '32px',
        height: '32px',
        border: '0px'
    },
    textContainer: {
        // float: 'right',
        lineHeight: '1.34',
        display: 'block'
    },
    profileName: {
        color: '#3b5998',
        fontWeight: 'bold',
        fontSize: '13px'
    },
    msgText: {
        display: 'block',
        textAlign: 'left',
        marginLeft: '42px',
        marginRight: '50px',
        lineHeight: '1.8'
    },
    pinIcon: {
        marginLeft: '3px',
        marginBottom: '1px'
    },
    date: {
        color: '#bdc1c9',
        display: 'inline-block',
        verticalAlign: 'middle',
        float: 'right'
    },
    removePinned: {
        float: 'right',
        cursor: 'pointer'
    }
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
