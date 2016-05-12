var React = require('react');
var Conversation = require('../components/Conversation');
var utils = require('../utils/utils');
var sampleData = require('../data/data');

var ConversationContainer = React.createClass({
    getInitialState: function() {
        var initialChat = this.renderSampleChat();
        return {
            text: "",
            chatLog: initialChat,
            pinnedLog: []
        };
    },
    renderSampleChat: function() {
        var arr = [];
        sampleData.sampleLog.map(function (messageObj, i) {
            arr.push(messageObj);
        });
        return arr;
    },
    // Handle typing a message and saving it upon sending
    handleChange: function(event) {
        this.setState({ text: event.target.value });
    },
    resetText: function() {
        this.setState({ text: "" });
    },
    updateLog: function(node) {
        var currentLog = this.state.chatLog;
        currentLog.push({
            message: this.state.text,
            isPinned: false,
            dateSent: utils.getAndFormatCurrentDate(),
            senderName: "Matthew Chiang"
        });
        this.setState({ chatLog: currentLog }, function() {
            this.resizeScroll(node);
        });
    },
    resizeScroll: function(node) {
        node.scrollTop = node.scrollHeight + 1000;
    },
    handleKeyPress: function(node) {
        this.handleClickSend(node);
    },
    handleClickSend: function(node) {
        this.updateLog(node);
        this.resetText();
    },
    // Handle pinning and unpinning messages
    handleClickPin: function(i, props) {
        var currPinnedLog = this.state.pinnedLog;
        currPinnedLog.unshift({
            messageKey: props.messageKey,
            senderName: props.senderName,
            message: props.text,
            dateSent: props.dateSent
        });
        this.setState({ pinnedLog: currPinnedLog });

        // find the corresponding message in ChatHistory and change its "isPinned" to true
        var currLog = this.state.chatLog;
        currLog.forEach(function(obj) {
            if (obj.message === props.messageKey) {
                obj.isPinned = true;
            }
        });
        this.setState({ chatLog: currLog });
    },
    handleUnclickPin: function(i, props) {
        // Remove from PinnedMessagesList

        // Find the correct message here and remove it
        var currPinnedLog = this.state.pinnedLog;
        var updatedPinnedLog = currPinnedLog.filter(function(msg) {
            return msg.messageKey !== props.messageKey;
        });

        // Update the pinnedLog
        this.setState({pinnedLog: updatedPinnedLog});

        // Update the ChatHistory too if unpinning by changing the ChatHistory's corresponding message's "isPinned" to false
        var currLog = this.state.chatLog;
        currLog.forEach(function(obj) {
            if (obj.message === props.messageKey) {
                obj.isPinned = false;
            }
        });
        this.setState({ chatLog: currLog });
    },
    handleFillerClick: function(node) {
        var currentLog = this.state.chatLog;
        sampleData.fillerLog.forEach(function (messageObj, i) {
            currentLog.push(messageObj);
        });
        this.setState({ chatLog: currentLog }, function() {
            this.resizeScroll(node);
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
                                   onFillerClick={this.handleFillerClick} />
                </div>
            )
    }
});

module.exports = ConversationContainer;
