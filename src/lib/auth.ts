import {db} from "@/drizzle";
import { betterAuth } from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle";

 
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite",
    usePlural: true,
  }),
  basePath: '/auth',
  emailAndPassword: {
    enabled: true,
  },
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL!,
  trustedOrigins: ["sentient://"]
});