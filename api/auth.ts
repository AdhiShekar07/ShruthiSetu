import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method === "POST") {
    return res.json({ message: "Auth API working" });
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
