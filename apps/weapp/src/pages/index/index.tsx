import { View } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Counter } from 'ui'
import './index.less'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.', new Date())
  })

  return (
    <View className='bg-[#fafafa] h-screen-fit'>
      <View className='p-4'>
        <View className='flex justify-center items-center gap-2'>
          <View className='i-mdi-weather-windy text-6' />
          <View className='text-5 font-500'>Taro Monorepo Template</View>
        </View>
      </View>
      <Counter />
    </View>
  )
}
