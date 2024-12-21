import { createContext, useState } from "react";
import { SpeedType } from "../utils/types";

interface speedContextInterface {
    speed: SpeedType
    setSpeed: (speed: SpeedType) => void
}

export const SpeedContext = createContext<speedContextInterface | undefined>(undefined);

export const SpeedProvider = ({children}: {children: React.ReactNode}) => {
    const [speed, setSpeed] = useState<SpeedType>(0.5);

    return (
        <SpeedContext.Provider value = {{speed, setSpeed}}>
            {children}
        </SpeedContext.Provider>
    )
}