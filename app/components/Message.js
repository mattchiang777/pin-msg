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
        return { hover: false,
                 pinned: false
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
        this.setState({pinned: !this.state.pinned});
        this.props.onClickPin();
    },
    render: function() {
        return (
            <div>
                <ProfilePicture />
                <div>{this.props.senderName}</div>
                <div onMouseEnter={this.mouseOver}
                     onMouseLeave={this.mouseOut}>
                    <MessageText text={this.props.text} />
                    { this.state.hover ? <img src="./app/data/images/icon-actions.png"
                                              onClick={this.handleClick} /> : null }
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
 text={message}
 key={i}
 senderName="Matthew Chiang"
 dateSent={utils.getAndFormatCurrentDate()}
 ref={'message' + i}
 */

module.exports = Message;
