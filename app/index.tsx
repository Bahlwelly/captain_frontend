import { Text, View } from "react-native";
import Onboarding_main from "./onbording/onboarding_main"
import { SafeAreaView } from 'react-native-safe-area-context';
import "../globale.css"

export default function Index() {
  return (
      <SafeAreaView className="pt-14">
          <Onboarding_main />
      </SafeAreaView>
  );
}
