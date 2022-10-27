interface IExperience {
  id: number
  created_at: Date
  updated_at: Date
  name: string
  description: string
  since: Date
  until: Date
  company: string
  company_url: string
  current: boolean
}

export default IExperience
