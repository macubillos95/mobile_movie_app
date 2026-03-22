import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-light-300 font-bold">Prsueba </Text>
      <Link href="/onboarding" className="text-2xl text-light-300">
        Go to Onboarding
      </Link>
      <Link href="/movie/avengers" className="text-2xl text-light-300">
        Avenger
      </Link>
    </View>
  );
}
