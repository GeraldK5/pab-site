/**
 * Google Sheets API Service
 * Fetches data from Google Sheets using the public API key
 */

interface FeedbackEntry {
    timestamp: string;
    [key: string]: string;
}

interface SheetData {
    values: string[][];
    range: string;
}

/**
 * Fetch data from Google Sheets
 * @param sheetId - The Google Sheet ID
 * @param range - The range to fetch (e.g., 'Sheet1' or 'A1:Z100')
 * @returns Promise containing the sheet data
 */
export const fetchGoogleSheetData = async (
    sheetId: string,
    range: string = 'Sheet1'
): Promise<SheetData> => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

    if (!apiKey) {
        throw new Error('NEXT_PUBLIC_GOOGLE_API_KEY environment variable is not set');
    }

    try {
        const response = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
        );

        if (!response.ok) {
            throw new Error(`Google Sheets API error: ${response.statusText}`);
        }

        const data: SheetData = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Google Sheets data:', error);
        throw error;
    }
};

/**
 * Parse Google Sheets data into feedback entries
 * First row is treated as question headers
 * Remaining rows are treated as feedback responses
 * @param sheetData - Raw data from Google Sheets
 * @returns Object containing questions array and entries array
 */
export const parseFeedbackData = (sheetData: SheetData) => {
    if (!sheetData.values || sheetData.values.length === 0) {
        return { questions: [], entries: [] };
    }

    const questions = sheetData.values[0];
    const entries: FeedbackEntry[] = sheetData.values.slice(1).map((row: string[]) => {
        const entry: FeedbackEntry = { timestamp: row[0] || '' };
        questions.forEach((question: string, index: number) => {
            entry[question] = row[index] || '';
        });
        return entry;
    });

    return { questions, entries };
};

/**
 * Fetch and parse Google Sheets feedback data in one call
 * @param sheetId - The Google Sheet ID
 * @param range - The range to fetch
 * @returns Object containing parsed questions and entries
 */
export const fetchFeedbackData = async (
    sheetId: string,
    range: string = 'Sheet1'
) => {
    const sheetData = await fetchGoogleSheetData(sheetId, range);
    return parseFeedbackData(sheetData);
};
