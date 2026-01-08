"use client";
import { FieldError } from "@/components/form/field-error";
import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@/generated/prisma/client";
import { Label } from "@radix-ui/react-label";
import { useActionState, useEffect, useRef } from "react";
import { upsertTicket } from "../actions/upsert-ticket";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { useActionFeedback } from "@/components/form/hooks/use-action-feedback";
import { toast } from "sonner";
import { Form } from "@/components/form/form";
import { fromCent } from "@/utils/currency";
import { DatePicker, ImperativeHandleFromDatePicker } from "@/components/date-picker";

type TicketUpsertFormProps = {
	ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
	const [actionState, action] = useActionState(
		upsertTicket.bind(null, ticket?.id),
		EMPTY_ACTION_STATE
	);

	const datePickerImperativeHandleRef = useRef<ImperativeHandleFromDatePicker>(null);

	const handleSuccess = () => {
		datePickerImperativeHandleRef.current?.reset();
	};
	return (
		<Form action={action} actionState={actionState} onSuccess={handleSuccess}>
			<Label htmlFor="title">Title</Label>
			<Input
				id="title"
				name="title"
				type="text"
				defaultValue={(actionState.payload?.get("title") as string) ?? ticket?.title}
			/>
			<FieldError actionState={actionState} name="title" />

			<Label htmlFor="content">Content</Label>
			<Textarea
				id="content"
				name="content"
				defaultValue={(actionState.payload?.get("content") as string) ?? ticket?.content}
			/>
			<FieldError actionState={actionState} name="content" />

			<div className="flex gap-x-2 mb-1">
				<div className="w-1/2">
					<Label htmlFor="deadline">Deadline</Label>
					<DatePicker
						id="deadline"
						name="deadline"
						defaultValue={(actionState.payload?.get("deadline") as string) ?? ticket?.deadline}
						imperativeHandleRef={
							datePickerImperativeHandleRef as React.RefObject<ImperativeHandleFromDatePicker>
						}
					/>
					<FieldError actionState={actionState} name="deadline" />
				</div>
				<div className="w-1/2">
					<Label htmlFor="bounty">Bounty ($)</Label>
					<Input
						id="bounty"
						name="bounty"
						type="number"
						step=".01"
						defaultValue={
							(actionState.payload?.get("bounty") as string) ??
							(ticket?.bounty ? fromCent(ticket?.bounty) : "")
						}
					/>
					<FieldError actionState={actionState} name="bounty" />
				</div>
			</div>

			<SubmitButton label={ticket ? "Update" : "Create"} />
		</Form>
	);
};

export { TicketUpsertForm };
