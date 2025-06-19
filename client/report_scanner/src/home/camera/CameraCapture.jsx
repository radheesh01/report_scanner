import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./CameraCapture.css";

function CameraCapture() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Start the webcam
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Camera access denied or not available", err);
    }
  };

  // Capture image and send to backend
  const captureAndSubmit = async () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 300, 200);
    const dataUrl = canvasRef.current.toDataURL("image/png");

    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: dataUrl }),
      });

      const result = await response.json();
      navigate("/result", { state: result });
    } catch (error) {
      console.error("Image submission failed:", error);
      navigate("/result", { state: { translated: "Error analyzing image." } });
    }
  };

  return (
    <div className="camera-container">
      <h2 className="camera-title">Live Camera Feed</h2>
      <video ref={videoRef} autoPlay className="camera-video" />
      <canvas ref={canvasRef} width={300} height={200} style={{ display: "none" }} />
      <div className="camera-buttons">
        <button className="camera-button start" onClick={startCamera}>
          Start Camera
        </button>
        <button className="camera-button capture" onClick={captureAndSubmit}>
          Capture & Analyze
        </button>
      </div>
    </div>
  );
}

export default CameraCapture;


