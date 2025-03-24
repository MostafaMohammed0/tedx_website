import axios from "axios";
import useSWR from "swr";

const API_URL = "https://your-backend-api.com"; // Replace with your actual backend URL

const fetcher = async (url) => {
  const response = await axios.get(`${API_URL}${url}`);
  return response.data;
};

export const useTickets = () => {
  const { data, error } = useSWR("/tickets", fetcher, { revalidateOnFocus: false });
  return { tickets: data || [], error };
};

export const getTickets = async () => {
  const cachedTickets = localStorage.getItem("tickets");
  if (cachedTickets) return JSON.parse(cachedTickets);

  const response = await axios.get(`${API_URL}/tickets`);
  localStorage.setItem("tickets", JSON.stringify(response.data)); // Save to cache
  return response.data;
};

export const getTicketById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/tickets/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ticket ${id}:`, error);
    throw error;
  }
};

export const createTicket = async (ticketData, setTickets) => {
  try {
    const response = await axios.post(`${API_URL}/tickets`, ticketData);
    localStorage.removeItem("tickets"); // Invalidate cache
    setTickets(prev => [...prev, response.data]); // Efficient state update
    return response.data;
  } catch (error) {
    console.error("Error creating ticket:", error);
    throw error;
  }
};

export const updateTicket = async (id, ticketData, setTickets) => {
  try {
    const response = await axios.put(`${API_URL}/tickets/${id}`, ticketData);
    localStorage.removeItem("tickets"); // Invalidate cache
    setTickets(prev => prev.map(ticket => ticket.id === id ? response.data : ticket));
    return response.data;
  } catch (error) {
    console.error(`Error updating ticket ${id}:`, error);
    throw error;
  }
};

export const deleteTicket = async (id, setTickets) => {
  try {
    await axios.delete(`${API_URL}/tickets/${id}`);
    localStorage.removeItem("tickets"); // Invalidate cache
    setTickets(prev => prev.filter(ticket => ticket.id !== id));
  } catch (error) {
    console.error(`Error deleting ticket ${id}:`, error);
    throw error;
  }
};
