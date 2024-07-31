"use client"
import Image from "next/image";
import BroadCastForm from "./components/form";
import IconDownload from "./icons/download";
import Navbar from "./components/nav";
import ReactDOM from 'react-dom';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import MyDocument from "./components/pdf";

export default function Home() {

  const readGoogleSheet = () => {
    // Sort results by id in descending order, take two
    // and return the age as an integer.

    fetch(process.env.NEXT_PUBLIC_APP_SCRIPT_API)
    .then((response) => response.json())
    .then((data) => console.log(data));

  }

  const insertIntoGoogleSheet = () => {
    fetch(process.env.NEXT_PUBLIC_APP_SCRIPT_API, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([
        {
          'data': "5",
          'name': "Jogn",

      }
      ]),
    })
    .then((response) => response.json())
    .then((result) => {
      if (result.status === 'success') {
        console.log('Data successfully inserted:', result);
      } else {
        console.error('Failed to insert data:', result);
      }
    })
    .catch((error) => console.error('Error:', error));
  };

  const insertGoogleSheet = () => {
    fetch('https://sheetdb.io/api/v1/neqtiw44tjli8', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: [
              {
                  'data': "3",
                  'name': "Mark",
        
              },
              {
                'data': "4",
                'name': "Huda",
            },

          ]
      })
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
  
  }
  return (
    <main className="mx-auto relative">
     
      <div className="flex items-center justify-center min-h-screen">
        <Navbar />
        {/* <h1>Haloo</h1> */}
        <div className="z-20 grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-4 h-full p-5 md:p-16 my-8">
        
          <div className="col-span-1">
            <BroadCastForm />
          </div>
     

          <div className="bg-white rounded-2xl col-span-3 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src={'/logo.png'} width={200} height={250}/>

                <div>
                  <p className="text-xs text-black font-bold">CV. ADITARA JAYA MAKMUR</p>
                  <p className="text-xs text-black font-bold">READYMIX BUILDING MATERIAL & GENERAL SUPPLIER</p>
                  <p className="text-[10px] text-black">Address: :  Dsn. Semen, Desa Tanggalrejo Kec. Mojoagung, Kab. Jombang</p>
                  <p className="text-[10px] text-black">Telp	:  +62 82-33-6666-366</p>
                  <p className="text-[10px] text-black">Email	:  aditarajayamakmur@gmail.com</p>
                </div>
              </div>
    
              <Image src={'/header_kanan.png'} alt="Header Kanan" width={300} height={250} />
            

              {/* <div className="flex flex-col items-center">
                <p className="font-bold">Tanggal: </p>
                <p className="font-bold">Tanggal: </p>

              </div> */}
            </div>
            <hr className="my-2 h-0.5 border-t-0 bg-gray-800" />

            <div className="grid grid-cols-3 gap-2">
              <div></div>
              <div></div>
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">PURCHASE ORDER</h1>
                <p className="text-sm">Date: </p>
                <p className="text-sm">No: </p>
                <p className="text-sm">Delivery date: </p>
                <p className="text-sm">Time: </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-2">
                <div>
                  <h1 className="text-md font-bold">Kepada Yth:</h1>
                  <h1 className="text-md">PT. KOKOH INTI AREBANA TBK</h1>
                </div>
                <div></div>
                <div>
                  <h1 className="text-md font-bold">Deliver To</h1>
                  <p className="text-sm">CV. Esa Abadi </p>
                  <p className="text-sm">Sungon, Suko </p>
                  <p className="text-sm">Sidoarjo</p>
                  <p className="text-sm">Jawa Timur </p>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-3">
                
              <div className="relative overflow-x-auto">
                  <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                              <th scope="col" className="px-6 py-3">
                                  No.
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Description
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Volume
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Unit Price
                              </th>
                              <th scope="col" className="px-6 py-3">
                                  Total Price
                              </th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="bg-white border-b">
                              <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                                 1
                              </th>
                              <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap ">
                                K-300 FA / 10±2
                              </th>
                              <td className="px-6 py-4 text-black">
                                  22 m3
                              </td>
                              <td className="px-6 py-4 text-black">
                                  Rp.705.000,00
                              </td>
                              <td className="px-6 py-4 text-black">
                                  Rp.15.510.000,00
                              </td>
                          </tr>

                          <tr className="bg-white">
                              <th scope="row" className="px-6 py-2 font-medium text-black whitespace-nowrap ">
                               
                              </th>
                              <th scope="row" className="px-6 py-2 font-medium text-black whitespace-nowrap ">
                               
                              </th>
                              <td className="px-6 py-2 text-black">
                                  
                              </td>
                              <td className="px-6 py-2 text-black font-bold">
                                 Subtotal
                              </td>
                              <td className="px-6 py-2 text-black font-bold">
                                  Rp.15.510.000,00
                              </td>
                          </tr>
                          
                          <tr className="bg-white">
                              <th scope="row" className="px-6 py-2 font-medium text-black whitespace-nowrap ">
                               
                              </th>
                              <th scope="row" className="px-6 py-2 font-medium text-black whitespace-nowrap ">
                               
                              </th>
                              <td className="px-6 py-2 text-black">
                                  
                              </td>
                              <td className="px-6 py-2 text-black font-bold">
                                 PPN 11%
                              </td>
                              <td className="px-6 py-2 text-black font-bold">
                                  Rp.1.706.100,00
                              </td>
                          </tr>

                          <tr className="bg-white">
                              <th scope="row" className="px-6 py-2 font-medium text-black whitespace-nowrap ">
                               
                              </th>
                              <th scope="row" className="px-6 py-2 font-medium text-black whitespace-nowrap ">
                               
                              </th>
                              <td className="px-6 py-2 text-black">
                                  
                              </td>
                              <td className="px-6 py-2 text-black font-bold">
                                 Total
                              </td>
                              <td className="px-6 py-2 text-black font-bold">
                                  Rp.17.216.100,00
                              </td>
                          </tr>
                      </tbody>
                     
                  </table>
              </div>

            </div>

            <div className="grid grid-cols-1 mt-2">
              <h1 className="font-bold">NB:-</h1>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-2">
              <div></div>
              <div></div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold">CV ADITARA JAYA MAKMUR</h1>
                <p className="text-sm">APPROVED BY</p>

                <p className="mt-16 text-uppercase">Favirru Bagus mahardhika</p>
              </div>
            </div>

            <div className="grid w-full p-5">
              <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
                 {({ loading }) => (
                   <button
                     className="flex items-center justify-center gap-2 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                   >
                     <IconDownload />
                     {loading ? 'Loading document...' : 'Unduh'}
                   </button>
                 )}
               </PDFDownloadLink>
             </div>

            {/* <div className="grid w-full p-5">
                <button className="flex items-center justify-center gap-2 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  <IconDownload />
                  Unduh
                </button>
                
            </div> */}
          </div>

         
        </div>


      </div>

      <div className="grid grid-cols-1">
        <PDFViewer>
          <MyDocument />
        </PDFViewer>
        </div>
    </main>
  );
}

// "use client";
// import Image from "next/image";
// import BroadCastForm from "./components/form";
// import IconDownload from "./icons/download";
// import Navbar from "./components/nav";
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import MyDocument from "./components/pdf";

// export default function Home() {

//   const readGoogleSheet = () => {
//     fetch(process.env.NEXT_PUBLIC_APP_SCRIPT_API)
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };

//   const insertIntoGoogleSheet = () => {
//     fetch(process.env.NEXT_PUBLIC_APP_SCRIPT_API, {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify([
//         {
//           'data': "5",
//           'name': "Jogn",
//         }
//       ]),
//     })
//     .then((response) => response.json())
//     .then((result) => {
//       if (result.status === 'success') {
//         console.log('Data successfully inserted:', result);
//       } else {
//         console.error('Failed to insert data:', result);
//       }
//     })
//     .catch((error) => console.error('Error:', error));
//   };

//   const insertGoogleSheet = () => {
//     fetch('https://sheetdb.io/api/v1/neqtiw44tjli8', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         data: [
//           {
//             'data': "3",
//             'name': "Mark",
//           },
//           {
//             'data': "4",
//             'name': "Huda",
//           },
//         ]
//       })
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
//   };

//   return (
//     <main className="mx-auto relative">
//       <div className="flex items-center justify-center min-h-screen">
//         <Navbar />
//         <div className="z-20 grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-4 h-full p-5 md:p-16 my-8">
//           <div className="col-span-1">
//             <BroadCastForm />
//           </div>
//           <div className="bg-white rounded-2xl col-span-3 p-5">
//             {/* ... Your existing content ... */}
//             <div className="grid w-full p-5">
//               <PDFDownloadLink document={<MyDocument />} fileName="document.pdf">
//                 {({ loading }) => (
//                   <button
//                     className="flex items-center justify-center gap-2 text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//                   >
//                     <IconDownload />
//                     {loading ? 'Loading document...' : 'Unduh'}
//                   </button>
//                 )}
//               </PDFDownloadLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
