import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function AddTaskScreen({ navigation }) {
  const [title, setTitle] = useState("");

  const validate = () => {
    if (title.trim() !== "") {
      navigation.navigate("TaskList", { newTask: title });
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>
        Ajouter une tâche
      </Text>

      <TextInput
        placeholder="Titre de la tâche"
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 15,
          borderRadius: 5,
        }}
      />

      <Button title="Valider" color="#b3420eff" onPress={validate} />
    </View>
  );
}
