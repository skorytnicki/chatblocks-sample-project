const Chatblocks = require("chatblocks");
const {Component, Block, Text, ButtonTemplate, Button} = Chatblocks;

class Reservation extends Component {
    async render() {
        // Block is used to wrap few elements. Think of React.Fragment
        return <Block>
            <Text>Great!</Text>
            <Text>Unfortunately, this is fake restaurant.</Text>
            <Text>And it's just a demo chatbot</Text>
            <ButtonTemplate text="Click below to see other stuff!">
                <Button url="http://chatblocks.net">Sample link</Button>
                <Button payload="MENU">Sample button</Button>
            </ButtonTemplate>
        </Block>
    }
}

module.exports = {Reservation};