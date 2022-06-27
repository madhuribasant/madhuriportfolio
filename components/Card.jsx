import { useGlobalContext } from "./Context"


export const Card = ({style=' w-96 h-96 bg-green-300 p-2 ' ,children}) => {
    
  return (
    <div className={`${style} relative`} >
        {children}
    </div>
  )
}
