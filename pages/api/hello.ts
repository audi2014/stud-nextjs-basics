import { NextApiHandler } from 'next';

const handler: NextApiHandler<{ text: string }> = (req, res) => {
  res.status(200).json({ text: 'Hello' });
};

export default handler;
