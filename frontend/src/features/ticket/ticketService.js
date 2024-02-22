import axios from "axios";

const API_URL = "/api/ticket";

// --------GET ALL TICKET--------------//
const getTicket = async (token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, option);
  return response.data;
};

// -------------GET SINGLE TICKET---------------------//
const fetchSingleTicket = async (id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "/" + id, option);
  return response.data;
};

// ---------------CLOSE SINGLE TICKET----------------------------------//
const closeTicket = async (id, token) => {
    const option = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.put(API_URL + "/" + id, {status: "closed"}, option);
    return response.data;
  };

// ---------------CLOSE SINGLE TICKET----------------------------------//
const createTicket = async(formData, token)=> {
    const option = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, formData, option)
    return response.data
}


//   ------------EXPORT------------------------//
const ticketService = {
  getTicket,
  fetchSingleTicket,
  closeTicket,
  createTicket
};

export default ticketService;
