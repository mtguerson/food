import { View, Pressable, Text } from "react-native";
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <View className="flex flex-row w-full items-center justify-between">
      <Pressable className="w-10 h-10 bg-white items-center justify-center rounded-full">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View className="items-center flex justify-center flex-col">
        <Text className="text-center text-sm text-slate-800">Localização</Text>

        <View className="flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={14} color="#FF0000" />
          <Text className="text-lg font-bold">Campo Grande</Text>
        </View>
      </View>

      <Pressable className="w-10 h-10 bg-white items-center justify-center rounded-full">
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  );
}