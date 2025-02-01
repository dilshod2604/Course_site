"use client";
import { useEffect, useState } from "react";
import scss from "./ChatPage.module.scss";

interface IMessage {
  username: string;
  photo: string;
  message: string;
}

function ChatPage() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [reconnectionAttempts, setReconnectionAttempts] = useState(0);
  const maxReconnectionAttempts = 5;

  const anonymousUsername = `User-${Math.floor(Math.random() * 10000)}`;

  const initializeWebSocket = () => {
    const ws = new WebSocket("wss://api.elchocrud.pro");
    ws.onopen = () => {
      console.log("WebSocket connected");
      setReconnectionAttempts(0);
    };
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (Array.isArray(data)) {
          setMessages((prevMessages) => [...prevMessages, ...data]);
        } else {
          setMessages((prevMessages) => [...prevMessages, data]);
        }
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
    setSocket(ws);
  };

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const messageData = {
        event: "message",
        username: anonymousUsername,
        photo: "/default-avatar.png",
        message: newMessage,
      };
      socket.send(JSON.stringify(messageData));
      setNewMessage("");
    }
  };

  useEffect(() => {
    initializeWebSocket();
    return () => {
      socket?.close();
    };
  }, []);

  return (
    <div className={scss.ChatPage}>
      <div className={scss.chatContainer}>
        <div className={scss.chatBody}>
          <div className={scss.messages}>
            {messages.map((message, idx) => {
              const isCurrentUser = message.username === anonymousUsername;
              const messageClass = isCurrentUser
                ? scss.myMessage
                : scss.otherMessage;
              return (
                <div key={idx} className={`${scss.message} ${messageClass}`}>
                  {!isCurrentUser && (
                    <img
                      src={message.photo || "/default-avatar.png"}
                      alt={`${message.username}'s avatar`}
                      className={scss.avatar}
                    />
                  )}
                  <div className={scss.messageContent}>
                    {!isCurrentUser && <h3>{message.username}</h3>}
                    {message.message.startsWith("http") ? (
                      <a
                        href={message.message}
                        // target="_blank"
                        rel="noopener noreferrer"
                      >
                        {message.message.length > 50
                          ? `${message.message.slice(0, 50)}...`
                          : message.message}
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
