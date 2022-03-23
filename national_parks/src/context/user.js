import React, {useState} from "react";

const UserContext = React.createContext()

function UserProvider({children}) {
    const currentUser = {
        id: "1",
        email: "xxx",
        parkCodes: ["afbg","abli"],
      };
      
    const [user, setUser] = useState(currentUser)
    console.log("context", user)
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}



export {UserContext, UserProvider}