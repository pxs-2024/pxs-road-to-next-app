"use client";
import { FiledError } from "@/components/form/filed-error";
import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma/client";
import { Label } from "@radix-ui/react-label";
import { useActionState, useEffect } from "react";
import { upsertTicket } from "../actions/upsert-ticket";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { useActionFeedback } from "@/components/form/hooks/use-action-feedback";
import { toast } from "sonner";
import { Form } from "@/components/form/form";

type TicketUpsertFormProps = {
	ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
	const [actionState, action] = useActionState(
		upsertTicket.bind(null, ticket?.id),
		EMPTY_ACTION_STATE
	);

	return (
		<Form action={action} actionState={actionState}>
			<Label htmlFor="title">Title</Label>
			<Input
				id="title"
				name="title"
				type="text"
				defaultValue={(actionState.payload?.get("title") as string) ?? ticket?.title}
			/>
			<FiledError actionState={actionState} name="title" />

			<Label htmlFor="content">Content</Label>
			<Textarea
				id="content"
				name="content"
				defaultValue={(actionState.payload?.get("content") as string) ?? ticket?.content}
			/>
			<FiledError actionState={actionState} name="content" />

			<SubmitButton label={ticket ? "Update" : "Create"} />
		</Form>
	);
};

export { TicketUpsertForm };
