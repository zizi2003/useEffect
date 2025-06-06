import { useEffect, useState } from "react";

function ProgressBar({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 17); //زمان جدید => زمان قبلی - 10
    }, 10);

    return () => {
      clearInterval(interval); //برای جلوگیری از فرایند های مداوم در پشت صحنه از تابع کلیراینترول استفاده میکنیم
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}

export default ProgressBar;
