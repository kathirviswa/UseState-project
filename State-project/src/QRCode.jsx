import { useState } from "react";

 import { Loader } from 'lucide-react';
const QrCode = () => {

     const [Qrimg, setQrimg] = useState("");
     const [loading, SetLoading] = useState(false);//boolean..
     //To set the customize OwnLink to the qrdata (Variable) to store input field in (value) Attribute.
     const [qrData, setQrData] = useState("https://pickmydoc.vercel.app/"); 
     const [qrSize, setQrSize] = useState("150");
    
    //  function generateQrCode(){
    // // setQrimg ("public/Scanner.jpg");
       
    // }
      async function generateQrCode(){
        SetLoading(true);  // setdefault in (setLoading = true)
        
      try {
      //  const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;
         
      //updated for qrcode image size change
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
        setQrimg(url); 
        } 
      catch (error) {
         console.error("Error generating QR Code, " + error);
        } 
      finally {
        SetLoading(false); // set back to false when done
        }
      }

// downloadQRCode functionality call
   function downloadQR() {
    // console.log("Downloading QR Code");
    fetch (Qrimg)//To store the Qrimg variable useState
    .then ((response)=>response.blob()) //blob means filetypes  
    //blob data to insert into the <a> tag.create a new variables.
    .then((blob)=>{
      const link = document.createElement("a");//create a anchortag to Pass..
      link.href = URL.createObjectURL(blob)//To assign the link to href from blog data. and blogdata will be converted into object format to pass the bolb.
      link.download ="qrcode.png"; //download qrcode image from server and convert it into PNG format to  
      document.body.appendChild(link); //append the link to the body. appendChild means its add the anchortag.(link)
      link.click(); //to click the link to download the image.
      document.body.removeChild(link);//remove the link from the body. removeChild means its Remove the Anchortag (link)
    })   
  }
    // Noted Functionality downlodeQr : When there is blob data inside an <a> tag, it is converted into an 
    // object URL. This object URL represents an image (like a QRcode.png). We then trigger an automatic click 
    // event on the <a> tag to initiate the download (e.g., qrcode.png). As a result, clicking this function
    // will automatically download the image.
   
    return (
     <div className="App-container w-full h-screen flex flex-col  items-center justify-center">
      
    <h1 className=" text-red-500 font-semibold text-[18px] underline p-[105px,0px] "> 
    QR Code Generator</h1>
        
    {loading && <Loader className=" animate-spin "/> }

{/*Having a Qrimage content automatically Render to  generated Qrimage...Noted Empty Usestate */}
     {Qrimg && <img src= {Qrimg} className="QRimage p-2 shadow-md  flex "/>}
   <div>
        <label htmlFor="dataInput" className="input-label  block mb-2 text-blue-300 text-[15px] font-medium pt-3">
            Enter a text to generate QR Code :
        </label>
        <input type="text"
            id="dataInput"
            value={qrData}
            onChange={(e) => setQrData(e.target.value)} //what we type to (Exp:Link) set the value
            className="input-field p-3 mb-5 w-full text-[15px] border-2 border-blue-400"
            placeholder="Enter Data for QR Code Number"
        />

   <label htmlFor="sizeInput" className="input-label block mb-2 text-blue-300 text-[15px] font-medium ">
      Size of the QR Code (in pixels e.g.,: 150) : 
        </label>
        <input type="text"
            id="sizeInput"
            value={qrSize} // to store the size of the QR Code
            onChange={(e) => setQrSize(e.target.value)} //what we type to (Exp: size) set the value.
            className="input-field p-3 mb-5 w-full text-[15px] border-2 border-blue-400"
            placeholder="Enter a Image Size"
        />
        
   <button onClick= {generateQrCode} disabled={loading} 
   className="generate-btn bg-blue-500 hover:bg-blue-400">Generate QR Cod</button>
   <button onClick={downloadQR}className="downlode-btn bg-emerald-600 ml-3 hover:bg-green-400">Download QR Code </button>
   
   {/* Footer */}
   <p className="footer mt-7.5  font-medium text-center">Designed By 
    <span className="decoration-0 text-blue-500 "> Kathir</span>
    </p>
   </div>
   </div>
    );
  };
  export default QrCode;