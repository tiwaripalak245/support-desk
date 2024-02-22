import axios from 'axios'

const API_URL = '/api/ticket'

const viewNotes = async(id, token) => {
    const option = {
        headers: {
            Authorization : `Bearer ${token}`
            }
        }
    const response = await axios.get(`${API_URL}/${id}/note`, option)

    return response.data
    
    }

    const makeNotes = async(id, token) => {
        const option = {
            headers: {
                Authorization : `Bearer ${token}`
                }
            }
        const response = await axios.get(`${API_URL}/${id}/note`, option)
    
        return response.data
        
        }


const noteService = {
    viewNotes,
    makeNotes
 }

 export default noteService