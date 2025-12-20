import Link from "next/link";
import { ticketsPath } from "@/path";

const HomePage = () => {
	return (
		<div>
			<h1 className="text-lg"> Home Page !!!!</h1>
			<Link href={ticketsPath()} className="underline">
				Go to Tickets
			</Link>
		</div>
	);
};

export default HomePage;
