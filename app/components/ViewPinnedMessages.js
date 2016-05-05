var React = require('react');
var PinnedMessagesList = require('./PinnedMessagesList');

function ViewPinnedMessages() { // could either be a header bar or button icon
    return (
        <div>
            <div>View Pinned Messages</div>
            <PinnedMessagesList />
        </div>
    )
}

module.exports = ViewPinnedMessages;
