## App Router

- **Routes Definition**: In Next.js, routes are defined by the file system. Each route segment is a directory with a page component (by default a server component) inside, defining the page's UI.
- **Linking Pages**: Use the `<Link>` component or the `useRouter()` hook to navigate between pages.
- **Dynamic Routes**: Use square brackets `[]` to define dynamic routes. Access route parameters in server components via the `params` object or in client components with the `useParams()` hook.
- **Catch-All Routes**: Use `[...]` before a param name to handle all nested route segments.
- **Route Groups**: Wrapping a folder name in parentheses `()` creates a route group, which doesn't affect the URL but helps organize the code.
- **Parallel Routing**: Use `@` for parallel routing (e.g., `@pro`, `@basic`). This creates a named slot accessed in a parent layout, allowing multiple pages to render on the same route with different slots.
- **Intercepting Routes**: Mark with parentheses and two dots `(..)cart`. This pattern renders the default page for SSR and uses a different page for CSR, useful for displaying modals while maintaining the previous page's state.

## Route Handlers

- **APIs in Next.js**: Based on fetch API's request and response interfaces. These routes typically return JSON objects.
- **Creating API Routes**: Replace `page.tsx` with `route.ts`. Cannot coexist in the same directory as a page file. Export functions corresponding to HTTP methods, each with a request parameter to handle the incoming request and return a response.
- **Server-Side Execution**: API routes run server-side by default in the Node.js runtime. Switch to edge runtime with `export const runtime = "edge";`. Other configuration options include caching.
- **Building RESTful APIs**: Route handlers facilitate building RESTful APIs in Next.js.

## Layouts

- **Shared UI**: Layouts share UI across their child components.
- **Root Layout**: Determines the UI outline for the entire application. Each directory can have an additional layout file.
- **Data Fetching**: Layouts can perform data fetching, useful for sharing data across multiple routes.
- **Route Groups with Layouts**: Combine layouts with route groups to apply layout changes selectively while maintaining default routes for others. Allows multiple root layouts in the same app.
- **Persistent UI**: Layouts maintain UI and state across route changes. Use `template.tsx` instead if re-mounting and state refresh is desired.

## Rendering and SEO

- **Server-Side Rendering (SSR)**: Enhances SEO by rendering websites on the server, making them easier for bots to understand compared to SPAs.
- **Rendering Strategies**: Next.js supports SSR, Static Pre-rendering, ISR, and Client-side rendering.
- **Server Components**: In Next.js 13, all components are server components by default, beneficial for SEO. Mark components as client components using `"use client"` at the top.
- **Dynamic Rendering Options**: Control caching and rendering strategies with `export const dynamic = "auto";`, `force-dynamic`, or `force-static`. Use `revalidate` to regenerate static pages after a specified time.
  - Example:
    ```typescript
    export const dynamic = "auto";
    export const revalidate = 6900;
    ```
- **Metadata**: Export a `metadata` variable for static meta information or use `generateMetadata` function for dynamic meta values.
  - Example:

    ```typescript
    export const metadata = {
      title: "Hello!",
      description: "Hello some more!",
    };

    export async function generateMetadata({ params }: any) {
      return { title: "..." };
    }
    ```

## Data Fetching

- **Server Components**: Access server-side resources directly in layouts and pages.
- **Parallel Fetching**: Fetch requests in nested pages and layouts are performed in parallel, enhancing performance.
- **Automatic Request Deduping**: React's extended fetch API prevents multiple identical fetch calls, optimizing data fetching.
- **Caching Control**: Use the `cache` object with fetch to determine caching strategies (`force-cache`, `no-store`, `revalidate`).
- **Caching Flexibility**: Control caching at both the page and fetch levels for fine-tuning.

## Streaming and Suspense

- **Progressive Loading**: Breaks applications into smaller chunks for faster loading. The framework handles streaming automatically.
- **Loading States**: Simplify code with loading files that manage UI while data loads, eliminating the need for manual loading state tracking.

## Auth.js

- **Passwordless Authentication**: Tools for implementing passwordless authentication in any server environment and modern framework.
- **Universal Database Model**: Connect to any database with a universal model for users, accounts, and sessions, adaptable for any database.

## Prisma

- **ORM Benefits**: Express data with object-oriented code instead of writing SQL. Prisma offers a human-readable schema to express data and relationships or infer from existing databases.
- **Migrations**: Prisma manages migrations as data structures evolve.
- **Prisma Studio**: View and manage tables and rows directly in the browser.
