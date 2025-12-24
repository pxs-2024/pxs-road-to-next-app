"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { ticketsPath } from "@/path";

type TicketPageParams = {
	ticketId: string;
};

const TicketPage = () => {
	const params = useParams<TicketPageParams>();

	const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);

	if (!ticket) {
		return (
			<Placeholder
				label="Ticket not found"
				button={
					<Button asChild variant={"outline"}>
						<Link href={ticketsPath()}>Go back to tickets</Link>
					</Button>
				}
			/>
		);
	}

	return (
		<div className="flex justify-center animate-fade-in-from-top">
			<TicketItem ticket={ticket} isDetail  ></TicketItem>
		</div>
	);
};

export default TicketPage;
