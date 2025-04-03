// App.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Jika Anda menggunakan WebView, Anda mungkin perlu mengimpornya di sini atau di komponen lain
// import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Selamat Datang di Aplikasi Expo WebView Anda!</Text>
      <Text>Mulai ubah kode ini di App.js</Text>
      {/* Contoh dasar penempatan WebView (jika diperlukan di sini) */}
      {/* <WebView
        style={{ flex: 1, width: '100%' }}
        source={{ uri: 'https://reactnative.dev/' }}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
