var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var Message = require('./Message');
var sampleData = require('../data/data');

var ChatHistory = React.createClass({
    handleClickPin: function(i, props) {
        this.props.onClickPin(i, props);
    },
    handleUnclickPin: function(i, props) {
        this.props.onUnclickPin(i, props);
    },
    renderSampleData: function(messageObj, i) {
        var boundClick = this.handleClickPin.bind(this, i);
        var boundUnclick = this.handleUnclickPin.bind(this, i);
            return (
                <Message onClickPin={boundClick}
                         onUnclickPin={boundUnclick}
                         text={messageObj.message}
                         key={i}
                         isPinned={false}
                         messageKey={messageObj.message}
                         senderName={messageObj.senderName}
                         dateSent={messageObj.dateSent}
                         ref={'message' + i}>
                </Message>
            )
        },
    render: function() {
        return (
            <div style={styles.scrollableArea}>
                {sampleData.sampleLog.map(function (messageObj, i) {
                    return this.renderSampleData(messageObj, i)
                    }, this)
                }
                {this.props.chatLog.map(function (messageObj, i) { // Re-read and understand how you're binding functions here
                    var boundClick = this.handleClickPin.bind(this, i);
                    var boundUnclick = this.handleUnclickPin.bind(this, i);
                    return (
                        <Message onClickPin={boundClick}
                                 onUnclickPin={boundUnclick}
                                 text={messageObj.message}
                                 key={i}
                                 isPinned={messageObj.isPinned}
                                 messageKey={messageObj.message}
                                 senderName={this.props.senderName}
                                 dateSent={messageObj.dateSent}
                                 ref={'message' + i}>
                        </Message>
                    )
                }, this)}
                { this.props.clickedFiller ? sampleData.fillerLog.map(function (messageObj, i) {
                    return this.renderSampleData(messageObj, i)
                }, this) : null}
            </div>
        )
    }
});

ChatHistory.propTypes = {
    chatLog: PropTypes.array.isRequired,
    onClickPin: PropTypes.func.isRequired,
    onUnclickPin: PropTypes.func.isRequired,
    senderName: PropTypes.string.isRequired,

    clickedFiller: PropTypes.bool
};

/* props
 chatLog={props.chatLog}
 onClickPin={props.onClickPin}
 onUnclickPin={props.onUnclickPin}
 senderName="Matthew Chiang"
 clickedFiller
 */

var styles = {
    scrollableArea: {
        width: '461px',
        height: '530px',
        overflowX: 'hidden',
        overflowY: 'scroll',
        position: 'relative',
        wordWrap: 'break-word',
        // border: '1px solid #e0e0e0',
        // borderTop: '1px solid #e0e0e0',
        fontFamily: 'helvetica, arial, sans-serif',
        fontSize: '12px',
        color: '#141823'
    }
};

module.exports = ChatHistory;
