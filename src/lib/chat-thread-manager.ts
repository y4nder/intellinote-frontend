import { setChatThreadId } from "@/redux/slice/chat-agent";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

type ThreadMap = { [id: string]: string };

const STORAGE_KEY = "thread_map";
const GLOBAL_KEY = "global";

function loadFromStorage(): ThreadMap {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    console.warn("Failed to parse thread map.");
    return {};
  }
}

function saveToStorage(threads: ThreadMap) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(threads));
}

export function useThreadManager() {
  const dispatch = useDispatch();
  let threads = loadFromStorage();

  const setThreadId = useCallback((id: string, threadId: string) => {
    threads[id] = threadId;
    saveToStorage(threads);
    dispatch(setChatThreadId(threadId));
  }, [dispatch]);

  const getThreadId = useCallback((id: string): string | undefined => {
    console.log("getting thread id");
    return threads[id];
  }, []);

  const setGlobalThread = useCallback((threadId: string) => {
    threads[GLOBAL_KEY] = threadId;
    saveToStorage(threads);
    dispatch(setChatThreadId(threadId));
  }, [dispatch]);

  const getGlobalThread = useCallback((): string | undefined => {
    return threads[GLOBAL_KEY];
  }, []);

  const clearThread = useCallback((threadId: string | null = null) => {
    if(!threadId){
        delete threads[GLOBAL_KEY];
    } else {
        delete threads[threadId]; 
    }
    dispatch(setChatThreadId(undefined));    
  }, [dispatch]);

  const clear = useCallback(() => {
    threads = {};
    localStorage.removeItem(STORAGE_KEY);
    dispatch(setChatThreadId(undefined));
  }, [dispatch]);

  return {
    clearThread,
    setThreadId,
    getThreadId,
    setGlobalThread,
    getGlobalThread,
    clear
  };
}
