const Chatblocks = require("chatblocks");
const {Component, Block, Text, Button, QuickReplies, QuickReply, GenericTemplate} = Chatblocks;

class Menu extends Component {
    async render() { // it has to be async. Blocks are promises.
        const firstName = 'Sample User'; // you can make a request to facebook API as well!

        return <Block>
            <Text>{firstName}, are you hungry?</Text>
            <GenericTemplate.GenericTemplate>
                <GenericTemplate.Element>
                    <GenericTemplate.Image url="https://sample.pizzaplace.pl/img.png"/>
                    <GenericTemplate.Title>Prestigious pizza</GenericTemplate.Title>
                    <GenericTemplate.Subtitle>$10.99</GenericTemplate.Subtitle>
                    <Button url="http://chatblocks.net">Order...</Button>
                </GenericTemplate.Element>
                <GenericTemplate.Element>
                    <GenericTemplate.Image url="https://sample.pizzaplace.pl/img.png"/>
                    <GenericTemplate.Title>Perfect pasta</GenericTemplate.Title>
                    <GenericTemplate.Subtitle>$11.99</GenericTemplate.Subtitle>
                    <Button url="http://chatblocks.net">Order...</Button>
                </GenericTemplate.Element>
                <GenericTemplate.Element>
                    <GenericTemplate.Image url="https://sample.pizzaplace.pl/img.png"/>
                    <GenericTemplate.Title>Lazy lasagne</GenericTemplate.Title>
                    <GenericTemplate.Subtitle>$12.99</GenericTemplate.Subtitle>
                    <Button url="http://chatblocks.net">Order...</Button>
                </GenericTemplate.Element>
                <GenericTemplate.Element>
                    <GenericTemplate.Image url="https://sample.pizzaplace.pl/img.png"/>
                    <GenericTemplate.Title>Big bigos</GenericTemplate.Title>
                    <GenericTemplate.Subtitle>$99.99</GenericTemplate.Subtitle>
                    <Button url="http://chatblocks.net">Order...</Button>
                </GenericTemplate.Element>
                <QuickReplies>
                    <QuickReply payload="RESERVATION">Reservation</QuickReply>
                </QuickReplies>
            </GenericTemplate.GenericTemplate>
        </Block>
    }
}

module.exports = {Menu};