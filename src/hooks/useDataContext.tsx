import { createContext, useContext } from "react"
import JsonData from "../types/data";

export const DataContext = createContext(undefined)
const useDataContext = () => useContext<JsonData>(DataContext)

export default useDataContext