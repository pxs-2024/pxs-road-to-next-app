'use server';

import { redirect } from 'next/navigation';
import { ticketsPath } from '@/paths';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { setCookieByKey } from '@/actions/cookies';

export const deleteTicket = async(id: string) => {
  await prisma.ticket.delete({
    where: { id },
  });

  revalidatePath(ticketsPath());
  await setCookieByKey('toast', 'Ticket deleted');
  redirect(ticketsPath());
};
