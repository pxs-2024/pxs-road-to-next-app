import { Heading } from "@/components/heading";
import { RedirectToast } from "@/components/redirect-toast";
import { Spinner } from "@/components/spinner";
import { CardCompact } from "@/components/ui/card-compact";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { Suspense } from "react";

const TicketsPage = () => {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<Heading title="TicketsPage" description="All your tickets" />

			<CardCompact
				title="Create Ticket"
				description="A new Ticket will be created"
				content={<TicketUpsertForm />}
				className="w-full max-w-[420px] self-center"
			/>

			<Suspense fallback={<Spinner />}>
				<TicketList />
			</Suspense>
		</div>
	);
};

export default TicketsPage;
