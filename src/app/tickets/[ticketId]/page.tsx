import Link from "next/link";
import { notFound } from "next/navigation";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { getTicket } from "@/features/queries/get-ticket";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { ticketsPath } from "@/path";

type TicketPageProps = {
	params: {
		ticketId: string;
	};
};

const TicketPage = async ({ params }: TicketPageProps) => {
	const { ticketId } = await params;
	const ticket = await getTicket(ticketId);

	// const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);

	if (!ticket) {
		// return (
		// 	<Placeholder
		// 		label="Ticket not found"
		// 		button={
		// 			<Button asChild variant={"outline"}>
		// 				<Link href={ticketsPath()}>Go back to tickets</Link>
		// 			</Button>
		// 		}
		// 	/>
		// );
		notFound();
	}

	return (
		<div className="flex justify-center animate-fade-in-from-top">
			<TicketItem ticket={ticket} isDetail></TicketItem>
		</div>
	);
};

export default TicketPage;
