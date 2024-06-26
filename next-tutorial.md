# Next.js and PocketBase Integration

## PocketBase Overview

- [PocketBase](https://pocketbase.io/): A simple backend solution for side projects and basic production projects.
- **Credentials**:
  - **Email**: klemenpavlovic@gmail.com
  - **Password**: pupica1234

## Directory and Routing

- **Dynamic Routes**: Directory names wrapped in square brackets `[]` indicate a dynamic route.
- **Ignored Directories**: Directories wrapped in parentheses `()` are ignored by the routing system. Useful for placing files without affecting the URL structure.
  - Example: `(shop) => account => page.js` results in the URL `/account`, excluding the `shop` part.

## Special Reserved File Names

- `page.tsx`: Defines the unique UI of a route and is required for the path to be accessible.
- `layout.tsx`: Defines shared UI across multiple pages. Can nest layouts to create nested routes.
- `loading.tsx`: (Optional) Creates a loading UI for a specific part of an app, wrapping a page or layout in a React Suspense Boundary.
- `error.tsx`: (Optional) Isolates errors to specific parts of an app, automatically wrapping a page or child layout in a React Error Boundary.
- `template.tsx`: (Optional) Similar to layouts but mounts a new instance on navigation, useful for enter/exit animations.
- `head.tsx`: (Optional) Defines the contents of the `<head>` tag for a given route.

## Additional Tips

- **Turbo Pack**: Add the `--turbo` flag to scripts in `package.json` to use Next.js with Turbopack (experimental feature).
- **Server Components**: In Next.js 13, all components are server components by default, allowing data fetching directly inside them with `async/await`.
- Check **notes** folder for additional tutorial code, with added comments

## Code Example: Creating a Note

```typescript
"use client";
// "use client" at the top tells Next not to render it on the Server, only in the Browser

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const create = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the form from submitting normally

    console.log("Creating note with title:", title, "and content:", content);

    try {
      const response = await fetch(
        "http://127.0.0.1:8090/api/collections/notes/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            content,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      console.log("Note created successfully:", await response.json());

      setContent("");
      setTitle("");

      // Uncomment the following line if you want to refresh the router
      // router.refresh();
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  );
}
```
