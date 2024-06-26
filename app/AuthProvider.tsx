"use client";

import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  // This will allow any child components below this to access the user
  return <SessionProvider>{children}</SessionProvider>;
}
