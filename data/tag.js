import { slug } from 'github-slugger'

export function getSlug(tag) {
  const slugMap = {
    프론트엔드: 'frontend',
    최적화: 'optimization',
    패턴: 'pattern',
  }
  return slugMap[tag] || slug(tag)
}
