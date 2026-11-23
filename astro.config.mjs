import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'http://elmosguide.ir/',
  integrations: [
    starlight({
      title: 'راهنمای جامع علم و صنعت | ElmosGuide',
      description: 'راهنمای جامع دانشجویان جدیدالورود دانشگاه علم و صنعت ایران',
      favicon: '/iconprfile.png',
      lastUpdated: true,
      logo: {
        src: './src/assets/iconprfile.png',
        alt: 'لوگوی راهنمای جامع علم و صنعت',
      },
      components: {
        Header: './src/components/Header.astro',
        ThemeSelect: './src/components/ThemeToggle.astro',
        Footer: './src/components/Footer.astro',
        PageTitle: './src/components/PageTitle.astro',
        TableOfContents: './src/components/TableOfContents.astro',
        Sidebar: './src/components/Sidebar.astro',
      },
      locales: {
        root: {
          label: 'فارسی',
          lang: 'fa',
          dir: 'rtl',
        },
      },
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            href: '/iconprfile.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#0B243B',
          },
        },
      ],
      sidebar: [
        {
          label: '🌐 تور مجازی دانشگاه علم و صنعت',
          link: 'https://vt.iust.ac.ir',
          attrs: { target: '_blank', rel: 'noopener noreferrer' },
          badge: { text: '۳۶۰ درجه', variant: 'tip' },
        },
        {
          label: '🏛️ اطلاعات کلی دانشگاه',
          autogenerate: { directory: 'general-info' },
        },
        {
          label: '🗺️ نقشه و فضاهای دانشگاه',
          items: [
            { label: 'نقشه دانشگاه', slug: 'campus/map' },
            { label: 'ورودی‌ها', slug: 'campus/entrances' },
            { label: 'دانشکده‌ها', slug: 'campus/faculties' },
            {
              label: '🏢 بخش‌ها و امکانات رفاهی',
              collapsed: false,
              autogenerate: { directory: 'campus/facilities' },
            },
          ],
        },
        {
          label: '💻 سامانه‌های اینترنتی',
          autogenerate: { directory: 'systems' },
        },
        {
          label: '🎓 مفاهیم آموزشی',
          autogenerate: { directory: 'education' },
        },
        {
          label: '📚 آموزش‌ها و راهنماهای تکمیلی',
          autogenerate: { directory: 'guides' },
        },
      ],
    }),
  ],
});