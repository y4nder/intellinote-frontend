import * as signalR from "@microsoft/signalr";
import { GetAuthKey } from "./local-stores";

export const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:7050/note-hub", {
    accessTokenFactory : () => GetAuthKey()?.access_token!
  })
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