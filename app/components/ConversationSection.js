var React = require('react');
var Header = require('./Header');
var SendMessageContainer = require('../containers/SendMessageContainer');
var ViewPinnedMessages = require('./ViewPinnedMessages');

function ConversationSection() {
    return (
        <div>
            <Header />
            <ViewPinnedMessages />
            <SendMessageContainer />
        </div>
    )
}

module.exports = ConversationSection;
