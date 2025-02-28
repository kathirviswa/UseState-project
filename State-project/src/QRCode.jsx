
const QrCode = () => {
    return (
      <div className="App-container">
        <div className="Input">
        
         <label htmlFor="dataInput" className="input-label">
            Enter a text to generate QR Code :
          </label>
          <input type="text"
            id="dataInput"
            className="input-field"
            placeholder="Enter Data for QR Code Number"
          />
     
          <label htmlFor="dataInput" className="input-label">
            Size of the QR Code (in pixels e.g.,: 150) :
          </label>
          <input type="text"
            id="sizeInput"
            className="input-field"
            placeholder="Enter Image Size"
          />
  
          <Button type="submit" className="btn">
            Generate QR Code
          </Button>
          <Button type="submit" className="btn">
            Download QR Code
          </Button>
        </div>
      </div>
    );
  };
  
  export default QrCode;
  