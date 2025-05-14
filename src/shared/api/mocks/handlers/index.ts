import { authHandlers } from "./auth";
import { boardsHandlers } from "./boards";

export const handlers = [...boardsHandlers, ...authHandlers];
