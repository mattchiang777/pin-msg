/* Test static (no styling yet) components in the container first:

X    1. ContactsContainer (unnecessary)

X    2. ConversationContainer
X    3. Header
X    4. ToolBar
X    5. NewMessage
X    6. VideoCall
X    7. Actions
X    8. Search
X    9. MessageText
X    11. Message (date and time changes cause hover changes state so it causes a re-render)
X    12. Pin[Icon]
X    13. SendMessageContainer and SendMessage (still need presentational container despite X)
X    14. ViewPinnedMessages (combine with 15)
    15. PinnedMessages (toolbar solution) (combine with 14 as ViewPinnedMessages)
X    16. PinnedMessagesList
    17. RemoveIcon (the 'x')
    18. RemovePinnedMessageAlert

 */

var React = require('react');
var ConversationContainer = require('../containers/ConversationContainer');

function Container() {
    return (
        <div>
            <ConversationContainer />
        </div>
    )
}

module.exports = Container;
