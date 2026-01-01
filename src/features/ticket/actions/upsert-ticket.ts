"use server";

import prisma from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/path";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertTicket = async (id: string | undefined, formData: FormData) => {
	console.log(id,'>>>>id')
	const data = {
		title: formData.get("title") as string,
		content: formData.get("content") as string,
	};

	await prisma.ticket.upsert({
		where: {
			id: id || "",
		},
		update: data,
		create: data,
	});

	revalidatePath(ticketsPath());

	if (id) {
		redirect(ticketPath(id));
	}
};
