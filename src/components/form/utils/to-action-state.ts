import z, { object, ZodError } from "zod";

export type ActionState = {
	message: string;
	payload?: FormData;
	fieldErrors: Record<string, string[] | undefined>;
};

export const fromErrorToActionState = (error: unknown, formData: FormData): ActionState => {
	if (error instanceof ZodError) {
		// zod验证错误
		console.log(z.treeifyError(error), ">>>>object ");
		return {
			message: error.issues[0].message,
			fieldErrors: error.flatten().fieldErrors,
			payload: formData,
		};
	} else if (error instanceof Error) {
		// 数据库操作错误
		return {
			message: error.message,
			fieldErrors: {},
			payload: formData,
		};
	} else {
		// 未知错误
		return { message: "An unknown error occured", fieldErrors: {}, payload: formData };
	}
};
