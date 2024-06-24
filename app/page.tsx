import React from "react";

// Using npm, not yarn with this app!

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
export default function Home() {
  return <main>Hello World</main>;
}
