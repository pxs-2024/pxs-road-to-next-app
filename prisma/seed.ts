import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client';
import { TicketCreateManyInput } from '@/generated/prisma/models';

const prisma = new PrismaClient();

const tickets = [
  {
    title: '工单1',
    content: '这是第一个工单 from seed',
    status: 'DONE' as const,
  },
  {
    title: '工单2',
    content: '这是第二个工单',
    status: 'OPEN' as const,
  },
  {
    title: '工单3',
    content: '这是第三个工单',
    status: 'DONE' as const,
  },
];

const seed = async() => {
  const t0 = performance.now();
  console.log('DB Seed: Started ...');

  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets as TicketCreateManyInput[],
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};

seed();
