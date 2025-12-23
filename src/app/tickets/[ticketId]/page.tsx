"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/path";

type TicketPageParams = { 
	ticketId: string;
};

const TicketPage = () => {
	const params = useParams<TicketPageParams>();

	const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);

	if (!ticket) {
		return <Placeholder label="Ticket not found" button={
			<Button asChild variant={"outline"}>
				<Link href={ticketsPath()}>Go back to tickets</Link>
			</Button>
		}/>;
	}

	return (
		<div>
			<h2 className="text-lg">{ticket.title}</h2>
			<p className="text-sm">{ticket.content}</p>
		</div>
	);
};

export default TicketPage;
