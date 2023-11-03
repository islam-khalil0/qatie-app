import { Html5QrcodeScanner } from "html5-qrcode";
import BgVideo from "./assets/video-bg.mp4";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const success = (result) => {
      scanner.clear();
      setScanResult(result);
    };

    const error = (error) => {
      console.warn("err: " + error);
    };

    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);
  }, []);

  return (
    <>
      <div className="container">
        <video className="videoTag" autoPlay loop muted>
          <source src={BgVideo} type="video/mp4" />
        </video>
        <div className="content">
          {scanResult ? (
            <div>
              success : <p>{scanResult}</p>
            </div>
          ) : (
            <div id="reader"></div>
          )}
          <h3 style={{ color: "white" }}>قاطع منتجاتهم</h3>
        </div>
      </div>
    </>
  );
}

export default App;
