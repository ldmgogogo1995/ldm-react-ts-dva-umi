import { defineConfig } from 'umi';
import routes from './route';
export default defineConfig({
  hash: true,
  favicon: '/fugangyiyong.jpg',
  antd: {
    config: {},
  },
  layout: {
    name: '带明的厕所',
    lacale: false,
    siderWidth: 228,
  },
  locale: false,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
});
