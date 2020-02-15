import { Notification } from "rsuite"
const sendNote = () =>{
    Notification.success({
        title: "Welcome to our communite",
        placement:"topEnd",
        description: "create your profile and connect with another developers"
    });
}


export default sendNote;