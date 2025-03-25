import { serverUrl } from "./serverUrl";
import { commonApi } from "./commonApi";

export const uploadTodo = async (reqBody)=>{
    return await commonApi("POST", `${serverUrl}/list`,reqBody);
}

export const getAllTodo= async()=>{
    return await commonApi("GET", `${serverUrl}/list`,'');
}

export const deleteTodo = async (id)=>{
    return await commonApi("DELETE", `${serverUrl}/list/${id}`,'');
}

export const updateTodo = async(id,reqBody)=>{
    return await commonApi("PATCH", `${serverUrl}/list/${id}`,reqBody);
}