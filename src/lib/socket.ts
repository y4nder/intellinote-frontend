import * as signalR from "@microsoft/signalr";



export const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:7050/note-hub")
  .configureLogging(signalR.LogLevel.Information)
  .withAutomaticReconnect()
  .build();

export const startConnection = async () => {
    if (connection.state === signalR.HubConnectionState.Disconnected) {
      try {
        await connection.start();
        console.log("SignalR connected");
      } catch (err) {
        console.error("SignalR connection failed", err);
      }
    }
};











