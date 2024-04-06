// NotificationPage.tsx
import Image from "next/image";
import React from "react";
import styles from "./NotificationGrid.module.css";

export default function Home() {
  // Sample data for notifications
  const notifications = [
    {
      id: 1,
      title: "Selamat Hari Raya",
      content: "Yohoooooo!",
    },
    {
      id: 2,
      title: "Reminder",
      content: "I will kaboom u in 9/11 remember that :)",
    },
    // Add more notifications as needed
  ];

  //  Function to calculate border-radius based on content length
  const calculateBorderRadius = (content: string) => {
    // Calculate border-radius based on content length
    const contentLength = content.length;
    const borderRadius = Math.min(123, contentLength * 3); // Adjust the multiplier as needed
    return borderRadius + "px";
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Notification Grid */}
      <div className={`grid gap-6 ${styles.notificationGrid}`}>
        {notifications.map((notification) => (
          <div key={notification.id} className={styles.notificationItem}>
            <h2 className="text-lg font-semibold">{notification.title}</h2>
            <p className="text-sm">{notification.content}</p>
          </div>
        ))}
      </div>

    </main>
  );
}
