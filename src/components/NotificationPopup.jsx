import React, { useState, useEffect } from 'react';
import matter from 'gray-matter';

const NotificationPopup = ({ isOpen, onClose, setUnreadCount }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifications = async () => {
      const cmsNotifications = [];
      const modules = import.meta.glob('/content/notifications/*.md', { as: 'raw' });

      for (const path in modules) {
        const content = await modules[path]();
        const { data } = matter(content);
        cmsNotifications.push({
          id: path, // Use path as a unique ID for CMS notifications
          message: data.message,
          date: data.date,
          priority: data.priority,
          read: false, // Default to unread for CMS notifications
          isCMS: true,
        });
      }

      // Sort CMS notifications by date, newest first
      cmsNotifications.sort((a, b) => new Date(b.date) - new Date(a.date));

      const storedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];

      // Merge CMS notifications with stored notifications
      // Prioritize stored 'read' status for CMS notifications if they exist in localStorage
      const mergedNotifications = cmsNotifications.map(cmsNotif => {
        const storedVersion = storedNotifications.find(sNotif => sNotif.id === cmsNotif.id);
        return storedVersion ? { ...cmsNotif, read: storedVersion.read } : cmsNotif;
      });

      // Add any stored notifications that are not CMS notifications (e.g., the welcome message)
      const nonCmsStoredNotifications = storedNotifications.filter(sNotif => !sNotif.isCMS);
      const finalNotifications = [...mergedNotifications, ...nonCmsStoredNotifications];

      // Ensure a welcome message if no other notifications exist
      if (finalNotifications.length === 0) {
        finalNotifications.push({
          id: 'welcome',
          message: 'Bem-vindo(a) ao Wilds! Fique por dentro das últimas notícias e atualizações aqui.',
          read: false,
          timestamp: new Date().toISOString(),
        });
      }

      setNotifications(finalNotifications);
    };

    loadNotifications();
  }, []);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
    setUnreadCount(notifications.filter(notif => !notif.read).length);
  }, [notifications, setUnreadCount]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const unreadCount = notifications.filter(notif => !notif.read).length;

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-72 rounded-lg shadow-lg border border-gray-200 dark:border-[#1f1f1f] bg-white dark:bg-[#141414] overflow-hidden animate-fadeIn"
         style={{
           backdropFilter: 'blur(12px) saturate(180%)',
           WebkitBackdropFilter: 'blur(12px) saturate(180%)'
         }}>
      <div className="px-4 py-3 border-b border-gray-200 dark:border-[#1f1f1f] flex justify-between items-center">
        <p className="text-sm font-medium text-gray-900 dark:text-[#e5e5e5]">Notificações ({unreadCount})</p>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
          >
            Marcar todas como lidas
          </button>
        )}
      </div>
      <div className="py-1 max-h-60 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="px-4 py-2 text-sm text-gray-700 dark:text-[#a3a3a3]">
            Nenhuma notificação.
          </div>
        ) : (
          notifications.map(notif => (
            <div
              key={notif.id}
              className={`px-4 py-2 text-sm cursor-pointer ${
                notif.read
                  ? 'text-gray-500 dark:text-[#a3a3a3]'
                  : 'text-gray-900 dark:text-[#e5e5e5] bg-blue-50 dark:bg-[#1a1a1a] hover:bg-blue-100 dark:hover:bg-[#2a2a2a]'
              } transition-colors border-b border-gray-100 dark:border-[#1f1f1f] last:border-b-0`}
              onClick={() => markAsRead(notif.id)}
            >
              <p>{notif.message}</p>
              <p className="text-xs text-gray-400 dark:text-[#666]">
                {new Date(notif.date || notif.timestamp).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
      <div className="border-t border-gray-200 dark:border-[#1f1f1f] p-2 text-center">
        <button onClick={onClose} className="text-xs text-primary-600 dark:text-primary-400 hover:underline">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default NotificationPopup;
