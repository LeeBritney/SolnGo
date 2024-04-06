'use client'
import { useRef, useState, useEffect } from 'react';


export default function WebcamVideo() {
  const [mediaStream, setMediaStream] = useState<MediaStream>();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setupWebcamVideo();
  }, [mediaStream]);

  async function setupWebcamVideo() {
    if (!mediaStream) {
      await setupMediaStream();
    } else {
      const videoCurr = videoRef.current;
      if (!videoCurr) return;
      const video = videoCurr as HTMLVideoElement;
      if (!video.srcObject) {
        video.srcObject = mediaStream;
      }
    }
  }

  async function setupMediaStream() {
    try {
      const ms = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: true, // Adjust as needed
      });
      setMediaStream(ms);
    } catch (e) {
      alert('Camera is disabled');
      throw e;
    }
  }

  return (
    <div className="w-full h-full relative z-0">
      <video className="object-cover h-full w-full" ref={videoRef} autoPlay muted />
    </div>
  );
}
