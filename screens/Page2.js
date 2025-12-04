import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Page2({ route, navigation }) {
  const userNumber = String(route.params.userNumber);  // IMPORTANT
  const secret = "9898";  // Code secret

  const compareNumbers = () => {
    let result = "";

    for (let i = 0; i < 4; i++) {
      if (userNumber[i] === secret[i]) {
        result += "+";
      } else if (secret.includes(userNumber[i])) {
        result += "-";
      } else {
        result += " ";
      }
    }
    return result;
  };

  const result = compareNumbers();
  const success = result === "++++";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre entrée : {userNumber}</Text>

      <Text style={styles.result}>Résultat : {result}</Text>

      {success && <Text style={styles.success}>🎉 Félicitations ! Vous avez trouvé le bon nombre !</Text>}

      {!success && <Button title="Réessayer" onPress={() => navigation.goBack()} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  result: {
    fontSize: 28,
    marginBottom: 30
  },
  success: {
    fontSize: 22,
    color: "green",
    marginBottom: 30,
    fontWeight: "bold"
  }
});
