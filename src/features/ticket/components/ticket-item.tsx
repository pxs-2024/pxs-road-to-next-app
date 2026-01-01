"use client";

import clsx from "clsx";
import { LucidePencil, LucideSquareArrowUpRight, LucideTrash } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { ticketEditPath, ticketPath } from "@/path";
import { TICKETS_ICONS } from "../constants";
import { deleteTicket } from "../actions/delete-ticket";

type TicketItemProps = {
	ticket: Ticket;
	isDetail?: boolean;
};

const TicketItem = (props: TicketItemProps) => {
	const { ticket, isDetail } = props;

	const detailButton = (
		<Button variant="outline" size="icon" asChild>
			<Link prefetch href={ticketPath(ticket.id)} className="text-sm">
				<LucideSquareArrowUpRight className="h-4 w-4" />
			</Link>
		</Button>
	);

	const handleDeleteTicket = async () => {
		await deleteTicket(ticket.id);
	};

	const editButton = (
		<Button variant="outline" size="icon" asChild>
			<Link prefetch href={ticketEditPath(ticket.id)}>
				<LucidePencil className="h-4 w-4" />
			</Link>
		</Button>
	);

	const deleteButton = (
		<Button variant="outline" size="icon" onClick={handleDeleteTicket}>
			<LucideTrash className="h-4 w-4" />
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
			<div className="flex flex-col gap-y-1">
				{isDetail ? (
					<>
						{editButton}
						{deleteButton}
					</>
				) : (
					<>
						{detailButton}
						{editButton}
					</>
				)}
			</div>
		</div>
	);
};

export { TicketItem };
