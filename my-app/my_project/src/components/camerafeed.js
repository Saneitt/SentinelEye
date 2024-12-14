import React, { useEffect, useRef } from 'react';
import './camerafeed.css';
import { Box, Typography, Paper } from '@mui/material';

function CameraFeed() {
  const videoRef = useRef(null);

  useEffect(() => {
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera: ", error);
      }
    };

    getCameraStream();

    const videoElement = videoRef.current;
    return () => {
      if (videoElement && videoElement.srcObject) {
        const stream = videoElement.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <Paper elevation={3} className="camera-feed-container">
      <Typography variant="h5" className="camera-feed-title" gutterBottom>
        Live Camera Feed
      </Typography>
      <Box component="video" ref={videoRef} autoPlay playsInline className="camera-feed-video" />
    </Paper>
  );
}

export default CameraFeed;
