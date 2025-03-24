import React, { useState } from "react";
import { createTicket, updateTicket } from "../services/apiService";

const TicketForm = ({ existingTicket, onTicketUpdated }) => {
  const [title, setTitle] = useState(existingTicket?.title || "");
  const [description, setDescription] = useState(existingTicket?.description || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ticketData = { title, description };

    try {
      if (existingTicket) {
        await updateTicket(existingTicket.id, ticketData);
      } else {
        await createTicket(ticketData);
      }
      onTicketUpdated();
    } catch (error) {
      console.error("Error saving ticket:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <button type="submit">{existingTicket ? "Update" : "Create"} Ticket</button>
    </form>
  );
};

export default TicketForm;

