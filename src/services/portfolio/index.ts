import { PortfolioSettings } from "@/types/portfolio";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const fetchPortfolioSettings = async (): Promise<PortfolioSettings> => {
  const res = await fetch(`${API_URL}/api/portfolio`, { cache: "no-store" });
  const payload = await res.json();

  if (!res.ok || !payload.success || !payload.data) {
    throw new Error(payload?.message || "Failed to load portfolio settings");
  }

  return payload.data;
};

export const savePortfolioSettings = async (
  settings: PortfolioSettings,
): Promise<PortfolioSettings> => {
  try {
    const res = await fetch(`${API_URL}/api/portfolio`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });

    const payload = await res.json();

    if (!res.ok) {
      throw new Error(payload?.message || "Failed to save portfolio settings");
    }

    return payload?.data || settings;
  } catch (error) {
    console.error("Portfolio save error:", error);
    throw error;
  }
};
