import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Heading } from "@/components/heading";
import { Placeholder } from "@/components/placeholder";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TicketCreateForm } from "@/features/ticket/components/ticket-create-form";
import { CardCompact } from "@/components/ui/card-compact";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";

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
