"use client";
import { useEffect, useState, useRef } from "react";
import scss from "./ChatPage.module.scss";

interface IMessage {
  username: string;
  photo: string;
  message: string;
}

function ChatPage() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [reconnectionAttempts, setReconnectionAttempts] = useState(0);
  const maxReconnectionAttempts = 5;

  const socketRef = useRef<WebSocket | null>(null);
  const usernameRef = useRef(`User-${Math.floor(Math.random() * 10000)}`); // Запоминаем имя пользователя

  const initializeWebSocket = () => {
    const ws = new WebSocket("wss://api.elchocrud.pro");

    ws.onopen = () => {
      console.log("WebSocket connected");
      setReconnectionAttempts(0);
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, ...(Array.isArray(data) ? data : [data])]);
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.warn("WebSocket disconnected");
      if (reconnectionAttempts < maxReconnectionAttempts) {
        setReconnectionAttempts((prev) => prev + 1);
        setTimeout(initializeWebSocket, 1000);
      }
    };

    socketRef.current = ws;
  };

  const sendMessage = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      const messageData = {
        event: "message",
        username: usernameRef.current, // Используем одно и то же имя
        photo: "/default-avatar.png",
        message: newMessage,
      };
      socketRef.current.send(JSON.stringify(messageData));
      setNewMessage("");
    } else {
      console.warn("WebSocket is not open");
    }
  };

  useEffect(() => {
    initializeWebSocket();
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  return (
    <div className={scss.ChatPage}>
      <div className={scss.chatContainer}>
        <div className={scss.chatBody}>
          <div className={scss.messages}>
            {messages.map((message, idx) => {
              const isCurrentUser = message.username === usernameRef.current;
              const messageClass = isCurrentUser ? scss.myMessage : scss.otherMessage;
              return (
                <div key={idx} className={`${scss.message} ${messageClass}`}>
                  {!isCurrentUser && (
                    <img src={message.photo || "/default-avatar.png"} alt={`${message.username}'s avatar`} className={scss.avatar} />
                  )}
                  <div className={scss.messageContent}>
                    {!isCurrentUser && <h3>{message.username}</h3>}
                    {message.message.startsWith("http") ? (
                      <a href={message.message} rel="noopener noreferrer">
                        {message.message.length > 50 ? `${message.message.slice(0, 50)}...` : message.message}
                      </a>
                    ) : (
                      <p>{message.message}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={scss.messageInput}>
            <input
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              value={newMessage}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
