var React = require('react');
var ReactDOM = require('react-dom');
var Message = require('../components/Message');

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
    render: function() {
        return (
            <div className="well clearfix">
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
 onTextChange={props.onTextChange}
 onPressEnterKey={props.onPressEnterKey}
 onClickSend={props.onClickSend}
 */

module.exports = SendMessageContainer;
