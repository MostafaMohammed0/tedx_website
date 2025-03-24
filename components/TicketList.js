import useSWR from "swr";
import { getTickets } from "../services/apiService";
import React, { useMemo } from "react";

const fetcher = async (url) => {
  const response = await getTickets();
  localStorage.setItem("tickets", JSON.stringify(response));
  return response;
};

const MemoizedTicketList = React.memo(({ tickets }) => {
  return useMemo(
    () => (
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>{ticket.title}</li>
        ))}
      </ul>
    ),
    [tickets]
  );
});

const TicketList = () => {
  const { data: tickets, error } = useSWR("tickets", fetcher, { revalidateOnFocus: false });

  if (!tickets) return <p>Loading tickets...</p>;
  if (error) return <p>Failed to load tickets.</p>;

  return (
    <div>
      <h2>Tickets</h2>
      <MemoizedTicketList tickets={tickets} />
    </div>
  );
};

export default TicketList;
