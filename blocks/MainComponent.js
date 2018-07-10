const Chatblocks = require("chatblocks");
const {Component, Text, QuickReplies, QuickReply} = Chatblocks;

const {TextResponses} = require('./TextResponses');
const {Menu} = require('./Menu');
const {Reservation} = require('./Reservation');

class MainComponent extends Component {
    async render(event) { // event is available in main block only.
        // It can be passed down with props

        // It would be more readable to parse payload before rendering
        // For demo purposes, it's totally fine to do it here
        if (event.postback) {
            switch (event.postback.payload) {
                case "MENU":
                    return <Menu />;
                    break;
                case "RESERVATION":
                    return <Reservation />;
                    break;
            }
        }

        if (event.message) {
            if (event.message.quick_reply) {
                switch (event.message.quick_reply.payload) {
                    case "MENU":
                        return <Menu />;
                        break;
                    case "RESERVATION":
                        return <Reservation />;
                        break;
                }
            }

            if (event.message.text) {
                // Note that better practice is to keep AI / NLP away from here
                // Use props to pass data to other components
                return <TextResponses query={event.message.text}/>
            }
        }

        // default response to random payload
        // QuickReplies can work with ButtonTemplate and GenericTemplate too
        return <Text>
            How can we help you?
            <QuickReplies>
                <QuickReply payload="MENU">Menu</QuickReply>
                <QuickReply payload="RESERVATION">Reservation</QuickReply>
            </QuickReplies>
        </Text>
    }
}

module.exports = MainComponent;