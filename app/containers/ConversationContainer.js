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
        var currPinnedLog = this.state.pinnedLog;
        // console.log("does props.messageKey exist yet in ConvoContainer?: " + props.messageKey); i think this is bad practice to pass up props?
        // bug: you can add the same message over and over again. sol: make it so if pinned is true, can't add again in 'Message'
        currPinnedLog.push({
            messageKey: props.messageKey,
            senderName: props.senderName,
            message: this.state.chatLog[i]
        });
        this.setState({ pinnedLog: currPinnedLog}, function() {
            console.log("pinnedLog after adding: ");
            console.log(this.state.pinnedLog);
        });
    },
    handleUnclickPin: function(i, props) {
        // find messageKey and remove msg with that key from the array

        // if trying to unpin from PinnedMessagesList, unhighlight it from the ChatHistory UI too
        // if (props.isPinned) {
        //     var currentLog = this.state.chatLog;
        //     var corrChatMsg = currentLog.find(function(message) {
        //        return message === props.text;
        //     });
        //     var idx = currentLog.findIndex(function(message) {
        //        return corrChatMsg === message;
        //     });
        //     currentLog[idx] = corrChatMsg;
        //     var updatedChatLog = currentLog;
        // }

        // Remove from PinnedMessagesList
        var currPinnedLog = this.state.pinnedLog;
        console.log("going to remove item with key: " + props.messageKey);

        // find the correct message here and remove it
        var updatedPinnedLog = currPinnedLog.filter(function(msg) {
            return msg.messageKey !== props.messageKey;
        });

        // what's the pinned log now?
        this.setState({pinnedLog: updatedPinnedLog}, function() {
            console.log("pinnedLog after removing: ");
            console.log(this.state.pinnedLog);
        });
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
