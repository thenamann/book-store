'use client';

import { useEffect, useState } from 'react';
import api from '@/utils/api'; // Adjust the path based on your utils location.

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/ping')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold">{message || 'Loading...'}</h1>
    </main>
  );
}
