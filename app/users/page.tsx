import UserCard from "@/components/UserCard/UserCard";
import styles from "./page.module.css";
import { prisma } from "@/lib/prisma";

export default async function Users() {
  // Try out if the error component is working properly
  // throw new Error("This is an error!");
  const users = await prisma.user.findMany();

  return (
    <div className={styles.grid}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />;
        // return <div>Hello</div>;
      })}
    </div>
  );
}
