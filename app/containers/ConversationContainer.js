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
    // Handle typing a message
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
    // Handle pinning and unpinning messages
    handleClickPin: function(i, props) {
        var currPinnedLog = this.state.pinnedLog;
        currPinnedLog.push({
            messageKey: props.messageKey,
            senderName: props.senderName,
            message: this.state.chatLog[i]
        });
        this.setState({ pinnedLog: currPinnedLog});
    },
    handleUnclickPin: function(i, props) {
        // Remove from PinnedMessagesList
        // console.log("going to unpin message with messageKey: " + props.messageKey);

        // Find the correct message here and remove it
        var currPinnedLog = this.state.pinnedLog;
        var updatedPinnedLog = currPinnedLog.filter(function(msg) {
            return msg.messageKey !== props.messageKey;
        });

        // Update the pinnedLog
        this.setState({pinnedLog: updatedPinnedLog});
    },
    render: function() {
        return (
                <div>
                    <Conversation  chatLog={this.state.chatLog}
                                   pinnedLog={this.state.pinnedLog}
                                   onTextChange={this.handleChange}
                                   onPressEnterKey={this.handleKeyPress}
                                   onClickSend={this.handleClickSend}
                                   onClickPin={this.handleClickPin}
                                   onUnclickPin={this.handleUnclickPin}
                                   senderName="Matthew Chiang" />
                </div>
            )
    }
});

module.exports = ConversationContainer;
