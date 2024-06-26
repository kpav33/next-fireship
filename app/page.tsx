import React from "react";

// notes folder is not part of the main app, that is where the basic next tutorial code is
// Also pocketbase is not part of the main app, it was used for the basic next tutorial

// Using npm, not yarn with this app!

// Check notes.md file
// App Router
// In Next.js routes are defined with its file system, every route segment is defined by a directory, with a page component (by default server component) inside of it, which defined the UI of the page.
// You link between pages with a <Link> component or by using the useRouter() hook
// Dynamic routes are defined by using square brackets [], which is used to mark a route parameter, which we can access in the code and then usually use for some sort of database manipulation. It's available in server components params object, or in client components by using useParams() hook.
// A route can have as many params as you need, but if you want to create a catch all route, you can add ... before the param name like so [...id], this would handle all nested route segments.
// Adding parantheses to a folder name (), will create a route group, which has no effect on the actual URL, its just used for structure, so you can organize your code.
// By using @ we can use parallel routing (@pro, @basic...), which creates a named slot, that can be accessed in a parent layout, allowing you to render multiple pages on the same route with different slots. Useful for complex dashboards apps.
// Intercepting routes are marked with parentheses and two dots (..)cart, this pattern will render the default page for server side rendering, but then use an entirely different page for client side rendering. Example is for displaying a modal, while keeping the state of the previous page underneath it.

// Route handlers
// Route handlers are based on the request and response interfaces from the fetch api and are used to create apis in Next.js. This routes don't return apis, but usually just JSON objects.
// You can create an api route by replace page.tsx file with a route.ts file. It can not be used in the same directory as a page file. This file can export one or more functions that have a name that corresponds to HTTP methods. Each function has a request parameter that gives you information about the incoming request and you can return the response to handle the request.
// Api routes will always run server side and are by default executed in the node.js runtime, but you can switch this to an edge runtime by simply exporting the runtime variable => export const runtime = "edge";, there are also other configuration options to configure things like caching.
// Route handlers allow you to build RESTful api's in Next.js.

// Layouts
// Layouts work similarly to pages, with the difference that their UI will be shared will all of their children
// Root layout will determine UI outline for the entire application, but each directory can have additional layout file
// Layout can perform data fetching, which is useful if you want to use the same data on multiple routes
// Layouts can be combined with route groups (basic), to opt in some routes to additional layout changes and keep the default route for the rest
// With route groups, you can also make multiple root layout in the same application
// With layouts their UI and state will persist across route changes, it does not re-render
// If this is not desirable, you can use a template file instead of a layout file, which will re-mount the layout component on each navigation, so state will be refreshed

// Rendering and SEO
// Main reason for using frameworks like Next.js is to handle server side rendering for search engine optimization, because traditionally websites that are rendered on the server are easier for bots to understand (compared to SPAs)
// But with any rendering strategy, there are trade offs, which is why Next.js has multiple ways to render your website (SSR, Static - Prerendering, ISR, Client)
// In Next 13 every component is a Server component by default, which is good for SEO
// If you want to use client side features, you need to use "use client" at the top of the component to mark it as client component
// You should try to mainly have server components and extract any necessary client side logic to separate client components
// Every page has a dynamic option, which you can change and is set to "auto" (page gets cached) by default, if you change it to "force-dynamic" it will behave like SSR, so there will be no caching, or you can use "force-static", which caches the page indefinetly
// export const dynamic = "auto";
// There is also a revalidate options that will allows you to regenerate a static page after some time passes (like ISR)
// export const revalidate = 6900;
// Generally speaking you can let Next.js figure out for you which is best for your use case
// You can also export metadata variable that contains meta information about the page, this can be done in any page or layout file
// export const metadata = { title: "Hello!", description: "Hello some more!" };
// If data is dynamic you can export generateMetaData function to create this values on the fly
// export async function generateMetadata({ params }: any) {
//   return {
//     title: "..."
//   }
// }

// Data fetching
// Because every layout and page is a server component, they can access server side resources like databases and enviroment variables directly
// With nested pages and layouts Next.js performs fetch requests parallel for all files, which leads to better performance
// React extends fetch api to provide automatic request deduping => If you fetch the same data in multiple components Next will automatically keep track of any fetch calls that use the same inputs, so you don't need to worry about making the same fetch call multiple times
// You can also control the caching of fetch by passing it a cache object, to determine how caching should work for the selected fetch call => "force-cache", "no-store" or use revalidate to determine after how long the cache should be updated
// With Next.js you have a lot of options for determining cache both on page level and fetch level, which lets you fine tune your app

// Streaming and Suspense
// To render a webpage there are 5 steps: Fetch data, render server components, send html to the browser, render non-interactive page and execute JavaScript
// This takes some time, which can lead to slow page load, streaming in Next.js works by breaking the application in smaller chunks to load things progressively
// Framework deals with streaming automatically, but you can add loading files to change the UI while the data is being loaded
// This simplifies your code, because you don't have to track any loading state

// Auth.js
// Auth.js provides tools for passwordless authentication and does so in a way so it can run in any server enviroment and be used in any modern framework and can connect to any database
// This is possible, because it provides an universal database model for users, accounts and session that can be adapter for any database

// Prisma
// Relational database is reliable, but writing SQL code can be painful
// To address this concerns ORMs implement Object Relational Mapping to express data with object oriented code
// Prisma allows you to write your schema to express your data and relationships in a human readable way or the schema can be infered from any existing database
// Prisma also handles migrations as your data structure evolves
// You can also use Prisma Studio to view and manage your tables and rows in the browser

export default function Home() {
  return <main>Hello World</main>;
}

// Check next-tutorial.md file
// https://pocketbase.io/ => Simple backend for side projects, could also be a good solution for basic production projects
// Email: klemenpavlovic@gmail.com, Password: pupica1234
// Name of the directory defines the url of the page, when the name is wrapped with square brackets [], it indicates a dynamic route
// In addition directories wrapped with regular parentheses (), which means they will be ignored by the routing system => Useful when you want to place a file somewhere, but don't want it to affect the actual url structure, for example (shop) => account => page.js, here the url would be /account, shop part wouldn't be visible in the url
// To build out the UI, there are many special reserved file names, that we can use in directories:
// - page.tsx => Defines the unique UI of the route. Needed for the path to be accessible.
// - layout.tsx => Used to define UI that is shared across multiple pages. Accepts another layout or a page as child. You can nest layouts to create nested routes.
// - loading.tsx => Optional file used to create loading UI for a specific part of an app, it wraps a page or layout in a React Suspense Boundary, showing the loading component immediately on the first load, when navigation between sibling routes.
// error.tsx => Optional file used to isolate errors to specific parts of an app, automatically wraps a page or child layout in React Error Boundary.
// template.tsx => Optional file, similar to layouts, but on navigation, a new instance of the component is mounted and the state is not shared, usually used for enter/exit animations.
// head.tsx => Optional file used to define the contents of the <head> tag for a given route.
// Add --turbo flag to scripts in package.json to use next.js with turbopack (experimental feature)
// In Next 13 all components are Server components by default, so we can fetch data directly inside of them with async/await
// Check notes folder, for full tutorial app code with additional explanations
