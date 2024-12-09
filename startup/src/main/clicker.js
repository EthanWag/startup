export default class clickerObj {
    events = [];
    handlers = [];

    constructor(htmlElement) {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = () => {
            console.log('I am connected');
        };
        this.socket.onclose = () => {
            console.log('I am disconnected');
        }

        this.socket.onmessage = (event) => {
            // right here connect this to the button so when it is clicked it adds 1 to the clicker count
            if (htmlElement.current) {
            htmlElement.current.innerText = event.data;
            }
        };
    }

    buttonClick() {
        this.socket.send('button clicked')
    }
}
