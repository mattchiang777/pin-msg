var React = require('react');
var PropTypes = React.PropTypes;
var PinnedMessagesList = require('./PinnedMessagesList');

// TODO ViewPinnedMessages can either be a persistent bar or button in ToolBar
var ViewPinnedMessages = React.createClass({
    render: function() {
        return (
            <div>
                { this.props.pinnedLog.length > 0 ?
                    <PinnedMessagesList pinnedLog={this.props.pinnedLog}
                                        onClickPin={this.props.onClickPin}
                                        onUnclickPin={this.props.onUnclickPin}/> : null
                }
            </div>
        )
    }
});

module.exports = ViewPinnedMessages;
