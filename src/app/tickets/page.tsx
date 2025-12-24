import { Heading } from "@/components/heading";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { initialTickets } from "../../data";


const TicketsPage = () => {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<Heading title="TicketsPage" description="All your tickets" />
			<div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
				{initialTickets.map((ticket) => {
					return <TicketItem key={ticket.id} ticket={ticket} />;
				})}
			</div>
		</div>
	);
};

export default TicketsPage;
