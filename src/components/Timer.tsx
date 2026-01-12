import { useEffect, useRef, useState } from "react";

export default function Timer({
  onFinish,
}: {
  onFinish: (seconds: number) => void;
}) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  return (
    <div>
      <h3>
        {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
      </h3>

      {!running ? (
        <button onClick={() => setRunning(true)}>Iniciar</button>
      ) : (
        <button onClick={() => setRunning(false)}>Pausar</button>
      )}

      <button
        onClick={() => {
          setRunning(false);
          if (intervalRef.current) clearInterval(intervalRef.current);

          onFinish(seconds);

          setSeconds(0);
        }}
      >
        Finalizar
      </button>
    </div>
  );
}
