import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import { CircleHBView, CircleHBSvg } from './src/CircleHeartBeat'
import { View } from 'react-native'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
          <CircleHBView />
          <CircleHBSvg />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
