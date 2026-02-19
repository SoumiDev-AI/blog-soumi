import Link from "next/link";
import Tag from "@/components/Tag";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="card-elevated group overflow-hidden p-6">
      <Link href={`/${post.slug}`}>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <h2 className="text-lg font-semibold text-soumi-charcoal leading-snug group-hover:text-soumi-gray 1">
          {post.title}
        </h2>
        <p className="mt-2.5 text-sm leading-relaxed text-soumi-gray line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-soumi-border/50 pt-4 text-xs text-soumi-gray">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary text-[10px] font-bold text-soumi-charcoal">
              S
            </div>
            <span>{post.author}</span>
          </div>
          <time dateTime={post.date}>{formattedDate}</time>
        </div>
      </Link>
    </article>
  );
}
