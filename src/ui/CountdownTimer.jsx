import React, { useState, useEffect } from 'react';

// Reusable component for a single time block (Date, Hours, etc.)
const TimeBlock = ({ label, value }) => (
  <div className='flex flex-col items-center mt-5 md:mt-0min-w-[50px] md:min-w-[70px]'>
    <span className='text-xs md:text-sm font-medium text-gray-800 tracking-wider'>
      {label}
    </span>
    {/* Time Value (02, 10, etc.) */}
    <span className='text-xl md:text-4xl font-inter font-semibold text-black leading-none'>
      {value}
    </span>
  </div>
);
// Separator element (the small red colon)
const Separator = () => (
  <span className='text-xl md:text-4xl text-primary mx-1 md:mx-1.5 leading-none pb-0.5'>
    :
  </span>
);

const CountdownTimer = () => {
  const [currentTime, setCurrentTime] = useState({
    date: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const format = (num) => String(num).padStart(2, '0');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setCurrentTime({
        date: format(now.getDate()),
        hours: format(now.getHours()),
        minutes: format(now.getMinutes()),
        seconds: format(now.getSeconds()),
      });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const { date, hours, minutes, seconds } = currentTime;

  return (
    <div className='flex items-end justify-center'>
      <TimeBlock label='Day' value={date} />
      <Separator />
      <TimeBlock label='Hours' value={hours} />
      <Separator />
      <TimeBlock label='Minutes' value={minutes} />
      <Separator />
      <TimeBlock label='Seconds' value={seconds} />
    </div>
  );
};

export default CountdownTimer;
