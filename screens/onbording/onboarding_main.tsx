import { View, Text } from 'react-native'
import OnboardingImage1 from '../../assets/images/onboarding1.svg'
import React from 'react'
import { StyleSheet } from 'react-native';
import { useTheme } from '@/components/Theme';
import { Background } from '@react-navigation/elements';
import ThemeSwitch from '@/components/ThemeSwitch';

const colors = {

}

const OnboardingMain = () => {
  const {theme} = useTheme();

  const [step, setStep] = React.useState(1);
  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1); 

  return (
    <View style={ [styles.container, {backgroundColor : theme.backGround }] }>

      <View style={styles.nav}>
        <Text style={{color : theme.textPrimary}}>LangSwitch</Text>
        <ThemeSwitch />
      </View>

      <View>  
        <Text style={ [styles.title, { color : theme.textPrimary }] }>Passez des Courses, Gagnez des Commissions.</Text>

        <OnboardingImage1 />

        <View>
          <Text style={ [styles.description, { color : theme.textSecondary }] }> Occupé ? Transférez la course au réseau Captain. Un autre chauffeur la prend, vous êtes payé. Simple.</Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    width : '100%',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
    padding:16
  },
  title : {
    fontSize: 20,
    textAlign:'center',
    fontWeight:'600'
  },
  description : {
    textAlign:'center',
    fontSize : 16
  },
  nav : {
    width : '110%',
    padding:10,
    position:'absolute',
    top:0,
    left:0,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
})

export default OnboardingMain