import { use } from "react";

type TicketPageProps = {
	params: {
		ticketId: string;
	};
};

const TicketPage =  ({ params }: TicketPageProps) => {
	const { ticketId } = use(params);

	return <h1 className="text-lg">Ticket Page{ticketId} </h1>;
};

export default TicketPage;
