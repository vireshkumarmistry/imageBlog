import { notFound } from "next/navigation";
import Header from "@/components/header";
import { PostBody } from "@/components/post-body";
import posts from "@/data/data.json";
import { getPostBySlug } from "@/lib/api";
import Image from "next/image";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = post.content || "";

  return (
    <main className="w-full">
      <div className="flex flex-col items-start gap-4 p-3">
        <Header title={post.title} />
        <div className="flex items-center gap-3 flex-col lg:flex-row h-full w-full justify-center">
          <Image
            src={post.imageUrl}
            alt={post.title || ""}
            width={100}
            height={100}
            loading="lazy"
            layout="responsive"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="max-w-[450px]"
          />
          <article className="mb-4">
            <PostBody content={content} />
          </article>
        </div>
      </div>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
