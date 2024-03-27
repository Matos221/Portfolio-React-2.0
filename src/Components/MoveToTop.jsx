import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const MoveToTop = () => {
        const path = useLocation()
        
        useEffect( () => {
                window.scrollTo(0,0)

        }, [path])
}
