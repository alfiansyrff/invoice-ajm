"use client";

import React, { useState } from 'react';

function BroadCastForm() {
  const [loading, setLoading] = useState(false);
  const [documentType, setDocumentType] = useState('');

  const insertGoogleSheet = async (data) => {
    fetch('https://sheetdb.io/api/v1/neqtiw44tjli8', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: [
            
              {
                'hari': data.hari,
                'tanggal': data.tanggal,
                'jam': data.jam,
                'vol': data.vol,
                'mutu': data.mutu,
                'harga': data.harga,
              }
             

          ]
      })
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
  
  }
  // const insertGoogleSheet = async (data) => {
  //   try {
  //     const response = await fetch('https://sheetdb.io/api/v1/neqtiw44tjli8', {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         data: [
  //           {
  //             'productCode': data.productCode,
  //             'hari': data.hari,
  //             'tanggal': data.tanggal,
  //             'jam': data.jam,
  //             'vol': data.vol,
  //             'mutu': data.mutu,
  //             'harga': data.harga,
  //             'ajm': data.ajm,
  //             'deal': data.deal
  //           }
  //         ]
  //       })
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error('Error inserting data into Google Sheet:', error);
  //   }
  // };

  const extract = () => {
    setLoading(true);
    const textarea = document.getElementById('message').value;

    const data = {
      hari: textarea.match(/Hari\s*:\s*(.*)/)?.[1].trim(),
      tanggal: textarea.match(/Tanggal\s*:\s*(.*)/)?.[1].trim(),
      jam: textarea.match(/Jam\s*:\s*(.*)/)?.[1].trim(),
      id: textarea.match(/ID\s*:\s*(.*)/)?.[1].trim(),
      nama: textarea.match(/Nama\s*:\s*(.*)/)?.[1].trim(),
      alamat: textarea.match(/Alamat\s*:\s*(.*)/)?.[1].trim(),
      durasi: textarea.match(/Durasi\s*:\s*(.*)/)?.[1].trim(),
      vol: textarea.match(/Vol\s*:\s*(.*)/)?.[1].trim(),
      mutu: textarea.match(/Mutu\s*:\s*(.*)/)?.[1].trim(),
      harga: textarea.match(/Harga\s*:\s*(.*)/)?.[1].trim(),
      deal: textarea.match(/Deal\s*:\s*(.*)/)?.[1].trim(),
      productCode: textarea.match(/Product Code\s*:\s*(.*)/)?.[1].trim(),
      arm: textarea.match(/Arm\s*:\s*(.*)/)?.[1].trim(),
      spd: textarea.match(/Spd\s*:\s*(.*)/)?.[1].trim(),
      binder: textarea.match(/Binder\s*:\s*(.*)/)?.[1].trim(),
      noSite: textarea.match(/No Site\s*:\s*(.*)/)?.[1].trim(),
      sales: textarea.match(/Sales\s*\(\s*(.*)\s*\)/)?.[1].trim(),
      plant: textarea.match(/Plant\s*:\s*(.*)/)?.[1].trim(),
      jarak: textarea.match(/Jarak\s*:\s*(.*)/)?.[1].trim(),
      teknisi: textarea.match(/Teknisi\s*:\s*(.*)/)?.[1].trim()
    };
    setLoading(false);
    insertGoogleSheet(data);
    // console.log(data);
    // call the insert to sheet funcgtion
  };

  const handleDocumentTypeChange = (e) => {
    setDocumentType(e.target.value);
  };

  return (
    <div className='bg-white p-5 rounded-2xl h-[85vh] w-full relative'>
      <form>
        <div>
          <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-900">Pesan Broadcast</label>
          <textarea id="message" rows="18" className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Salin kesini ya..."></textarea>
        </div>

        <div className="mt-4">
          <label htmlFor="documentType" className="mb-2 text-sm font-medium text-gray-900">Tipe Dokumen</label>
          <select id="documentType" value={documentType} onChange={handleDocumentTypeChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
            <option value="" disabled>--Pilih Tipe Dokumen--</option>
            <option value="invoice">Purchase Order</option>
            <option value="report">Proforma Invoice</option>
            <option value="receipt">Invoice</option>
          </select>
        </div>

        <button type="button" onClick={extract} className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Preview</button>
      </form>
    </div>
  );
}

export default BroadCastForm;
