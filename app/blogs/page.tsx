export const metadata = {
  title: "PropTech Insights & News 2025 | Future PropTech Summit Blogs",
  description: "Stay updated with the latest in PropTech, smart cities, and real estate innovation. Explore expert articles, news, and trends from Future PropTech Summit 2025.",
};

export const revalidate = 60;

import { getBlogPostsByProject } from "@/sanity/lib/blogs";
import BlogGridClient from "../components/blogs";

export default async function NewsBlogGrid() {
  const posts = await getBlogPostsByProject("fps");

  return (
    <section className="bg-white">
      <BlogGridClient posts={posts} />
    </section>
  );
}
