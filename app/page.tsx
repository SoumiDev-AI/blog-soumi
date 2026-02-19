import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";
import Tag from "@/components/Tag";

export default function BlogHome() {
  const allPosts = getAllPosts();
  const featured = allPosts.filter((p) => p.featured);
  const rest = allPosts.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      {/* Hero */}
      <section className="mb-14 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-soumi-gray">
          El blog de Soumi
        </p>
        <h1 className="text-4xl font-bold leading-tight text-soumi-charcoal sm:text-5xl">
          Terapia grupal online,{" "}
          <span className="text-brand-dark">accesible para todos</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-soumi-gray leading-relaxed">
          Artículos sobre terapia barata, grupos de apoyo, salud mental y
          bienestar emocional. Porque cuidar tu mente no debería ser un lujo.
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

      {/* Featured posts — editorial, non-business */}
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

      {/* All other posts */}
      <section>
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-soumi-gray">
          Todos los artículos
        </h2>
        {rest.length === 0 ? (
          <p className="text-center text-soumi-gray">
            Próximamente nuevos artículos.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* CTA Banner */}
      <section className="mt-16">
        <CTABanner />
      </section>
    </div>
  );
}
