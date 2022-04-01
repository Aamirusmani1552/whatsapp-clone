import { createContext, useState } from "react";

export const activeContext = createContext(null);

const ActiveChatContext = ({children})=>{
    const [activeChat, setActiveChat] = useState(null)
    const [conversationId, setConversationId] = useState(null)
    const [msgs,setMsgs] = useState(null);
    return(
        <activeContext.Provider value={{
            activeChat,
            setActiveChat,
            conversationId,
            setConversationId,
            msgs,
            setMsgs,
        }}>
            {children}
        </activeContext.Provider>
    )
}

export default ActiveChatContext;