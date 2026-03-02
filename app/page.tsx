import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import Tag from "@/components/Tag";

export default function BlogHome() {
  const allPosts = getAllPosts();
  const featured = allPosts.filter((p) => p.featured);
  const organic = allPosts.filter((p) => p.category === "organic" && !p.featured);
  const seo = allPosts.filter((p) => p.category === "seo");

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Hero */}
      <section className="mb-14 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-soumi-gray">
          El blog de Soumi
        </p>
        <h1 className="text-4xl font-bold leading-tight text-soumi-charcoal sm:text-5xl">
          Charlas grupales online,{" "}
          <span className="text-brand-dark">accesibles para todos</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-soumi-gray leading-relaxed">
          Artículos sobre salud mental, bienestar emocional, grupos de apoyo y
          crecimiento personal. Porque cuidar tu mente no debería ser un lujo.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://soumi.io"
            className="cta-button"
          >
            Empieza gratis en Soumi
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </section>

      {/* Featured posts — editorial highlights */}
      {featured.length > 0 && (
        <section className="mb-14">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-soumi-gray">
            Destacados
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {featured.map((post) => {
              const formattedDate = new Date(post.date).toLocaleDateString(
                "es-ES",
                { year: "numeric", month: "long", day: "numeric" }
              );
              return (
                <Link
                  key={post.slug}
                  href={`/${post.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-soumi-border bg-white p-5 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-brand-primary"
                >
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                  <h3 className="text-base font-semibold leading-snug text-soumi-charcoal group-hover:text-soumi-gray transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-soumi-gray leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <time
                    dateTime={post.date}
                    className="mt-3 block text-[11px] text-soumi-gray/70"
                  >
                    {formattedDate}
                  </time>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Organic posts — genuine editorial content */}
      {organic.length > 0 && (
        <section className="mb-14">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-soumi-gray">
            Últimos artículos
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {organic.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="mt-4 mb-14">
        <CTABanner />
      </section>

      {/* SEO posts — professional content, lower visibility */}
      {seo.length > 0 && (
        <section className="border-t border-soumi-border/50 pt-10">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-soumi-gray/60">
            Para profesionales
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {seo.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
