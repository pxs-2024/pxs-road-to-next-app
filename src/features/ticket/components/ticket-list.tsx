import { getTickets } from "@/features/ticket/queries/get-tickets";
import { TicketItem } from "./ticket-item";
import { TicketSearchInput } from "./ticket-search-input";
import { ParsedSearchParams } from "../search-params";

type TicketListProps = {
	userId?: string;
	searchParams: ParsedSearchParams;
};

const TicketList = async ({ userId, searchParams }: TicketListProps) => {
	const { list: tickets, metadata: ticketMetadata } = await getTickets(userId, searchParams);

	return (
		<div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
			<div className="w-full max-w-[420px] flex gap-x-2">
				<TicketSearchInput placeholder="Search tickets ..." />
			</div>

			{tickets.map((ticket) => {
				return <TicketItem key={ticket.id} ticket={ticket} />;
			})}
		</div>
	);
};
export { TicketList };
