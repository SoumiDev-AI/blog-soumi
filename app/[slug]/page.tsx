import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import Tag from "@/components/Tag";
import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
      keywords: post.tags,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `https://blog.soumi.io/${slug}`,
        siteName: "Blog Soumi",
        type: "article",
        publishedTime: post.date,
        authors: [post.author],
      },
      alternates: {
        canonical: `https://blog.soumi.io/${slug}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-2 text-sm text-soumi-gray transition-all hover:bg-brand-primary hover:text-soumi-charcoal"
      >
        <span>&larr;</span>
        Todos los artículos
      </Link>

      <article>
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-tight text-soumi-charcoal sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-lg text-soumi-gray leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-3 border-t border-soumi-border/50 pt-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary font-bold text-soumi-charcoal">
              S
            </div>
            <div>
              <p className="text-sm font-medium text-soumi-charcoal">
                {post.author}
              </p>
              <time dateTime={post.date} className="text-xs text-soumi-gray">
                {formattedDate}
              </time>
            </div>
          </div>
        </header>

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      {/* CTA after article */}
      <section className="mt-14">
        <CTABanner />
      </section>
    </div>
  );
}
