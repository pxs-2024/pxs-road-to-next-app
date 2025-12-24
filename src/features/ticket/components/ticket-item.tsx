import clsx from "clsx";
import { LucideSquareArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/path";
import { TICKETS_ICONS } from "../constants";
import { Ticket } from "../type";

type TicketItemProps = {
	ticket: Ticket;
	isDetail?: boolean;
};

const TicketItem = (props: TicketItemProps) => {
	const { ticket, isDetail } = props;

	const detailButton = (
		<Button variant="outline" size="icon" asChild>
			<Link href={ticketPath(ticket.id)} className="text-sm">
				<LucideSquareArrowUpRight className="h-4 w-4" />
			</Link>
		</Button>
	);

	return (
		<div
			className={clsx("w-full flex gap-x-1", {
				"max-w-[580px]": isDetail,
				"max-w-[420px]": !isDetail,
			})}
		>
			<Card className="w-full">
				<CardHeader>
					<CardTitle className="flex gap-x-2">
						<span>{TICKETS_ICONS[ticket.status]}</span>
						<span className="truncate">{ticket.title}</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<span
						className={clsx("whitespace-break-spaces", {
							"line-clamp-3": !isDetail,
						})}
					>
						{ticket.content}
					</span>
				</CardContent>
			</Card>
			{isDetail ? null : <div className="flex flex-col gap-y-1">{detailButton}</div>}
		</div>
	);
};

export { TicketItem };
