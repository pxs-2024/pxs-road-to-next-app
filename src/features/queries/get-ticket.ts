// import { initialTickets } from "@/data";
// import { Ticket } from "../ticket/type";
import prisma from "@/lib/prisma";

export const getTicket = async (id: string) => {
	return await prisma.ticket.findUnique({
		where: {
			id,
		},
	});
};
