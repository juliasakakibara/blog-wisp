"use client";
import { GetPostResult } from "../lib/wisp";
import Link from "next/link";
import { ContentWithCustomComponents } from "@wisp-cms/react-custom-component";
import { Heading } from "./Heading";
import { GooeyText } from "./GooeyText";
import { SimpleText } from "./SimpleText";
import sanitize, { defaults } from "sanitize-html";

export const PostContent = ({ content }: { content: string }) => {
  // Remove "Powered by wisp" content before sanitization
  const filteredContent = content
    .replace(/<small[^>]*>.*?powered by wisp.*?<\/small>/gi, '')
    .replace(/<a[^>]*wisp\.blog[^>]*>.*?<\/a>/gi, '');

  const sanitizedContent = sanitize(filteredContent, {
    allowedTags: [
      "b",
      "br",
      "i",
      "em",
      "strong",
      "a",
      "img",
      "h1",
      "h2",
      "h3",
      "code",
      "pre",
      "p",
      "li",
      "ul",
      "ol",
      "blockquote",
      // tables
      "td",
      "th",
      "table",
      "tr",
      "tbody",
      "thead",
      "tfoot",
      "small",
      "div",
      "iframe",
    ],
    allowedAttributes: {
      ...defaults.allowedAttributes,
      "*": ["style"],
      iframe: ["src", "allowfullscreen", "style"],
    },
    allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com"],
  });
  return (
    <>
      {/* Adiciona estilo global para listas horizontais */}
      <style>{`
        .blog-content ul {
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
          list-style: disc inside;
          padding-left: 0;
        }
        .blog-content ul li {
          margin: 0;
        }
      `}</style>
      <div
        className="blog-content mx-auto"
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      />
    </>
  );
};

export const BlogPostContent = ({ post }: { post: GetPostResult["post"] }) => {
  if (!post) return null;
  const { title, publishedAt, createdAt, content, tags } = post;
  return (
    <div>
      <div className="prose lg:prose-xl dark:prose-invert mx-auto lg:prose-h1:text-4xl mb-10 lg:mt-20 break-words">
        <h1>{title}</h1>
<ContentWithCustomComponents
  content={content}
  customComponents={{
    Heading,
    GooeyText,
    SimpleText
  }}
/>
        <div className="mt-10 opacity-40 text-sm">
          {tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/tag/${tag.name}`}
              className="text-primary mr-2"
            >
              #{tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
