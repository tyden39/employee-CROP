import { MessageInstance } from "antd/es/message/interface";
import { create } from "zustand";

interface GlobalStoreProps {
  notification?: MessageInstance,
  setNotification: (newNotification: MessageInstance) => void
}

const useGlobalStore = create<GlobalStoreProps>((set) => ({
  setNotification: (newNotification: MessageInstance) => set(state => ({...state, notification: newNotification}))
}))

export default useGlobalStore