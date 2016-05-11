var React = require('react');
var pathToVideoIcon = require("url?limit=10000!../data/images/icon-video.png");
var pathToActionsIcon = require("url?limit=10000!../data/images/icon-actions.png");
var pathToSearchIcon = require("url?limit=10000!../data/images/icon-search.png");


// TODO hover darkens and etc. for interactivity
function Toolbar() {
    return (
        <div style={styles.toolbar}>
            <button style={styles.newMsgButton}>
                <span style={styles.newMsgText}>+ New Message</span>
            </button>
            <button style={styles.button}><img src={pathToVideoIcon}
                                               style={styles.image}/></button>
            <button style={styles.button}><img src={pathToActionsIcon}
                                               style={styles.image}/></button>
            <button style={styles.searchButton}><img src={pathToSearchIcon}
                                               style={styles.image}/></button>
        </div>
    )
}

var styles = {
    toolbar: {
        // padding: '19px 20px 0px 0px',
        position: 'relative',
        float: 'right',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, .05)',
        display: 'inline-block',
        // vertical-align: 'middle',
        // borderColor: '#ced0d4',
        color: '#4b4f56',
        // background: '#f6f7f9',
        lineHeight: '22px',

    },
    newMsgButton: {
        width: '110.703px',
        height: '24px',
        background: '#f6f7f9',
        border: '1px solid',
        borderColor: '#ced0d4',
        color: '#4b4f56',
        fontFamily: 'helvetica, arial, sans-serif',
        fontWeight: 'bold',
        borderRadius: '2px 0px 0px 2px'
    },
    newMsgText: {
        bottom: '3px',
        position: 'relative',
        verticalAlign: 'middle'
    },
    button: {
        background: '#f6f7f9',
        width: '30px',
        height: '24px',
        borderStyle: 'solid',
        borderWidth: '1px 1px 1px 0px',
        borderColor: '#ced0d4',
        color: '#4b4f56',
        fontFamily: 'helvetica, arial, sans-serif',
        fontWeight: 'bold'
    },
    searchButton: {
        background: '#f6f7f9',
        width: '30px',
        height: '24px',
        borderStyle: 'solid',
        borderWidth: '1px 1px 1px 0px',
        borderColor: '#ced0d4',
        color: '#4b4f56',
        fontFamily: 'helvetica, arial, sans-serif',
        fontWeight: 'bold',
        borderRadius: '0px 2px 2px 0px'
    },
    image: {
        width: '11px',
        height: '11px',
        bottom: '3px',
        position: 'relative',
        verticalAlign: 'middle'
    }
    // hover: {
    //     backgroundColor: "#e9ebee",
    //     width: '30px',
    //     height: '24px',
    //     borderStyle: 'solid',
    //     borderWidth: '1px 1px 1px 0px',
    //     borderColor: '#ced0d4',
    //     color: '#4b4f56',
    //     fontFamily: 'helvetica, arial, sans-serif',
    //     fontWeight: 'bold'
    //
    // }
};

module.exports = Toolbar;
