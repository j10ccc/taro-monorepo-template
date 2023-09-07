// eslint-disable-next-line import/no-named-as-default
import presetWeapp from 'unocss-preset-weapp'
import {transformerClass} from 'unocss-preset-weapp/transformer';
import {defineConfig, transformerDirectives, presetIcons} from 'unocss';

export default defineConfig({
  presets: [
    presetIcons(),
    presetWeapp({
      // h5兼容
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
      whRpx: false,
      taroWebpack:'webpack5'
    }),
  ],
  shortcuts: [],
  rules: [
    ['h-screen-fit', { height: 'calc(100vh - env(safe-area-inset-bottom))' }]
  ],
  transformers:[
    transformerClass(),
    transformerDirectives({
      enforce: 'pre'
    }),
  ],
  content:{
    pipeline:{
      include: [/\.([jt]sx|css)($|\?)/],
      exclude: []
    }
  }
})
