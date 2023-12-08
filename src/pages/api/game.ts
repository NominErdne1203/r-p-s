import type { NextApiRequest, NextApiResponse } from "next";

const lobbies: { [key: string]: number } = {
  room_12345: 1,
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  const roomid = req.query;
  const lobby = lobbies[`room_${roomid}`];
  switch (method) {
    case "GET":
      return res.json(lobby);
    case "POST":
  }
}
