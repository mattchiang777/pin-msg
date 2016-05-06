var React = require('react');
var PinnedMessagesList = require('./PinnedMessagesList');

function ViewPinnedMessages(props) { // could either be a header bar or button icon
    return (
        <div>
            <div>View Pinned Messages</div>
            <PinnedMessagesList pinnedLog={props.pinnedLog}
                                onClickPin={props.onClickPin}
                                onUnclickPin={props.onUnclickPin} />
        </div>
    )
}

module.exports = ViewPinnedMessages;
