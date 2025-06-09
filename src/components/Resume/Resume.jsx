import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import resumePdf from "../Resume/resume.pdf";
import resumeImage from "../Resume/Resume.jpg";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Russel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={styles.container}>
      <div style={styles.controls}>
        <button
          onClick={handleDownload}
          style={styles.downloadButton}
          title='Download Resume PDF'
        >
          <FontAwesomeIcon icon={faDownload} style={styles.actionIcon} />
          Download PDF
        </button>
      </div>

      <div style={styles.resumeContainer}>
        <img
          src={resumeImage}
          alt='Russel Gem O. Rojo Resume'
          style={styles.resumeImage}
        />
      </div>

      {/* Resume Info */}
      <div style={styles.infoSection}>
        <h2 style={styles.infoTitle}>About This Resume</h2>
        <p style={styles.infoText}>
          This resume is displayed as an image for optimal viewing and is
          available for download in PDF format.
        </p>

        <div style={styles.quickSummary}>
          <h3 style={styles.summaryTitle}>Quick Summary</h3>
          <ul style={styles.summaryList}>
            <li style={styles.summaryItem}>
              Computer Engineering graduate from Silliman University
            </li>
            <li style={styles.summaryItem}>
              Proficient in React, Node.js, React Native, Laravel, NextJS and
              MySQL
            </li>
            <li style={styles.summaryItem}>
              Strong background in full-stack development
            </li>
            <li style={styles.summaryItem}>
              Experience with agile methodologies and team collaboration
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#000000",
    padding: "20px",
    fontFamily:
      "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  controls: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "20px",
    position: "sticky",
    top: "20px",
    zIndex: 10,
  },
  downloadButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 20px",
    backgroundColor: "#3b82f6",
    border: "2px solid #3b82f6",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    transition: "all 0.3s ease",
    outline: "none",
  },
  actionIcon: {
    fontSize: "16px",
  },
  resumeContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  resumeImage: {
    width: "100%",
    height: "auto",
    maxWidth: "100%",
    display: "block",
    backgroundColor: "#ffffff",
  },
  infoSection: {
    maxWidth: "1000px",
    margin: "0 auto",
    backgroundColor: "#111111",
    padding: "40px",
    borderRadius: "12px",
    border: "1px solid #374151",
  },
  infoTitle: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "20px",
  },
  infoText: {
    fontSize: "16px",
    color: "#d1d5db",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  quickSummary: {
    marginTop: "20px",
  },
  summaryTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "15px",
  },
  summaryList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  summaryItem: {
    fontSize: "16px",
    color: "#d1d5db",
    marginBottom: "8px",
    paddingLeft: "20px",
    position: "relative",
  },
};

const styleSheet = document.createElement("style");
styleSheet.innerText = `
  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .summary-item::before {
    content: "•";
    color: #3b82f6;
    font-weight: bold;
    position: absolute;
    left: 0;
  }

  @media (max-width: 768px) {
    .resume-container {
      margin: 0 10px !important;
    }

    .controls {
      justify-content: center !important;
      margin: 0 10px 20px 10px !important;
    }

    .info-section {
      margin: 0 10px !important;
      padding: 20px !important;
    }

    .container {
      padding: 10px !important;
    }
    
    .resume-image {
      width: 100% !important;
    }
  }
`;
if (!document.head.querySelector("style[data-resume-styles]")) {
  styleSheet.setAttribute("data-resume-styles", "true");
  document.head.appendChild(styleSheet);
}

export default Resume;
