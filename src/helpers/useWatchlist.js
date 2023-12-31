import { useState, useEffect } from "react";

export default function useWatchlist() {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    const localList = JSON.parse(localStorage.getItem("watchList")) || [];
    if (localList.length) setList([...localList]);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(list));
    console.log(list);
  }, [list]);
  
  const addToList = (dramaData) => {
    setList((oldList) => [...oldList, dramaData]);
  };
  
  const removeFromList = (id) => {
    setList((oldList) => oldList.filter((item) => item.id !== id));
  };
  
  return {
    list,
    addToList,
    removeFromList
  };
}