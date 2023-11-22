import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from "react-chat-engine-advanced"

const ChatsPage=(props)=>{
    const chatProps = useMultiChatLogic('add206e2-f71f-43c7-a1f6-aa29de05effc',props.user.username,props.user.secret)
    return <div style={{height:"100vh"}}>
        <MultiChatSocket{...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
}    

export default ChatsPage