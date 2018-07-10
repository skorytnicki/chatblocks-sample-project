const Chatblocks = require("chatblocks");
const {Component, Text, QuickReplies, QuickReply} = Chatblocks;

class TextResponses extends Component {
    async render() {
        const query = this.props.query.toLowerCase();
        if (query.includes('hi') || query.includes('hello')) {
            return <Text>Hello there!</Text>
        }

        if (query.includes('pasta') || query.includes('pizza')) {
            return <Text>P A S T A!</Text>
        }

        return <Text>
            How can we help you?
            <QuickReplies>
                <QuickReply payload="MENU">Menu</QuickReply>
                <QuickReply payload="RESERVATION">Reservation</QuickReply>
            </QuickReplies>
        </Text>
    }
}

module.exports = {TextResponses};