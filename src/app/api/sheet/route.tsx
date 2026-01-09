import { NextRequest, NextResponse } from "next/server";

/**
 * This API route is deprecated - use the Google Sheets service instead
 * See: src/services/googleSheets.ts
 * 
 * The client-side service handles Google Sheets API calls directly
 * using NEXT_PUBLIC_GOOGLE_API_KEY
 */
export async function GET(request: NextRequest) {
    // This endpoint is kept for backward compatibility only
    // New code should use the googleSheets service
    return NextResponse.json({
        error: "This API route is deprecated. Please use the googleSheets service from src/services/googleSheets.ts instead."
    }, { status: 410 });
}