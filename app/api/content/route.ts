// You don't need to create an api folder to make api routes, but it makes sense to do it, so all of the api routes are in one location and not scattered around the app

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

const posts = [
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Dolor Sit Amet",
    slug: "dolor-sit-amet",
    content:
      "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    title: "Consectetur Adipiscing",
    slug: "consectetur-adipiscing",
    content:
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  },
  {
    title: "Integer Nec Odio",
    slug: "integer-nec-odio",
    content:
      "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",
  },
  {
    title: "Praesent Libero",
    slug: "praesent-libero",
    content:
      "Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.",
  },
];

// Create GET endpoint
export async function GET() {
  // Auth lets you access auth data on server side as well
  const session = await getServerSession();

  if (!session) {
    // Redirect or render something else
    console.log("Not logged in.");
  }

  console.log("Logged in!");

  return NextResponse.json(posts);
}
