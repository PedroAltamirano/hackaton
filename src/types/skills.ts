export interface ISkill {
  id: number
  created_at: Date
  updated_at: Date
  name: string
  icon: string
  isHard: boolean
  isSoft: boolean
}

export interface ISkillsCats {
  id: number
  created_at: Date
  updated_at: Date
  name: string
  skills: ISkill[]
}
