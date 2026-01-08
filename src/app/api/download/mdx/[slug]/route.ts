import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const base = path.join(process.cwd(), 'markdown', 'blog');
  const candidates = [`${slug}.mdx`, `${slug}.md`];
  let filePath = null;
  for (const c of candidates) {
    const p = path.join(base, c);
    if (fs.existsSync(p)) {
      filePath = p;
      break;
    }
  }
  if (!filePath) return new Response('Not found', { status: 404 });

  const content = fs.readFileSync(filePath);
  const filename = path.basename(filePath);
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`
    }
  });
}
