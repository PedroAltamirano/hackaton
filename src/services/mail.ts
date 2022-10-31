import * as sgMail from '@sendgrid/mail'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string
const SENDGRID_FROM = process.env.SENDGRID_FROM as string

sgMail.setApiKey(SENDGRID_API_KEY)

interface IMail {
  to?: string
  subject: string
  templateId?: string
  text?: string
  dynamicTemplateData?: { [name: string]: string }
}

const sendMail = async (data: IMail) => {
  const msg = {
    to: SENDGRID_FROM,
    ...data,
    from: SENDGRID_FROM,
  } as any

  try {
    await sgMail.send(msg)
  } catch (error) {
    console.error('Sendgrid, sendMail', error)
  }

  return 'Mail sended'
}

export default sendMail
