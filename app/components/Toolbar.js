var React = require('react');

function Toolbar() {
    return (
        <div>
            <button>+ New Message</button>
            <button><img src="./app/data/images/icon-video.png"/></button>
            <button><img src="./app/data/images/icon-actions.png"/></button>
            <button> <img src="./app/data/images/icon-search.png"/> </button>
        </div>
    )
}

module.exports = Toolbar;
