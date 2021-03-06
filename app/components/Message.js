/*
    Pin icon by Creative Stall: https://thenounproject.com/search/?q=pin&i=111356
 */

var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
// var pathToMattPic = require("url?limit=8192!../data/images/matthewchiang.jpg");
// var pathToAlbertPic = require("url?limit=8192!../data/images/alberthu.jpg");
// var pathToPinHoverIcon = require("url?limit=8192!../data/images/icon-pin-hover.png");
// var pathToPinClickedIcon = require("url?limit=8192!../data/images/icon-pin-clicked.png");
var pathToMattPic = require("../data/images/matthewchiang.jpg");
var pathToAlbertPic = require("../data/images/alberthu.jpg");
var pathToPinHoverIcon = require("../data/images/icon-pin.png");
var pathToPinClickedIcon = require("../data/images/icon-pin-clicked.png");

function ProfilePicture(props) {
    // hard-coded
    return (
        <div>
            {props.senderName === "Matthew Chiang" ?
                <img src={pathToMattPic}
                     style={styles.profilePic}/>
                : <img src={pathToAlbertPic}
                       style={styles.profilePic}/>
            }
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
    // TODO flash upon pinning and unpinning
    // flash: function(elem) {
    //     elem.style.opacity = 0;
    //     elem.style.background = "yellow";
    //     console.log('how many clicks');
    //     elem.style.background = "#fff";
    //     elem.style.transition = "background 1000ms";
    //     elem.style.opacity = 1;
    //     requestAnimationFrame(flash);
    // },
    handleClick: function() {
        var elem = ReactDOM.findDOMNode(this);
        if (this.props.isPinned) { // if it's pinned now, unpin it
            this.props.onUnclickPin(this.props); // binding/passing props
            // requestAnimationFrame(this.flash(elem));
        } else { // if it's unpinned now, pin it
            this.props.onClickPin(this.props);
            // requestAnimationFrame(this.flash(elem));
        };
    },
    // check if it's pinned first, then if it's being hovered on.
    // if it's pinned already, then leave the icon highlighted
    renderPinIcon: function() {
        if (!this.props.isPinned) {
            if (this.state.hover) {
                return (
                    <img src={pathToPinHoverIcon}
                         onClick={this.handleClick}
                         style={styles.pinIcon}  />
                )
            }
        }  else {
            return (
                <img src={pathToPinClickedIcon}
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
                <ProfilePicture senderName={this.props.senderName}/>
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
