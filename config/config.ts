import { defineConfig } from 'umi';

export default defineConfig({
  favicon: '/fugangyiyong.jpg',
  layout: {
    name: '带明的厕所',
    locale: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
