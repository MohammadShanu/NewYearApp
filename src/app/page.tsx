'use client';

import { useEffect, useState } from 'react';

const CountdownTimer: React.FC = () => {
  const targetDate = new Date('2025-01-01T00:00:00').getTime(); // Set target date here
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = targetDate - currentTime;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft('00:00:00:00');
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(
          `${padNumber(days)}:${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const padNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="textContainer">
      <h1 className="text">New Year Countdown</h1>
      <h1 className="text">{timeLeft}</h1>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="background">
      <CountdownTimer />
    </div>
  );
};

export default Home;
