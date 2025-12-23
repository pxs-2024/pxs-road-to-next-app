import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";
import Link from "next/link";
import { Heading } from "@/components/heading";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ticketPath } from "@/path";
import { initialTickets } from "../../data";

const TICKETS_ICONS = {
	OPEN: <LucideFileText />,
	IN_PROGRESS: <LucidePencil />,
	DONE: <LucideCircleCheck />,
};

const TicketsPage = () => {
	return (
		<div className="flex-1 flex flex-col gap-y-8">
			<Heading title="TicketsPage" description="All your tickets" />
			<div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top">
				{initialTickets.map((ticket) => {
					return (
						<Card key={ticket.id} className="w-full max-w-[420px]">
							<CardHeader>
								<CardTitle className="flex gap-x-2">
									<span>{TICKETS_ICONS[ticket.status]}</span>
									<span className="truncate">{ticket.title}</span>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<span className="line-clamp-3 whitespace-break-spaces">{ticket.content}</span>
							</CardContent>
							<CardFooter>
								<Link href={ticketPath(ticket.id)} className="text-sm underline">
									View
								</Link>
							</CardFooter>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default TicketsPage;
