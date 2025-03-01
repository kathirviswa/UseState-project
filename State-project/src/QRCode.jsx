import { useState } from "react";

 import { Loader } from 'lucide-react';
const QrCode = () => {

     const [Qrimg, setQrimg] = useState("");
     const [Loading, SetLoading] = useState(false); // boolean false
    
    //  function generateQrCode(){
    // // setQrimg ("public/Scanner.jpg");
       
    // }
      async function generateQrCode(){
        SetLoading(true);  // setdefault in (setLoading = true)
        
        try {
             
        } 
        catch (error) {
            console.error(error);
        } finally {
            SetLoading(false);  // set back to false when done
        }
      }

    return (
     <div className="App-container w-full h-screen flex flex-col  items-center justify-center">
      
      <h1 className=" text-red-500 font-semibold text-[18px] underline p-[105px,0px] "> 
    QR Code Generator</h1>
        
    {Loading && < Loader className=" animate-spin "/> }

{/* Having a Qrimage content automatically Render to  generated Qrimage...Noted Empty Usestate */}
     {Qrimg && <img src= {Qrimg} className="QRimage p-2 shadow-md w-32 flex bg-amber-800 "/>}
   <div>
        <label htmlFor="dataInput" className="input-label  block mb-2 text-blue-300 text-[15px] font-medium pt-3">
            Enter a text to generate QR Code :
        </label>
        <input type="text"
            id="dataInput"
            className="input-field p-3 mb-5 w-full text-[15px] border-2 border-blue-400"
            placeholder="Enter Data for QR Code Number"
        />

   <label htmlFor="sizeInput" className="input-label block mb-2 text-blue-300 text-[15px] font-medium ">
      Size of the QR Code (in pixels e.g.,: 150) : 
        </label>
        <input type="text"
            id="sizeInput"
            className="input-field p-3 mb-5 w-full text-[15px] border-2 border-blue-400 "
            placeholder="Enter a Image Size"
        />
   
   <button onClick= {generateQrCode} className="generate-btn bg-blue-500 hover:bg-blue-400">Generate QR Cod </button>
   <button className="downlode-btn bg-emerald-600 ml-3 hover:bg-green-400">Download QR Code </button>
   
   {/* Footer */}
   <p className="footer mt-7.5  font-medium text-center">Designed By 
    <span className="decoration-0 text-blue-500 "> Kathir</span>
    </p>
   </div>
   </div>
    );
  };

  export default QrCode;
  

  // <div className="App-container">
  // <div className="Input">
  
  //  <label htmlFor="dataInput" className="input-label">
  //     Enter a text to generate QR Code :
  //   </label>
  //   <input type="text"
  //     id="dataInput"
  //     className="input-field"
  //     placeholder="Enter Data for QR Code Number"
  //   />

  //   <label htmlFor="dataInput" className="input-label">
  //     Size of the QR Code (in pixels e.g.,: 150) :
  //   </label>
  //   <input type="text"
  //     id="sizeInput"
  //     className="input-field"
  //     placeholder="Enter Image Size"
  //   />

  //   <Button type="submit" className="btn">
  //     Generate QR Code
  //   </Button>
  //   <Button type="submit" className="btn">
  //     Download QR Code
  //   </Button>
  // </div>