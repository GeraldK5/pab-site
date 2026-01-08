import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const slugs: string[] = Array.isArray(body.slugs) ? body.slugs : [];
    if (!slugs.length) return new Response('No slugs provided', { status: 400 });

    const zip = new JSZip();
    const base = path.join(process.cwd(), 'markdown', 'blog');

    for (const slug of slugs) {
      const candidates = [`${slug}.mdx`, `${slug}.md`];
      for (const c of candidates) {
        const p = path.join(base, c);
        if (fs.existsSync(p)) {
          const data = fs.readFileSync(p);
          zip.file(c, data);
          break;
        }
      }
    }

    const content = await zip.generateAsync({ type: 'nodebuffer' });
    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="docs.zip"'
      }
    });
  } catch (err) {
    return new Response(String(err), { status: 500 });
  }
}
