var React = require('react');
var ReactDOM = require('react-dom');
var Message = require('../components/Message');
var utils = require('../utils/utils');

var SendMessageContainer = React.createClass({
    handleClickSend: function() { // holy this is crazy right here, lets me use refs here while using the callback from parent
        this.clearForm();
        this.props.onClickSend(this);
    },
    handleKeyPress: function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.clearForm();
            this.props.onPressEnterKey(event);
        }
    },
    clearForm: function() {
        this.refs.typeMessageArea.value = ""; // Clear the form so that the user can type a new message
    },
    handleClickPin: function(i, props) {
        this.props.onClickPin(i, this.props);
    },
    render: function() {
        return (
            <div className="well clearfix">
                {this.props.chatLog.map(function(message, i) { // Re-read and understand how you're binding functions here
                    var boundClick = this.handleClickPin.bind(this, i);
                    return (
                            <Message onClickPin={boundClick}
                                        text={message}
                                        key={i}
                                        senderName={this.props.senderName}
                                        dateSent={utils.getAndFormatCurrentDate()} // rendering Messages on SendMessageContainer causes dateSent to be re-rendered
                                        ref={'message' + i} >
                            </Message>
                    )
                }, this)}
                <textarea className="form-control"
                          onChange={this.props.onTextChange}
                          onKeyPress={this.handleKeyPress}
                          ref="typeMessageArea"
                          placeholder="Write a reply...">
                </textarea>
                <br/>
                <button className="btn btn-primary pull-right"
                        onClick={this.handleClickSend}>Send</button>
            </div>
        );
    }
});

/*
 chatLog={props.chatLog}
 onTextChange={props.onTextChange}
 onPressEnterKey={props.onPressEnterKey}
 onClickSend={props.onClickSend}
 onClickPin={props.onClickPin}
 senderName="Matthew Chiang"
 */

module.exports = SendMessageContainer;
