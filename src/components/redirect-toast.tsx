"use client";

import { deleteCookieByKey, getCookieByKey } from "@/actions/cookies";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const RedirectToast = () => {
	const pathName = usePathname();

	useEffect(() => {
		// todo 有cookie toast
		(async () => {
			const message = await getCookieByKey("toast");
			if (message) {
				toast.success(message);
				await deleteCookieByKey("toast");
			}
		})();
	}, [pathName]);

	return null;
};

export { RedirectToast };
