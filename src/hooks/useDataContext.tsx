import { createContext, useContext } from "react"
import JsonData from "../types/data";

// use context to deliver the data throughout the app
export const DataContext = createContext(undefined)
const useDataContext = () => useContext<JsonData>(DataContext)

export default useDataContext