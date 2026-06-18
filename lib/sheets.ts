const SHEET_BASE = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRtDofPm5GAERqEWc8TvJwFewgNRHNPONSl56CmKb2q7J6tGT6mXErGfpyHAX8na9URqpRxdRk4nFZ3/pub?output=csv&sheet=";

function parseCSV(csv: string): Record<string, string>[] {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return [];
  const headers = lines[0].split(",").map((h) => h.replace(/"/g, "").trim());
  return lines.slice(1).map((line) => {
    const values = line.match(/(".*?"|[^",\n]+)(?=\s*,|\s*$)/g) || [];
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => {
      obj[h] = (values[i] || "").replace(/"/g, "").trim();
    });
    return obj;
  });
}

export async function getNews() {
  try {
    const res = await fetch(SHEET_BASE + "news", { next: { revalidate: 3600 } });
    const csv = await res.text();
    return parseCSV(csv);
  } catch {
    return [];
  }
}

export async function getEvents() {
  try {
    const res = await fetch(SHEET_BASE + "events", { next: { revalidate: 3600 } });
    const csv = await res.text();
    return parseCSV(csv);
  } catch {
    return [];
  }
}

export async function getHotels() {
  try {
    const res = await fetch(SHEET_BASE + "hotels", { next: { revalidate: 3600 } });
    const csv = await res.text();
    return parseCSV(csv);
  } catch {
    return [];
  }
}
