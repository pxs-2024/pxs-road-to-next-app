import Link from "next/link";
import { ticketPath } from "@/path";
import { initialTickets } from "../../data";

const TicketsPage = () => {
	return (
		<div>
			{initialTickets.map((ticket) => {
				return (
					<div className="text-lg" key={ticket.id}>
						<h2>{ticket.title}</h2>
						<Link href={ticketPath(ticket.id)} className="text-sm underline">
							View
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default TicketsPage;
