import styles from "../Notes.module.css";

async function getNote(noteId: string) {
  // throw new Error("Error");

  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    // Because this is a dynamic route (brackets [] !), it won't be cached on every request, we can change the caching behavior by using the revalidate property, in this case Next will regenerate the pages on server every 10 seconds
    // Similar to ISR in old Next
    // If you want to prerender this pages, we would export generateStaticParams which is a replacement for getStaticPaths from old Next
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div className={styles.note}>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  );
}
