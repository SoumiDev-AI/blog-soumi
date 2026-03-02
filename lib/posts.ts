import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "posts");

function normalizeDate(date: unknown): string {
  if (date instanceof Date) return date.toISOString().split("T")[0];
  if (typeof date === "string") return date;
  return "";
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  featured: boolean;
  category: "organic" | "seo";
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title ?? "",
        date: normalizeDate(data.date),
        excerpt: data.excerpt ?? data.description ?? "",
        author: data.author ?? "Soumi",
        tags: data.tags ?? [],
        featured: data.featured === true,
        category: data.category === "seo" ? "seo" : "organic",
      } satisfies PostMeta;
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title ?? "",
    date: normalizeDate(data.date),
    excerpt: data.excerpt ?? data.description ?? "",
    author: data.author ?? "Soumi",
    tags: data.tags ?? [],
    featured: data.featured === true,
    category: data.category === "seo" ? "seo" : "organic",
    contentHtml,
  };
}
