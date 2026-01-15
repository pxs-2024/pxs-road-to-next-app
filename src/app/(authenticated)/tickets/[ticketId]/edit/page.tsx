import { Breadcrumbs } from "@/components/breacdcrumbs";
import { CardCompact } from "@/components/card-compact";
import { Separator } from "@/components/ui/separator";
import { getAuth } from "@/features/auth/queries/get-auth";
import { isOwner } from "@/features/auth/utils/is-owner";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { homePath, ticketPath } from "@/paths";
import { notFound } from "next/navigation";

type TicketEditPageProps = {
	params: {
		ticketId: string;
	};
};

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
	const { user } = await getAuth();
	const { ticketId } = await params;
	const ticket = await getTicket(ticketId);

	const isTicketFound = !!ticket;
	const isTicketOwner = isOwner(user, ticket);

	if (!isTicketFound || !isTicketOwner) {
		notFound();
	}

	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<Breadcrumbs
				breadcrumbs={[
					{ title: "Tickets", href: homePath() },
					{ title: "Tickets", href: ticketPath(ticket.id) },
					{ title: ticket.title },
				]}
			/>

			<Separator />
			<div className="flex-1 flex flex-col justify-center items-center">
				<CardCompact
					title="Edit Ticket"
					description="Edit an existing ticket"
					className="w-full max-w-[420px] animate-fade-in-from-top"
					content={<TicketUpsertForm ticket={ticket} />}
				/>
			</div>
		</div>
	);
};

export default TicketEditPage;
