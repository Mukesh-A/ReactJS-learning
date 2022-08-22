import React, { useContext } from "react";

//in parameter we can leave empty or add sm value to b default value which no other value passed from app.js
const UserContext = React.createContext("Raj kumar")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserConsumer, UserProvider}
export default UserContext 