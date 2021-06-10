export default interface JsonData {
    data: Data
    profile: Profile
    site: Site
}

interface Data {
  bbox: number[]
  features: Feature[]
  metadata: any
  type: string
}

interface Feature {
  geometry: { type: string; coordinates: number[] }
  id: string
  properties: any
  type: string
}

interface Profile {
    avatarImage: string
    bio: string
    email: string
    firstName: string
    lastName: string
    phone: string
}

interface Site {
    heroImage: string
    logoImage: string
    title: string
}