import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  // session: {
  //   strategy: 'jwt',
  // },
  secret: process.env.NEXTAUTH_SECRET,
  // We are using GithubProvider here for signing in, could use any that is available with next-auth
  // Before adding PrismaAdapter our user authentication system didn't persist user data, with the PrismaAdapter the session data will be stored in the Session table in the database
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    //   CredentialsProvider({
    //     name: 'as Guest',
    //     credentials: {},
    //     async authorize(credentials) {
    //       const user = {
    //         id: Math.random().toString(),
    //         name: 'Guest',
    //         email: 'guest@example.com',
    //       };
    //       return user;
    //     },
    //   }),
    // ],
    // callbacks: {
    //   async signIn({ user }) {
    //     // block signin if necessary
    //     return true;
    //   }
    // },
  ],
};
