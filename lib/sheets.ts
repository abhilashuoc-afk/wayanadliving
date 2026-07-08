const SHEET_ID = "2PACX-1vRtDofPm5GAERqEWc8TvJwFewgNRHNPONSl56CmKb2q7J6tGT6mXErGfpyHAX8na9URqpRxdRk4nFZ3";

const BASE = `https://docs.google.com/spreadsheets/d/e/${SHEET_ID}/pub?output=csv&gid=`;

// Tab GIDs — we need to find the correct GID for each tab
const TABS = {
  news: "0",      // default first tab
  events: "",     // we need to find this
  hotels: "",     // we need to find this
};

function parseCSV(csv: string): Record<string, string>[] {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map((h) => h.replace(/"/g, "").trim());
  return lines.slice(1).map((line) => {
    const values: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '"') {
        inQuotes = !inQuotes;
      } else if (line[i] === "," && !inQuotes) {
        values.push(current.trim());
        current = "";
      } else {
        current += line[i];
      }
    }
    values.push(current.trim());
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => {
      obj[h] = (values[i] || "").replace(/^"|"$/g, "").trim();
    });
    return obj;
  });
}

async function fetchTab(sheetName: string) {
  try {
    const url = `https://docs.google.com/spreadsheets/d/e/${SHEET_ID}/pub?output=csv&sheet=${sheetName}`;
    const res = await fetch(url, { next: { revalidate: 300 } });
    const csv = await res.text();
    return parseCSV(csv);
  } catch {
    return [];
  }
}

export async function getNews() {
  return fetchTab("news");
}

export async function getEvents() {
  return fetchTab("events");
}

export async function getHotels() {
  return fetchTab("hotels");
}