export type NavItem = {
	title: string;
	href: string;
	separator?: boolean;
	icon: React.ReactElement<{ className: string }>;
};
