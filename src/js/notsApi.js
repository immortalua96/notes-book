import axios from "axios";
const BASE_URL = 'https://64608ee7ca2d89f7e75a6688.mockapi.io'
async function getNotes() {
   try {
    const response = await axios.get(`${BASE_URL}/users`)
  return response.data
   } catch (error) {
    console.log(error);
   }
} 
async function deleteNote(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${id}`
    )
    return response
  } catch (error) {
    console.log(error);
  }
  
}
async function addNote(data) {
  try {
    const response = await axios.post(`${BASE_URL}/users`,data)
  return response.data
  } catch (error) {
    console.log(error);
  }
  
}
export const notsApi = {getNotes,deleteNote,addNote}