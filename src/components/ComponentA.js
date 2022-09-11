import { Contact } from "../models/contact.class";
import { useState } from "react";
import ComponentB from "./ComponentB";


const ComponentA = () => {
    const [online, setOnline] = useState(false)
    const contact = new Contact('Sandro', 'Arturo', 'arturosimonore@gmail.com', online )
    
    const changeStatus = () => {
        setOnline(previous => !previous)
    }
        
    return (
        <ComponentB contact = {contact} changeStatus={changeStatus} />
    )
}

export default ComponentA;