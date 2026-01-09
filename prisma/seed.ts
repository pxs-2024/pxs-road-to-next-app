import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const prisma = new PrismaClient();

const tickets = [
	{
		title: "工单1",
		content: "这是第一个工单 from seed",
		status: "DONE" as const,
		deadline: new Date().toISOString().split("T")[0],
		bounty: 499,
	},
	{
		title: "工单2",
		content: "这是第二个工单",
		status: "OPEN" as const,
		deadline: new Date().toISOString().split("T")[0],
		bounty: 499,
	},
	{
		title: "工单3",
		content: "这是第三个工单",
		status: "DONE" as const,
		deadline: new Date().toISOString().split("T")[0],
		bounty: 499,
	},
];

const seed = async () => {
	const t0 = performance.now();
	console.log("DB Seed: Started ...");

	await prisma.ticket.deleteMany();

	await prisma.ticket.createMany({
		data: tickets,
	});

	const t1 = performance.now();
	console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed();
