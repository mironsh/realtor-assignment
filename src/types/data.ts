export default interface JsonData {
    data: Data
    profile: Profile
    site: Site
}

export interface Data {
  bbox: number[]
  features: Feature[]
  metadata: any
  type: string
}

export interface Feature {
  geometry: { type: string; coordinates: number[] }
  id: string
  properties: any
  type: string
}

export interface Profile {
    avatarImage: string
    bio: string
    email: string
    firstName: string
    lastName: string
    phone: string
}

export interface Site {
    heroImage: string
    logoImage: string
    title: string
}