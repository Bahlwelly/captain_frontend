import { View, Text, Button, Pressable } from 'react-native'
import OnboardingImage1 from '../../assets/images/onboarding1.svg'
import React from 'react'

const onboarding_main = () => {
    const [step, setStep] = React.useState(1);
    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1); 
  return (
    <View className='p-6'>
      
      <View className='h-full flex items-center justify-center'>
        <Text className='font-semibold text-2xl text-center'>Passez des Courses, Gagnez des Commissions.</Text>
        
        <View className='w-full items-center justify-center'>
          <OnboardingImage1 style={{width:'100%', height:'80%', marginLeft:'4%'}} />
        </View>

        <View className='w-full items-center justify-center'>
          <Text className='text-center mt-2 text-lg'> Occupé ? Transférez la course au réseau Captain. Un autre chauffeur la prend, vous êtes payé. Simple.</Text>
        </View>
      </View>
    </View>
  )
}

export default onboarding_main