import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Root() {
  const input = useRef()
  const navigate = useNavigate()

  const navigateToQRCode = () => {
    navigate(`/${input.current.value}`)
  }

  return (
    <>    
      <div id="background" className="root">
        <div className="logo" ></div>
        <div className="input-container">
          <input ref={ input } type="text" placeholder="Enter an url" />
          <button onClick={ navigateToQRCode }>QR code</button>
        </div>
      </div>
    </>
  );
}