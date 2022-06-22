import axios from "axios"
import { errorUser, startUser, successUser } from "./userSlice"

export const addUsser = async (user , dispatch) =>{
    dispatch(startUser())

    try{

        const res = await axios.post("http://localhost:5000/api/users",user);
        dispatch(successUser(res.data))

    }catch(error){
        dispatch(errorUser())
        console.log(error);
    }
}