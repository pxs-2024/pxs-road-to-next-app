import { ZodError } from "zod";

export type ActionState = { message: string; payload?: FormData };

export const fromErrorToActionState = (error: unknown, formData: FormData): ActionState => {
	if (error instanceof ZodError) {
		// zod验证错误
		return {
			message: error.issues[0].message,
			payload: formData,
		};
	} else if (error instanceof Error) {
		// 数据库操作错误
		return {
			message: error.message,
			payload: formData,
		};
	} else {
		// 未知错误
		return { message: "An unknown error occured", payload: formData };
	}
};
