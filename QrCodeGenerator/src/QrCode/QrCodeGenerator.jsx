import { useState } from "react";
export const QrCodeGen=()=>{
    const [img,setImg] = useState('');
    const [inputData,setInputData] = useState('');
    const [inputSize,setInputSize] = useState('');
    const [loading,setLoading] = useState(false);

    async function GenerateQR(){
        setLoading(true);
        try{
           const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputData)}`;
           setImg(url);
        }
        catch(error){
            console.error("Error is ",error);
        }
        finally{
            setLoading(false);
        }

    }

    function DownloadQr(){
        fetch(img).then((response)=>response.blob())
        .then((blob)=>{
            const link = document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    
    return (
        <>
         <div className="code-container">
            <h1 className="heading">QR Code Generator</h1>
            {/* Loading and image */}
            {loading && <p>Please Wait...</p>}
            {img && <img src={img}  className="image" />}
            {/* User Inputs */}
            <label htmlFor="dataLink" className="input-label">Data Link for the QR:</label>
            <input type="text" id="dataLink"  value={inputData} onChange={(e)=>setInputData(e.target.value)}></input>
            <label htmlFor="dataSize" className="input-label" >image-size e.g.150</label>
            <input type="text" id="dataSize" value={inputSize}  onChange={(e)=>setInputSize(e.target.value)}></input>
            {/* buttons */}
            <div className="button">
            <button className="Generate-Qr" onClick={GenerateQR} disabled={loading}>Generate QrCode</button>
            <button className="Download-Qr" onClick={DownloadQr}>Download QrCode</button>
            </div>
         </div>
        </>
    )
}