import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    title: string,
    body: string
}
const post: ResponseData = {
    title: "Title",
    body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis eligendi recusandae minus dolores voluptates, tempora, culpa excepturi dicta mollitia eius deserunt exercitationem iusto perspiciatis laborum totam? Quae, rerum natus?`,
};
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "GET":
            res.status(200).json(new Array(6).fill(post));
            break;
        default:
            res.status(404).json({ message: "Page not found" })
            break;
    }
}