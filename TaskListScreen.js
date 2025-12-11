import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

export default function TaskListScreen({ navigation, route }) {
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    if (route.params?.newTask) {
      setTasks(prevTasks => [...prevTasks, { title: route.params.newTask }]);
    }
  }, [route.params?.newTask]);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>
        Liste des tâches
      </Text>

      
      {tasks.map((task, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate("TaskDetails", { task })
          }
        >
          <Text style={{ fontSize: 18, marginVertical: 5 }}>
            • {task.title}
          </Text>
        </TouchableOpacity>
      ))}

      
      <Button
        title="Ajouter une tâche"
        color="#b3420eff"
        onPress={() => navigation.navigate("AddTask")}
      />
    </View>
  );
}
