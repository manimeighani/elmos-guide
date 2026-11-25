import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
  const { sidebar } = context.locals.starlightRoute;

  for (const item of sidebar) {
    if (item.type === 'group') {
      for (const sub of item.entries) {
        if (sub.type === 'group' && sub.label.toLowerCase() === 'facilities') {
          sub.label = '🏢 بخش‌ها و امکانات رفاهی';
        }
      }
    }
  }
});