import { createContext, useState } from "react";

export const userContext = createContext(null);

const AccountContext = ({children})=>{
    const [user, setUser] = useState();
    const [profile, setProfile] = useState(false);
    const [chats, setChats] = useState([]);
    const [activeChat, setActiveChat] = useState({})
    
    return(
        <userContext.Provider value={{
            user,
            setUser,
            profile,
            setProfile,
            chats,
            setChats,
            activeChat,
            setActiveChat,
        }}>
            {children}
        </userContext.Provider>
    )
}

export default AccountContext;