import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "@/lib/auth-client";

export const { GET, POST } = toNextJsHandler(auth.handler);
