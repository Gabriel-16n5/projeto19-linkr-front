import { createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({children}) => {
    const [deleted, setDeleted] = useState(false)
    const [open, setOpen] = useState(false)

return (
    <TimelineContext.Provider value={{deleted, setDeleted, open, setOpen}}>
        {children}
    </TimelineContext.Provider>
)
}