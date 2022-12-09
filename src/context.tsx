import { createContext, ReactNode, useState, useEffect } from "react";


type UserContextType = {
    red: number;
    setRed: (newState: number) => void;
    blue: number
    setBlue: (newState: number) => void;
    green: number
    setGreen: (newState: number) => void;

}

type UserContextProps = {
    children: ReactNode;
}

const initialValue = {
    red: 100,
    blue: 100,
    green: 100,
    setRed: () => {},
    setBlue: () => {},
    setGreen: () => {},
}



export const UserContext = createContext<UserContextType>(initialValue)

export const UserContextProvider = ({children}: UserContextProps) => {

   
    const [red, setRed] = useState(initialValue.red)
    const [blue, setBlue] = useState(initialValue.blue)
    const [green, setGreen] = useState(initialValue.green)

   

    return(
        <UserContext.Provider value={{red, setRed, blue, setBlue, green, setGreen}}>{children}</UserContext.Provider>
    )
}