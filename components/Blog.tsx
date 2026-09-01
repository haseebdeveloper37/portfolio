import Image from "next/image";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  const featured = blogPosts.find((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <section id="blog" className="section-border-top">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Blog / Insights</div>
          <h2>Notes on WordPress, React and the web platform.</h2>
          <p>Write-ups on WordPress development, Elementor, WooCommerce, React, Next.js, performance and SEO.</p>
        </div>

        {featured && (
          <a href={`/blog/${featured.slug}`} className="blog-featured reveal">
            <div className="thumb">
              <Image src={featured.image} alt={featured.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 800px) 100vw, 55vw" />
            </div>
            <div className="content">
              <div className="blog-meta">
                <span className="cat">{featured.cat}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
                <span>·</span>
                <span>{featured.date}</span>
              </div>
              <h3>{featured.title}</h3>
              <p>{featured.desc}</p>
              <span className="blog-read">
                Read article <span className="a">→</span>
              </span>
            </div>
          </a>
        )}

        <div className="blog-grid">
          {rest.map((post, i) => (
            <a
              href={`/blog/${post.slug}`}
              className="blog-card reveal"
              style={i > 0 ? { transitionDelay: `${i * 0.05}s` } : undefined}
              key={post.slug}
            >
              <div className="thumb">
                <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <div className="content">
                <div className="blog-meta">
                  <span className="cat">{post.cat}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h4>{post.title}</h4>
                <p>{post.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
