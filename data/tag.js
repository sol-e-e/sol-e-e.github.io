import { slug } from 'github-slugger'

export function getSlug(tag) {
  const slugMap = {
    프론트엔드: 'frontend',
    최적화: 'optimization',
    패턴: 'pattern',
  }
  return slugMap[tag] || slug(tag)
}

export function getTag(slug) {
  const tagMap = {
    frontend: '프론트엔드',
    optimization: '최적화',
    pattern: '패턴',
  }

  return tagMap[slug] || slug // 기본값으로 슬러그 자체를 반환
}
