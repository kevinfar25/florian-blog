import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  coverImage?: string;
  content?: string;
}

export interface PaginatedPosts {
  posts: Post[];
  totalPages: number;
  currentPage: number;
}

export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    author: data.author,
    coverImage: data.coverImage,
    content,
  };
}

export async function getPostWithHtml(slug: string): Promise<Post & { contentHtml: string }> {
  const post = getPostBySlug(slug);
  const processedContent = await remark().use(html).process(post.content || '');
  const contentHtml = processedContent.toString();

  return {
    ...post,
    contentHtml,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1));
  return posts;
}

export function getPaginatedPosts(page: number = 1, postsPerPage: number = 6): PaginatedPosts {
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const posts = allPosts.slice(startIndex, startIndex + postsPerPage);

  return {
    posts,
    totalPages,
    currentPage: page,
  };
}
