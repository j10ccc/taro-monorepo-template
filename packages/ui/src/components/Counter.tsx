import { useState } from "react";
import { View, Text, Button } from "@tarojs/components";

const Counter = () => {
  const [count, setCount] = useState(1000);

  const handleClick = () => {
    setCount(count + 10);
  }

  return (
    <View className="counter animate-fade-in animate-duration-100">
      <View className="m-4 bg-white shadow rd-4 px-6 py-4">
        <View className="flex items-center gap-2 mb-2">
          <View className="bg-blue rd-4 w-2 h-2" />
          <View className="font-600 text-[36rpx]">COUNT</View>
        </View>
        <View className="flex items-center gap-2 c-gray-500">
          <Text className="i-mdi-calculator text-[36rpx]" />
          <Text className="text-5" > { count } </Text>
        </View>
        <View className="h-14" />
        <Button onClick={handleClick}>count + 10</Button>
      </View>
    </View>
  )
}

export default Counter;
