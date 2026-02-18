import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import CTABanner from "@/components/CTABanner";

export default function BlogHome() {
  const posts = getAllPosts();

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

      {/* Posts grid */}
      {posts.length === 0 ? (
        <p className="text-center text-soumi-gray">
          Próximamente nuevos artículos.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* CTA Banner */}
      <section className="mt-16">
        <CTABanner />
      </section>
    </div>
  );
}
