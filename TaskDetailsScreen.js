import React from "react";
import { View, Text } from "react-native";

export default function TaskDetailsScreen({ route }) {
  const { task } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Détails de la tâche</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        Titre : {task.title}
      </Text>
    </View>
  );
}
