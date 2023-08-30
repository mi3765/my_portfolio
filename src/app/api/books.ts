import type { NextApiRequest, NextApiResponse } from "next";

const Handler = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ name: "next.js", author: "Vercel" });
};

export default Handler;
