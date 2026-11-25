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
          link: 'https://civil.iust.ac.ir/content/29837/%D8%AA%D9%88%D8%B1-%D9%85%D8%AC%D8%A7%D8%B2%DB%8C-%D8%AF%D8%A7%D9%86%D8%B4%DA%AF%D8%A7%D9%87-%D8%B9%D9%84%D9%85-%D9%88-%D8%B5%D9%86%D8%B9%D8%AA-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86',
          attrs: { target: '_blank', rel: 'noopener noreferrer' },
          badge: { text: '۳۶۰ درجه', variant: 'tip' },
        },
        {
          label: '🏛️ اطلاعات کلی دانشگاه',
          autogenerate: { directory: 'general-info' },
        },
        {
          label: '🗺️ نقشه و فضاهای دانشگاه',
          autogenerate: { directory: 'campus', collapsed: false },
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