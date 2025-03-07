import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(localTimeZone);

  useEffect(() => {
    // Target date: July 19, 2025 at 13:00
    const targetDate = new Date('2025-07-19T13:00:00');

    const calculateTimeRemaining = () => {
      const currentTime = new Date();

      const difference = targetDate - currentTime;

      // If the target date has passed
      if (difference <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    // Calculate immediately and then set up the interval
    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='section_layout bg_dark'>
      <section className='count_down_section'>
        <div className='item'>
          <h4>{timeRemaining.days}</h4>
          <span className='date_label'>Days</span>
        </div>

        <div className='item'>
          <h4>{timeRemaining.hours}</h4>
          <span className='date_label'>Hours</span>
        </div>

        <div className='item'>
          <h4>{timeRemaining.minutes}</h4>
          <span className='date_label'>Minutes</span>
        </div>

        <div className='item'>
          <h4>{timeRemaining.seconds}</h4>
          <span className='date_label'>Seconds</span>
        </div>
      </section>
    </div>
  );
};

export default CountdownTimer;
