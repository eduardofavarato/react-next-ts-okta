// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseDTO = {
  revalidated: boolean
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseDTO | string>) {
  try {
    await res.revalidate('/repositories')
    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
