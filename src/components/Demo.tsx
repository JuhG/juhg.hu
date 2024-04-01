import { useEffect, type FC, type ReactNode, useRef, useState } from "react";

type DemoProps = {
  children: ReactNode;
  intro: boolean;
};

export const Demo: FC<DemoProps> = ({ children, intro = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) {
      return;
    }
    const scroller = () => {
      if (!ref.current) {
        return;
      }
      ref.current.scrollTop = 400;
      setTimeout(() => {
        if (!ref.current) {
          return;
        }
        ref.current.scrollTop = 0;
      }, 1500);
    };
    scroller();
    const interval = setInterval(scroller, 3200);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div
      data-component="root"
      data-intro={intro}
      className="relative mx-auto my-8 h-[300px] w-[400px] max-w-full"
    >
      <div
        ref={ref}
        data-component="scroller"
        className="h-full w-full overflow-y-auto scroll-smooth rounded border border-gray-300 bg-gray-50"
      >
        <div className="h-[900px]">
          {children}
          <Content />
        </div>

        <div
          data-component="scrollbar"
          className="absolute right-0 top-0 h-8 w-1.5 rounded-md bg-amber-900"
        />
      </div>

      <button
        className="absolute bottom-0 left-0 p-2 text-amber-900"
        onClick={() => setRunning((prev) => !prev)}
      >
        {running ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

const Content: FC = () => {
  return (
    <div className="relative px-16">
      <div className="h-12" />
      <div className="h-3 w-1/2 rounded-md bg-gray-200" />
      <div className="h-6" />
      <div className="h-2 w-4/5 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-3/4 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-4/5 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-3/5 rounded-md bg-gray-200" />
      <div className="h-6" />
      <div className="mx-auto h-20 w-4/5 rounded-md bg-gray-100" />
      <div className="h-6" />
      <div className="h-2 w-4/5 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-3/4 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-4/5 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-3/5 rounded-md bg-gray-200" />
      <div className="h-6" />
      <div className="h-2 w-4/5 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-3/4 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-4/5 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-3/5 rounded-md bg-gray-200" />
      <div className="h-6" />
      <div className="mx-auto h-1 w-1/2 rounded-md bg-gray-100" />
      <div className="h-6" />
      <div data-component="intro" className="h-3 w-2/3 rounded-md bg-gray-200" />
      <div className="h-6" />
      <div className="h-2 w-4/5 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-3/4 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-4/5 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-3/5 rounded-md bg-gray-200" />
      <div className="h-6" />
      <div className="flex gap-4">
        <div data-component="intro" className="h-16 w-1/2 rounded-md bg-gray-100" />
        <div data-component="intro" className="h-16 w-1/2 rounded-md bg-gray-100" />
      </div>
      <div className="h-6" />
      <div className="h-2 w-4/5 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-3/4 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-4/5 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-3/5 rounded-md bg-gray-200" />
      <div className="h-6" />
      <div className="h-2 w-4/5 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-3/4 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-4/5 rounded-md bg-gray-200" />
      <div className="h-2" />
      <div className="h-2 w-3/5 rounded-md bg-gray-200" />
      <div className="h-6" />
      <div className="mx-auto h-1 w-1/2 rounded-md bg-gray-100" />
    </div>
  );
};
