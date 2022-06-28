import {useEffect, useState} from 'react';
import { Item } from './types';
import {storeData, getData} from './storage';

const useTimer = ({Active, setActive, counter, setCounter, started, setStarted} : {Active:boolean, setActive:React.Dispatch<React.SetStateAction<boolean>>, counter:number, setCounter:React.Dispatch<React.SetStateAction<number>>, started:boolean, setStarted:React.Dispatch<React.SetStateAction<boolean>>}) => {

    var timer:NodeJS.Timer;
  
    //useTimer()
  
    useEffect(() => {
  
      if (Active && counter != 0 && started) {
        timer = setInterval(() => {
            setCounter((old) => old - 100);
        }, 100);
      }
  
      if(!Active) {
        if (timer) clearInterval(timer);
      }
  
      return ()=> clearInterval(timer);
  
    }, [Active])

    useEffect(() => {
        if (!started) {
            setActive(false);
            clearInterval(timer);
        }
        if (started){
            setActive(true);
        }
        if (started && counter == 0) setStarted(false);
    }, [started])
  
    useEffect(() => {
  
      if (counter == 0) {
        setStarted(false);
        setActive(false);
        clearInterval(timer);
      }
  
    },[counter])

}

const useStorage = ({Tasks, setTasks, newTask, setNewTask} : {Tasks:Item[], setTasks:React.Dispatch<React.SetStateAction<Item[]>>, newTask:Item, setNewTask:React.Dispatch<React.SetStateAction<Item>>}) => {

    useEffect(() => {
      if (newTask.task.length > 1){
        storeData(newTask).then(e => {
          setTasks(e.reverse().sort((item:Item) => item.completed ? 1 : -1));
        });
      }
    }, [newTask])

    useEffect(() => {
        getData().then(e => {
            setTasks(e.reverse().sort((item:Item) => item.completed ? 1 : -1));
        });
    }, [])
}

export {useTimer, useStorage};