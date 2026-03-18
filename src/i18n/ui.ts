export const ui = {
  zh: {
    'nav.index': 'Index',
    'nav.archive': 'Archive',
    'hero.tagline1': '西湖柳岸，代码随风生长。',
    'hero.tagline2': '记录一段在湖边',
    'hero.tagline2.accent': 'vibe coding',
    'hero.tagline3': '的旅程',
    'section.recentLogs': 'RECENT LOGS',
    'archive.title': 'Full Archive',
    'post.read': 'READ.',
    'post.previous': 'Previous',
    'post.next': 'Next',
    'post.backToIndex': 'Back to Index',
  },
  en: {
    'nav.index': 'Index',
    'nav.archive': 'Archive',
    'hero.tagline1': 'By the willows of West Lake, code grows with the breeze.',
    'hero.tagline2': 'A journey of',
    'hero.tagline2.accent': 'vibe coding',
    'hero.tagline3': 'along the lakeside',
    'section.recentLogs': 'RECENT LOGS',
    'archive.title': 'Full Archive',
    'post.read': 'READ.',
    'post.previous': 'Previous',
    'post.next': 'Next',
    'post.backToIndex': 'Back to Index',
  },
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof typeof ui.zh;
