var React = require('react');
var PinnedMessagesList = require('./PinnedMessagesList');

function ViewPinnedMessages() {
    return (
        <div>
            <div>View Pinned Messages</div>
            <PinnedMessagesList />
        </div>
    )
}

module.exports = ViewPinnedMessages;
