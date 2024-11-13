import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "POST": {
            console.log(req.body);
            res.status(200).json({ ...JSON.parse(req.body) });
            break;
        }
        default: {
            res.status(404).json({ message: 'Page not found' });
            break;
        }
    }

}