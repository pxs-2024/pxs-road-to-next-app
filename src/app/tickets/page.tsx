import Link from "next/link";
import { ticketPath } from "@/path";
import { initialTickets } from "../../data";

const TicketsPage = () => {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
				<p className="text-sm text-muted-foreground">All your tickets</p>
			</div>
			<div className="flex-1 flex flex-col items-center gap-y-4">
				{initialTickets.map((ticket) => {
					return (
						<div key={ticket.id} className="w-full max-w-[420px] p-4 border border-slate-100 rounded">
							<h3 className="text-lg font-semibold truncate">{ticket.title}</h3>
							<p className="text-sm text-slate-500 truncate">{ticket.content}</p>
							<Link href={ticketPath(ticket.id)} className="text-sm underline">
								View
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TicketsPage;
