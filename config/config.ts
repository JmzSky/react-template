import { defineConfig } from '@umijs/max';
import routes from './routes';

export default defineConfig({
  routes,
  title: 'cxr admin',
  npmClient: 'pnpm',
  metas: [{ name: 'referrer', content: 'no-referrer' }],
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    locale: false,
  },
  valtio: {},
  lessLoader: {
    modifyVars: {
      // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
      hack: `true; @import "@/assets/styles/var.less";`,
    },
    javascriptEnabled: true,
  },
  /**
   * @name 开启 hash 模式
   * @description 让 build 之后的产物包含 hash 后缀。通常用于增量发布和避免浏览器加载缓存。
   * @doc https://umijs.org/docs/api/config#hash
   */
  hash: true,
  /**
   * @name 主题的配置
   * @description 虽然叫主题，但是其实只是 less 的变量设置
   * @doc antd的主题设置 https://ant.design/docs/react/customize-theme-cn
   * @doc umi 的theme 配置 https://umijs.org/docs/api/config#theme
   */
  theme: {},
  /**
   * @name moment 的国际化配置
   * @description 如果对国际化没有要求，打开之后能减少js的包大小
   * @doc https://umijs.org/docs/api/config#ignoremomentlocale
   */
  ignoreMomentLocale: true,
  	/**
	 * @name 快速热更新配置
	 * @description 一个不错的热更新组件，更新时可以保留 state
	 */
	fastRefresh: true,
  	/**
	 * @name 国际化插件
	 * @doc https://umijs.org/docs/max/i18n
	 */
	locale: {
		default: 'zh-CN',
		antd: true,
	},
  define: {
    ENV_BUILD_ENV: process.env.ENV_BUILD_ENV,
  },
});
