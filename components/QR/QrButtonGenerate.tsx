// "use client"
// import React, {useState, useEffect} from "react";
// import QRCode from "react-qr-code";

// const QrButtonGenerate =() =>{
//     const [value, setValue] = useState("");
//     function Generuj(){
//     let newValue = "https://th.bing.com/th/id/OIP.QidLTlcxWxIv2mP9q2lXwQHaEA?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
//      setValue(newValue);
//     }
//     return(
//         <>
//         <button onClick={Generuj}>Wygeneruj</button> 
//         <div>
//            {value && <QRCode value={value} />} 
//         </div>
//    </>
//   )
// }
// export default QrButtonGenerate