import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Timer from "./src/components/Timer";
import colors from "./src/styles";
import { useEffect, useState } from "react";
import { useTimer, useStorage } from "./src/utils/custom-hooks";
import Btn from "./src/components/BtnComponent";
import { Item } from "./src/utils/types";
import TaskForm from "./src/components/TaskFormComponent";
import TaskList from "./src/components/TaskListComponent";
import {editArrayTasks} from './src/utils/storage';

export default function App() {
  //storeData({task:'test', completed: false}).then(e => console.log(e));

  const [started, setStarted] = useState(false);
  const [Active, setActive] = useState(false);
  const [counter, setCounter] = useState(0);

  const [Tasks, setTasks] = useState([] as Item[]);
  const [newTask, setNewTask] = useState({
    task: "",
    completed: false,
  } as Item);

  useEffect(() => {
    if (counter == 100 && started) {
      let tab = [...Tasks];
      const finded = tab.findIndex(task => task.completed == false);
      console.log(finded)
      if (finded != -1) { 
        tab[finded] = {task : tab[finded].task, completed: true} as Item;  
        editArrayTasks(tab).then((e:any) => {
          console.log(e)
          setTasks(e);
        });
      }
    }
  }, [counter])

  const changeStatus = () => {
    if (Active) return setActive(false);
    return setActive(true);
  };

  const returnPlayPause = () => {
    if (Active) return "Pause";
    return "Play";
  };

  // Custom hooks
  useStorage({ Tasks, setTasks, newTask, setNewTask });
  useTimer({ Active, setActive, counter, setCounter, started, setStarted });

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primary, fontSize: 42, margin: 16 }}>
        {" "}
        Weird Timer !
      </Text>
      <Timer started={started} setCounter={setCounter} time={counter}></Timer>
      {started && counter != 0 ? (
        <View style={{ flexDirection: "row", margin: 8 }}>
          <Btn secondary={false} onPress={() => setStarted(false)}>
            Stop
          </Btn>
          <Btn secondary={Active} onPress={changeStatus}>
            {returnPlayPause()}
          </Btn>
        </View>
      ) : (
        <View style={{ flexDirection: "row", margin: 8 }}>
          <Btn secondary={true} onPress={() => setStarted(true)}>
            Start
          </Btn>
        </View>
      )}
      <TaskForm setNewTask={setNewTask} />
      <TaskList Tasks={Tasks} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
});
