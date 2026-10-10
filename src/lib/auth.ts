import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { Resend } from "resend";

const client = new MongoClient(process.env.MONGODB_URL!);
const db = client.db("bangla-news-24");

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
    },

    emailVerification: {
        sendOnSignUp: true,

        sendVerificationEmail: async ({ user, url }) => {
            const { data, error } = await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: user.email,
                subject: "Verify your email address",
                text: `Click the link to verify your email: ${url}`,
            });

            if (error) {
                console.error("Failed to send verification email:", error);
                throw new Error("Failed to send verification email");
            }

            console.log("Verification email sent:", data.id);
        },
    },

    database: mongodbAdapter(db, {
        client,
    }),
});