import axios from "axios";
import { createListFailure, createListStart, createListSuccess, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess, updateListFailure, updateListStart, updateListSuccess } from "./ListActions"
import { api } from "../../api";


export const getLists = async(dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get(`${api}/lists`,{
            headers : {
                token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        }) 
        dispatch(getListsSuccess(res.data));
    } catch (error) {
        dispatch(getListsFailure());
    }
}

export const createList = async(list,dispatch) => {
   dispatch(createListStart());
   try {
     const res = await axios.post(`${api}/lists/create-list`,list,{
        headers : {
            token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
        }
     })
     dispatch(createListSuccess(res.data));
   } catch (error) {
    dispatch(createListFailure());
   }
}

export const updateList = async(list,dispatch) =>{
  dispatch(updateListStart());
  try {
    const res = await axios.put(`${api}/lists/${list._id}`,list,{
        headers : {
            token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
        }
    })
    dispatch(updateListSuccess(res.data));
  } catch (error) {
    dispatch(updateListFailure())
  }
}

export const deleteList = async(id,dispatch) =>{
    dispatch(deleteListStart());
    try {
        await axios.delete(`${api}/lists/${id}`,{
            headers : {
                token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        })
        dispatch(deleteListSuccess(id));
    } catch (error) {
        dispatch(deleteListFailure());
    }
}