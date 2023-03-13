import { createContext, useContext } from "react";

const UserContext = createContext({
  User: {
    name: "hello",
    email: "hello@gmail.com",
  },
 
});
export default UserContext;
