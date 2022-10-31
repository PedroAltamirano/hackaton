import HTTP_CODES from 'constants/httpCodes'
import type { NextApiRequest, NextApiResponse } from 'next'
import sendMail from 'services/mail'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body

  const content = {
    subject: `Contact From - ${name}`,
    text: `${name}, ${message}, ${email}`,
    html: `<p>${name}, ${message}, ${email}</p>`,
  }

  try {
    await sendMail(content)
    res.status(HTTP_CODES.SUCCESS_200).send('Mail sent successfully.')
  } catch (error) {
    console.error('ERROR', error)
    res.status(HTTP_CODES.ERROR_400).send('Mail not sent.')
  }
}

export default handler
