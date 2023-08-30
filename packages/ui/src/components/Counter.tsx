import { useState } from "react";
import { View, Text, Button } from "@tarojs/components";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <View>
      <Text style={{ fontWeight: "500" }}> { count } </Text>
      <Button onClick={handleClick}>count++</Button>
    </View>
  )
}

export default Counter;
