// export const dynamic = "force-dynamic"; // set as SSR
// export const revalidate = 1200; // not necessary, just for ISR demonstration

// Create Interface for fetched data
interface Post {
  title: string;
  content: string;
  slug: string;
}

// Removed static generation because of Netlify issues
// If you have data like blog posts, where data doesn't change often, you would want to statically generate all of those pages, allowing them to be stored on CDN, for very fast page loads
// To generate all of the dynamic pages we use generateStaticParams function
// export async function generateStaticParams() {
//   // Fetch all of the posts
//   const posts: Post[] = await fetch("http://localhost:3000/api/content").then(
//     (res) => res.json()
//   );

//   // Return an object with parameters that we want to render in advance
//   // This tells Next.js how to find all of your data, so it can be rendered in advance
//   // When using static generation it also makes sense to export revalidate value, to allow for the content to be updated every so often
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// Interface for passed slug from props
interface Props {
  params: { slug: string };
}

// You can opt out of typescript by using "any" instead of proper interface
export default async function BlogPostPage({ params }: Props) {
  // deduped
  // When you are in a server component, you always have to use fully qualified URL, relative URLs won't work

  const posts: Post[] = await fetch(
    "http://localhost:3000/api/content"
    // Manually set caching
    //   {
    //     cache: "no-cache",
    //   }
  ).then((res) => res.json());
  // Find the matching post
  // The exclamation point after the find call is a non-null assertion operator in TypeScript, which tells compiler that we know for sure that we will not have a null value here, which prevents some TypeScript errors in IDE, in practive you shouldn't be using this operator often
  // Better approach would be to check for null values and throw an error if there are any
  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
