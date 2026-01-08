import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filePath = searchParams.get("file");

    if (!filePath) {
      return NextResponse.json(
        { error: "File path not provided" },
        { status: 400 }
      );
    }

    // Validate file path to prevent directory traversal
    if (filePath.includes("..") || filePath.startsWith("/")) {
      return NextResponse.json(
        { error: "Invalid file path" },
        { status: 400 }
      );
    }

    const publicDir = join(process.cwd(), "public");
    const fullPath = join(publicDir, filePath);

    // Ensure the file is within the public directory
    if (!fullPath.startsWith(publicDir)) {
      return NextResponse.json(
        { error: "Access denied" },
        { status: 403 }
      );
    }

    const fileBuffer = await readFile(fullPath);
    const fileName = filePath.split("/").pop() || "document.pdf";

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Failed to download file" },
      { status: 500 }
    );
  }
}
