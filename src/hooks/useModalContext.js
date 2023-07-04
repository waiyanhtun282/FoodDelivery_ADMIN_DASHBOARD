import { useContext } from "react"
import { modalContext } from "../context/modalContext"

export const useModalContext=()=>{
    return useContext(modalContext);
}