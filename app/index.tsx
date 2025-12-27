import { Text, View } from "react-native";
import Onboarding_main from "../screens/onbording/onboarding_main"
import { SafeAreaView } from 'react-native-safe-area-context';
// import "../globale.css"

export default function Index() {
  return (
      <SafeAreaView style={{ flex:1 }}>
          <Onboarding_main/>
      </SafeAreaView>
  );
}