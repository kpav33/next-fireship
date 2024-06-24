// Part of the Next 13 tutorial
// import PocketBase from 'pocketbase';
import Link from "next/link";
import styles from "./Notes.module.css";
import CreateNote from "./CreateNote";

// You can export this variables from a page to change caching behavior, runtime and such, if you are not using fetch...
// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

async function getNotes() {
  // Dont need to use fetch, we could use PocketBase SDK
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');

  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    // Next will automatically cache this route, which means that it is treated as a static page, but we can change that by adding a cache no-store, which will make Next refetch data from the database on every request
    // This is roughly the equivalent of using getServerSideProps in previous Next version
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
