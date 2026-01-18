import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuth } from "@/features/auth/queries/get-auth";
import { isOwner } from "@/features/auth/utils/is-owner";
import { ticketEditPath, ticketPath } from "@/paths";
import { toCurrencyFromCent } from "@/utils/currency";
import { Prisma } from "@prisma/client";
import clsx from "clsx";
import { LucideMoreVertical, LucidePencil, LucideSquareArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TICKETS_ICONS } from "../constants";
import { TicketMoreMenu } from "./ticket-more-menu";
import { Comments } from "@/features/comment/components/comments";

type TicketItemProps = {
	ticket: Prisma.TicketGetPayload<{
		include: {
			user: {
				select: {
					username: true;
				};
			};
		};
	}>;
	isDetail?: boolean;
};

const TicketItem = async (props: TicketItemProps) => {
	const { ticket, isDetail } = props;

	const { user } = await getAuth();
	const isTicketOwner = isOwner(user, ticket);
	const detailButton = (
		<Button variant="outline" size="icon" asChild>
			<Link prefetch href={ticketPath(ticket.id)} className="text-sm">
				<LucideSquareArrowUpRight className="h-4 w-4" />
			</Link>
		</Button>
	);

	const editButton = isTicketOwner ? (
		<Button variant="outline" size="icon" asChild>
			<Link prefetch href={ticketEditPath(ticket.id)}>
				<LucidePencil className="h-4 w-4" />
			</Link>
		</Button>
	) : null;

	const moreMenu = isTicketOwner ? (
		<TicketMoreMenu
			trigger={
				<Button variant="outline" size="icon">
					<LucideMoreVertical className="h-4 w-4" />
				</Button>
			}
			ticket={ticket}
		/>
	) : null;

	return (
		<div
			className={clsx("w-full flex-col gap-x-1", {
				"max-w-[580px]": isDetail,
				"max-w-[420px]": !isDetail,
			})}
		>
			<div className="flex gap-x-2">
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
					<CardFooter className="flex justify-between">
						<p className="text-sm text-muted-foreground">
							{ticket.deadline} by {ticket.user.username}
						</p>
						<p className="text-sm text-muted-foreground">{toCurrencyFromCent(ticket.bounty)}</p>
					</CardFooter>
				</Card>
				<div className="flex flex-col gap-y-1">
					{isDetail ? (
						<>
							{editButton}
							{moreMenu}
						</>
					) : (
						<>
							{detailButton}
							{editButton}
						</>
					)}
				</div>
			</div>
			{isDetail && <Comments ticketId={ticket.id} />}
		</div>
	);
};

export { TicketItem };
