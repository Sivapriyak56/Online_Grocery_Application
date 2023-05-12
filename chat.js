import ChatBot from 'react-simple-chatbot';
 
const steps = [
    {
        id: '0',
        message: 'Hey Geek!',
        end: true
    }
];
 
function Chat() {
    return (
        <div className="App">
            <h1>Welcome to Geeksforgeeks</h1>
            <ChatBot steps={steps} />
        </div>
    );
}
 
export default Chat;