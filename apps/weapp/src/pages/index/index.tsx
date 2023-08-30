import { View, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { Counter } from "ui";
import './index.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.', new Date());
  })

  return (
    <View className='index'>
      <Counter />
    </View>
  )
}
