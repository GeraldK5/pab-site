import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const apiKey = process.env.GOOGLE_API_KEY;

    const sheet = request.nextUrl.searchParams.get("sheet") || "Sheet1";
    const range = request.nextUrl.searchParams.get("range") || sheet;
    const sheetId = request.nextUrl.searchParams.get("sheetId");

    const res = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
    );

    const data = await res.json();

    return NextResponse.json(data);
}