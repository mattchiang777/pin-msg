var React = require('react');
var PinContainer = require('../containers/PinContainer');

function getAndFormatCurrentDate(date) {
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var amOrPm = "am";

    // convert to readable am/pm format
    if (hours > 12) {
        hours -= 12;
        amOrPm = "pm";
    }
    return hours + ":" + minutes + amOrPm; // converts num to str automatically
}

function ProfilePicture(props) {
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
        return {hover: false};
    },
    mouseOver: function() {
        this.setState({hover: true});
    },
    mouseOut: function() {
        this.setState({hover: false});
    },
    render: function() {
        return (
            <div >
                <ProfilePicture />
                <div>{this.props.senderName}</div>
                <div onMouseEnter={this.mouseOver}
                     onMouseLeave={this.mouseOut}>
                    <MessageText text={this.props.text} />
                    { this.state.hover ? <PinContainer text={this.props.text} /> : null }
                </div>
                <div>
                    {getAndFormatCurrentDate()}
                </div>
            </div>
        )
    }
});

module.exports = Message;
