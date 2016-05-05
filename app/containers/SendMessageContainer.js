var React = require('react');
var ReactDOM = require('react-dom');
var Message = require('../components/Message');

var SendMessageContainer = React.createClass({
    getInitialState: function() {
        return {
            text: "",
            log: []
        };
    },
    handleChange: function(event) {
        this.setState({ text: event.target.value });
    },
    erase: function() {
        this.setState({ text: "" });
        this.refs.typeMessageArea.value = ""; // Clear the form so that the user can type a new message
    },
    updateLog: function() {
        var currentLog = this.state.log;
        currentLog.push(this.state.text);
        this.setState({ log: currentLog });
    },
    handleClick: function(event) {
        this.updateLog();
        this.erase();
    },
    handleKeyPress: function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.handleClick(event);
        }
    },
    render: function() {
        return (
            <div className="well clearfix">
                {this.state.log.map(function(message, i) {
                    return <Message text={message}
                                    key={i}
                                    senderName="Matthew Chiang"/>
                })}
                <textarea className="form-control"
                          onChange={this.handleChange}
                          onKeyPress={this.handleKeyPress}
                          ref="typeMessageArea"
                          placeholder="Write a reply..."></textarea>
                <br/>
                <button className="btn btn-primary pull-right"
                        onClick={this.handleClick}>Send</button>
            </div>
        );
    }
});

module.exports = SendMessageContainer;

/*

 <div className="well clearfix">
 <textarea className="form-control"
 onChange={this.handleChange}></textarea>
 <br/>
 <button className="btn btn-primary pull-right">Tweet</button>
 </div>

 */
