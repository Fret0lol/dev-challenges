import QRCode from "react-qr-code";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function QrCode() {
	const {url} = useParams();
  const navigate = useNavigate()

	const navigateToRoot = () => {
    navigate('/')
  }

	return (
		<div id="background">
			<div className="header">
				<img src="./logo-qr-generator.svg" alt="QR code generator logo" onClick={ navigateToRoot } />
			</div>
			<main>
				<div className="circle">
					<div id="qrcodeContainer">
						<QRCode value={url} />
					</div>
				</div>
				{/* <div className="button-container">
					<button>Download</button>
					<button>Share</button>
				</div> */}
			</main>
		</div>
	);
}
