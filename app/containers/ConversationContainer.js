var React = require('react');
var Conversation = require('../components/Conversation');

var ConversationContainer = React.createClass({
    getInitialState: function() {
        return {
            text: "",
            chatLog: [],
            pinnedLog: []
        };
    },
    handleChange: function(event) {
        this.setState({ text: event.target.value });
    },
    resetText: function() {
        this.setState({ text: "" });
    },
    updateLog: function() {
        var currentLog = this.state.chatLog;
        currentLog.push(this.state.text);
        this.setState({ chatLog: currentLog });
    },
    handleKeyPress: function(event) {
        this.handleClickSend(event);
    },
    handleClickSend: function(SendButton) {
        this.updateLog();
        this.resetText();
    },
    handleClickPin: function(i, props) { // might be possible to not need props as an arg since all the info is already here
        console.log(props.senderName + ": " + this.state.chatLog[i]);
    },
    render: function() {
        return (
                <div>
                    <Conversation  chatLog={this.state.chatLog}
                                   onTextChange={this.handleChange}
                                   onPressEnterKey={this.handleKeyPress}
                                   onClickSend={this.handleClickSend}
                                   onClickPin={this.handleClickPin}
                                   senderName="Matthew Chiang" />
                </div>
            )
    }
});

module.exports = ConversationContainer;
