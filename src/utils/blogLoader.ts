import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  description: string;
  content: string;
}

// 取得所有部落格文章的列表
export async function getAllPosts(): Promise<BlogPost[]> {
  // 這裡列出所有的 markdown 檔案
  const blogFiles = [
    'react-hooks-guide',
    'typescript-best-practices',
    'web-performance-optimization',
    'modern-css-techniques'
  ];

  const posts = await Promise.all(
    blogFiles.map(async (slug) => {
      const post = await getPostBySlug(slug);
      return post;
    })
  );

  // 依日期排序（最新的在前面）
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// 根據 slug 取得單篇文章
export async function getPostBySlug(slug: string): Promise<BlogPost> {
  try {
    const url = `/blog/${slug}.md`;
    console.log(`正在載入文章: ${url}`);

    const response = await fetch(url);
    console.log(`回應狀態 (${slug}):`, response.status, response.statusText);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${slug}: ${response.status} ${response.statusText}`);
    }

    const markdown = await response.text();
    console.log(`成功讀取 ${slug}，長度:`, markdown.length);

    const { data, content } = matter(markdown);
    console.log(`解析 ${slug} 的 metadata:`, data);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Anonymous',
      tags: data.tags || [],
      image: data.image || '📝',
      description: data.description || '',
      content
    };
  } catch (error) {
    console.error(`載入文章 ${slug} 時發生錯誤:`, error);
    throw error;
  }
}

// 格式化日期
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}