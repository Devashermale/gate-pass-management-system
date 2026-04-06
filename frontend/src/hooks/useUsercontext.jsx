import { useContext } from "react";
import { UserContext } from "../context/Usercontext";
export const useUserContext =()=>{
    const context = useContext(UserContext)
    if(!context){
        throw Error('useWorkout must be used inside a WorkoutsContextProvider')
    }
    return context

}
export default useUserContext