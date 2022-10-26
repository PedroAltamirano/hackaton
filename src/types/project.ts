interface IProject {
  id: number
  created_at: Date
  updated_at: Date
  name: string
  description: string
  short: string
  published: boolean
  importance: number
  role: string
  image: string
  url: string
}

export default IProject
