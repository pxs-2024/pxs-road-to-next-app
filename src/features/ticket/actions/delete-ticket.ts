"use server"

import { redirect } from "next/navigation";
import { ticketsPath } from "@/path";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteTicket = async (id: string) => {
	await prisma.ticket.delete({
		where: { id },
	});

	revalidatePath(ticketsPath());
	redirect(ticketsPath());
};
