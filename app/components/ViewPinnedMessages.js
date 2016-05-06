var React = require('react');
var PropTypes = React.PropTypes;
var PinnedMessagesList = require('./PinnedMessagesList');

// TODO ViewPinnedMessages can either be a persistent bar or button in ToolBar
function ViewPinnedMessages(props) {
    return (
        <div>
            <PinnedMessagesList pinnedLog={props.pinnedLog}
                                onClickPin={props.onClickPin}
                                onUnclickPin={props.onUnclickPin} />
        </div>
    )
}

module.exports = ViewPinnedMessages;
