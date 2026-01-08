import { getTicket } from '@/features/queries/get-ticket';
import { TicketItem } from '@/features/ticket/components/ticket-item';
import { notFound } from 'next/navigation';

type TicketPageProps = {
	params: {
		ticketId: string;
	};
};

const TicketPage = async({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={ticket} isDetail></TicketItem>
    </div>
  );
};
// 如何将动态页面生成静态页面
// export async function generateStaticParams() {
// 	const tickets = await getTickets();

// 	return tickets.map((ticket) => ({
// 		ticketId: ticket.id,
// 	}));
// }

export default TicketPage;
