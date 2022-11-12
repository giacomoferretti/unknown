import { useEffect, useState } from "react";

const Webcam = () => {
  navigator.mediaDevices.enumerateDevices().then((c) => console.log(c));

  return <></>;
};

const Debug = () => {
  const [webcams, setWebcams] = useState<MediaDeviceInfo[]>([]);

  useEffect(() => {
    // navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 640, height: 480 } })

    navigator.mediaDevices.enumerateDevices().then((c) => {
      setWebcams(c.filter((v) => v.kind === "videoinput"));
    });
  }, []);

  return (
    <>
      <h1>Debug</h1>
      <h2>Available webcams:</h2>
      {webcams.map((cam) => {
        return (
          <p key={cam.deviceId + cam.groupId + cam.kind}>
            {cam.deviceId} {cam.label}
          </p>
        );
      })}
    </>
  );
};

const _ = {
  Webcam,
  Debug,
};

export default _;
