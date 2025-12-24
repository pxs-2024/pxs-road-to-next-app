export type Ticket = {
	title: string;
	status: "DONE" | "OPEN" | "IN_PROGRESS";
	content: string;
	id: string;
};
