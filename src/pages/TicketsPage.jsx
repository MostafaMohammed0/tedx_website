import React, { useState } from "react";
import TicketList from "../components/TicketList";
import TicketForm from "../components/TicketForm";

const TicketsPage = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1>Tickets</h1>
      <TicketForm onTicketUpdated={() => setRefresh(!refresh)} />
      <TicketList key={refresh} />
    </div>
  );
};

export default TicketsPage;
