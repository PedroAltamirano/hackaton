import HTTP_CODES from 'constants/httpCodes'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(HTTP_CODES.SUCCESS_200).json({ name: 'John Doe' })
}

export default handler
