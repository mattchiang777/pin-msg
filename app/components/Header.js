var React = require('react');
var Toolbar = require('./Toolbar');

function Header() {
    return (
        <div style={styles.header}>
            <h2 style={styles.respondent}>Albert Hu</h2>
            <Toolbar />
        </div>
    )
}

var styles = {
    header: {
        width: '461px',
        borderBottom: '1px solid #e0e0e0',
        fontFamily: 'helvetica, arial, sans-serif',
        fontSize: '12px',
        color: '#141823',
        margin: '0px',
        padding: '18px 19px 18px 22px'
    },
    respondent: {
        maxWidth: '200px',
        fontSize: '16px',
        fontFamily: 'Helvetica-Bold',
        fontWeight: '400',
        display: 'inline-block',
        lineHeight: '24px',
        textOverflow: 'ellipsis',
        // vertical-align: 'middle',
        color: '#333',
        margin: '0px',
    },
    toolbar: {
        padding: '19px 20px 0px 0px',
        position: 'relative',
        float: 'right',
        boxShadow: '0px 1px 1px rgba(0, 0, 0, .05)',
        display: 'inline-block',
        // vertical-align: 'middle',
        borderColor: '#ced0d4',
        color: '#4b4f56',
        background: '#f6f7f9',
        lineHeight: '22px',

    }
};

module.exports = Header;
