import { slug } from 'github-slugger'

const tagSlugMap: Record<string, string> = {
  최적화: 'optimization',
  프론트엔드: 'frontend',
  패턴: 'pattern',
}

export const getSlug = (tag: string) => {
  return tagSlugMap[tag] || slug(tag)
}
