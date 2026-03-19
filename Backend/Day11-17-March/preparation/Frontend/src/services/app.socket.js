import { io } from "socket.io-client";

let socket;

export const connectSocket = () => {
  socket = io("http://localhost:3000");
};

export const addListener = (event, callback) => {
  socket.on(event, callback);
};

export const emitEvent = (event, data) => {
  socket.emit(event, data);
};
