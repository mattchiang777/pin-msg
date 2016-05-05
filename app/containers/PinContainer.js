var React = require('react');

var PinContainer = React.createClass({
    handleClick: function(event) {
        console.log(this.props.text);
    },
    render: function() {
        return (
            <span>
                <img src="./app/data/images/icon-actions.png"
                     />
            </span>
        );
    }
});

module.exports = PinContainer;
