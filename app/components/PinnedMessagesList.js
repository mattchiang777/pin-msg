var React = require('react');
var PropTypes = React.PropTypes;
var Message = require('./Message');

var PinnedMessagesList = React.createClass({
    getInitialState: function() {
        return { hover: false,
                 isExpanded: false };
    },
    mouseOver: function() {
        this.setState({hover: true});
    },
    mouseOut: function() {
        this.setState({hover: false});
    },
    handleClickPin: function(i, props) {
        this.props.onClickPin(i, props);
    },
    handleUnclickPin: function(i, props) {
        this.props.onUnclickPin(i, props);
    },
    handleClickExpand: function() {
        this.setState({ isExpanded: !this.state.isExpanded });
    },
    // TODO maybe return the whole <p> tag here and increase the darkness of the blur when the pinned tab is open
    renderPinnedMessagesCount: function() {
        if (this.state.isExpanded) {
            return (
                <span>({this.props.pinnedLog.length}) &#9650;</span>
            )
        } else {
            return (
                <span>({this.props.pinnedLog.length}) &#9660;</span>
            )
        }
    },
    render: function() {
        return (
            <div style={styles.tab}>
                <p onClick={this.handleClickExpand} style={styles.header}>Pinned Messages List {this.renderPinnedMessagesCount()}</p>
                { this.state.isExpanded ?
                    this.props.pinnedLog.map(function (messageObj, i) { // Re-read and understand how you're binding functions here
                        var mouseEnter = this.mouseOver.bind(this, i);
                        var mouseLeave = this.mouseOut.bind(this, i);
                        var boundClick = this.handleClickPin.bind(this, i);
                        var boundUnclick = this.handleUnclickPin.bind(this, i);
                        return (
                            <div key={messageObj.message}
                                 onMouseEnter={mouseEnter}
                                 onMouseLeave={mouseLeave}>
                                <Message
                                    onClickPin={boundClick}
                                    onUnclickPin={boundUnclick}
                                    isPinned={true}
                                    inPinnedList={true}
                                    text={messageObj.message}
                                    messageKey={messageObj.message}
                                    senderName={messageObj.senderName}
                                    dateSent={messageObj.dateSent} // TODO rendering Messages on SendMessageContainer causes dateSent to be re-rendered
                                >
                                </Message>
                            </div>
                        )
                    }, this) : null
                }
            </div>
        )
    }
});

PinnedMessagesList.propTypes = {
    pinnedLog: PropTypes.array.isRequired,
    onClickPin: PropTypes.func.isRequired,
    onUnclickPin: PropTypes.func.isRequired,
};

var styles = {
    header: {
        textAlign: 'center',
        color: '#3b5998',
        fontWeight: 'bold',
        fontSize: '13px',
        cursor: 'pointer',
        marginTop: '10px'
    },
    tab: {
        borderBottom: '1px solid #e0e0e0',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.06)',
        // backgroundColor: '#edeff4', // Same bg color as "Load older messages" on FB
        // hover color: #c4d2e7
    }
};
/*
 pinnedLog={props.pinnedLog}
 onClickPin={props.onClickPin}
 onUnclickPin={props.onUnclickPin}
 */

module.exports = PinnedMessagesList;
