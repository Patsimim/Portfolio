import React, { useState, useEffect } from "react";

const OpeningPage = ({ onComplete }) => {
  const [isDisintegrating, setIsDisintegrating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisintegrating(true);
      setTimeout(onComplete, 1500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        margin: 0,
        padding: 0,
      }}
    >
      <style jsx>{`
        .bg-noise {
          background-image:
            radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
            radial-gradient(circle at 70% 50%, white 1px, transparent 1px);
          background-size:
            3px 3px,
            5px 5px;
          background-position:
            0 0,
            2px 2px;
        }

        @keyframes staticDisintegrate {
          0% {
            opacity: 1;
            filter: blur(0px);
            transform: scale(1);
          }
          25% {
            opacity: 0.8;
            filter: blur(1px);
            transform: scale(1.02);
          }
          50% {
            opacity: 0.6;
            filter: blur(2px);
            transform: scale(1.05);
          }
          75% {
            opacity: 0.3;
            filter: blur(4px);
            transform: scale(1.1);
          }
          100% {
            opacity: 0;
            filter: blur(8px);
            transform: scale(1.2);
          }
        }

        @keyframes electricFlicker {
          0%,
          100% {
            opacity: 1;
          }
          10% {
            opacity: 0.8;
          }
          20% {
            opacity: 1;
          }
          30% {
            opacity: 0.9;
          }
          40% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
          60% {
            opacity: 1;
          }
          70% {
            opacity: 0.85;
          }
          80% {
            opacity: 1;
          }
          90% {
            opacity: 0.9;
          }
        }

        @keyframes sparkle {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        .text-disintegrate {
          animation: staticDisintegrate 1.5s ease-out forwards;
        }

        .electric-flicker {
          animation: electricFlicker 0.3s infinite;
        }

        .spark {
          position: absolute;
          width: 3px;
          height: 3px;
          background: white;
          border-radius: 50%;
          animation: sparkle 0.6s ease-out infinite;
        }

        .spark:nth-child(1) {
          top: 20%;
          left: 15%;
          animation-delay: 0.1s;
        }
        .spark:nth-child(2) {
          top: 30%;
          right: 20%;
          animation-delay: 0.2s;
        }
        .spark:nth-child(3) {
          bottom: 25%;
          left: 25%;
          animation-delay: 0.3s;
        }
        .spark:nth-child(4) {
          bottom: 35%;
          right: 15%;
          animation-delay: 0.4s;
        }
        .spark:nth-child(5) {
          top: 50%;
          left: 50%;
          animation-delay: 0.5s;
        }
        .spark:nth-child(6) {
          top: 15%;
          left: 60%;
          animation-delay: 0.6s;
        }
        .spark:nth-child(7) {
          bottom: 20%;
          left: 70%;
          animation-delay: 0.7s;
        }
        .spark:nth-child(8) {
          top: 70%;
          right: 30%;
          animation-delay: 0.8s;
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(to bottom right, rgba(147, 51, 234, 0), rgba(59, 130, 246, 0.1))",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage: `
          radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
        `,
          backgroundSize: "4px 4px, 6px 6px",
          backgroundPosition: "0 0, 3px 3px",
        }}
      />

      <div style={{ textAlign: "center" }}>
        <h1
          className={isDisintegrating ? "text-disintegrate" : ""}
          style={{
            fontSize: "4rem",
            fontFamily:
              'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: "100",
            color: "white",
            letterSpacing: "0.1em",
            margin: 0,
            padding: 0,
            textAlign: "center",
            textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
          }}
        >
          <span className={isDisintegrating ? "electric-flicker" : ""}>
            Russel Rojo Portfolio
          </span>
        </h1>
        {isDisintegrating && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
            <div className='spark'></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpeningPage;
