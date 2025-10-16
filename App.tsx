import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageSourcePropType,
} from 'react-native';

import { useState } from 'react';

import { useTranslation } from "react-i18next";
import "./src/utils/i18n"; // Import AFTER react-i18next

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en')

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    .then(() => {
    setCurrentLanguage(lng);
    })
    .catch((err)=>{
      console.log(err);
    }
  )
  };

  const logo: ImageSourcePropType = require('./src/assets/logo.png');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#141A31" />

      <View style={styles.languages}>
        <TouchableOpacity
          onPress={() => changeLanguage('en')}
          style={[styles.langButton, { borderColor: currentLanguage === 'en' ? '#037CFC' : 'transparent' }]}
        >
          <Text style={styles.langText}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => changeLanguage('pt')}
          style={[styles.langButton, { borderColor: currentLanguage === 'pt' ? '#037CFC' : 'transparent' }]}
        >
          <Text style={styles.langText}>Português</Text>
        </TouchableOpacity>
      </View>

      <Image source={logo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>{t("Seja bem vindo")}</Text>
      <Text style={styles.title}>{t("ao seu app de filmes")}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{t("Acessar")}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>{t("Criar uma nova conta")}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A31',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingStart: 24,
    paddingEnd: 24,
  },
  languages: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: StatusBar.currentHeight ? StatusBar.currentHeight + 18 : 58,
  },
  langButton: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
    marginLeft: 8,
  },
  langText: {
    marginRight: 4,
    marginLeft: 4,
    color: '#FFF',
  },
  logo: {
    maxWidth: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 44,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFF',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#037CFC',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 28,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 14,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    textAlign: 'center',
    color: '#FFF',
  },
});