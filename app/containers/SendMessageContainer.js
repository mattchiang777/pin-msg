var React = require('react');
var PropTypes = React.PropTypes;

// TODO make the textarea auto resize upon typing
var SendMessageContainer = React.createClass({
    handleClickSend: function() { // holy this is crazy right here, lets me use refs here while using the callback from parent
        userText = this.refs.typeMessageArea.value.replace(/^\s+/, '').replace(/\s+$/, '');
        if (userText !== '') {
            // If the message isn't just made up of white spaces, send the message
            this.clearForm();
            this.props.onClickSend(this);
        }
        this.clearForm();
    },
    handleKeyPress: function(event) {
        userText = this.refs.typeMessageArea.value.replace(/^\s+/, '').replace(/\s+$/, '');
        if (event.key === 'Enter' && userText !== '') {
            event.preventDefault();
            this.clearForm();
            this.props.onPressEnterKey(event);
        }
    },
    clearForm: function() {
        this.refs.typeMessageArea.value = ""; // Clear the form so that the user can type a new message
    },
    render: function() {
        return (
            <div className="clearfix"
                 style={styles.container}>
                    <textarea className="form-control"
                          onChange={this.props.onTextChange}
                          onKeyPress={this.handleKeyPress}
                          ref="typeMessageArea"
                          placeholder="Write a reply..."
                          style={styles.sendMessageBox}>
                    </textarea>
                    <br/>
                    <button className="btn btn-primary pull-right"
                            onClick={this.handleClickSend}>Send</button>
            </div>
        );
    }
});

SendMessageContainer.propTypes = {
    onTextChange: PropTypes.func.isRequired,
    onPressEnterKey: PropTypes.func.isRequired,
    onClickSend: PropTypes.func.isRequired
};

var styles = {
    container: {
        borderTop: '1px solid #cdcecf',
        padding: '0px 19px 35px',
        position: 'relative',
        backgroundColor: '#f6f7f8'
    },
    sendMessageBox: {
        // border: '1px solid #ccc',
        borderRadius: '0px',
        backgroundColor: '#fff',
        fontFamily: 'helvetica, arial, sans-serif',
        fontSize: '12px',
        color: '#141823',
        margin: '15px 0px 0px',
        position: 'relative',
        cursor: 'text',
        padding: '5px 22px 5px 5px',
        maxHeight: '300px'
    }
};

/*
 onTextChange={props.onTextChange}
 onPressEnterKey={props.onPressEnterKey}
 onClickSend={props.onClickSend}
 */

module.exports = SendMessageContainer;
