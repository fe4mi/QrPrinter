"use client";
import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrButtonGenerate = () => {
  const [value, setValue] = useState(""); // Przechowujemy wartość linku
  const [copies, setCopies] = useState(1); // Liczba kopii do wyświetlenia
  const [codesPerPage, setCodesPerPage] = useState(8); // Liczba kodów na stronie
  const [qrSize, setQrSize] = useState(400); // Rozmiar kodu QR
  const [printMode, setPrintMode] = useState(false); // Czy jesteśmy w trybie wydruku?

  // Funkcja do obsługi zmiany w polu tekstowym
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value); // Ustawiamy wartość na podstawie wpisanego linku
  };

  // Funkcja renderująca kody QR
  const renderQRCode = () => {
    if (!value) return null;
    const qrCodes = [];
    for (let i = 0; i < copies; i++) {
      for (let j = 0; j < codesPerPage; j++) {
        qrCodes.push(
          <div
            key={`${i}-${j}`}
            className="flex justify-center items-center"
            style={{
              width: `${qrSize + 20}px`, // dodajemy margines
              textAlign: "center",
            }}
          >
            <QRCode value={value} size={qrSize} />
          </div>
        );
      }
    }
    return qrCodes;
  };

  // Funkcja do obsługi naciśnięcia przycisku "Drukuj"
  const handlePrint = () => {
    setPrintMode(true); // Przechodzimy do trybu druku
    window.print(); // Uruchamiamy okno drukowania
    setPrintMode(false); // Po zakończeniu druku wracamy do normalnego trybu
  };

  return (
    <section className="p-6 ">
      {!printMode && (
        <>
          <h1 className="text-3xl font-semibold mb-6">Generowanie kodów QR</h1>
          <input
            type="text"
            placeholder="Wpisz link"
            value={value}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 mb-4"
            style={{ width: "400px" }}
          />

          {/* Formularz do ustawiania liczby kopii, rozmiaru QR i liczby kodów na stronie */}
          <div>
            <label className="mr-2">Liczba kopii:</label>
            <input
              type="number"
              value={copies}
              onChange={(e) => setCopies(Number(e.target.value))}
              min="1"
              className="p-2 border border-gray-300"
            />
          </div>

          <div className="mt-4">
            <label className="mr-2">Rozmiar kodu QR (w px):</label>
            <input
              type="number"
              value={qrSize}
              onChange={(e) => setQrSize(Number(e.target.value))}
              min="10"
              className="p-2 border border-gray-300"
            />
          </div>

          <div className="mt-4">
            <label className="mr-2">Ile kodów QR na stronie:</label>
            <input
              type="number"
              value={codesPerPage}
              onChange={(e) => setCodesPerPage(Number(e.target.value))}
              min="8"
              className="p-2 border border-gray-300"
            />
          </div>
        </>
      )}

      {/* Sekcja do renderowania kodów QR */}
      <section className="mt-6 flex justify-center">
        <div className="grid grid-cols-2 gap-6 p-4 max-w-screen-xl w-full">
          {renderQRCode()}
        </div>
      </section>

      {/* Przycisk "Drukuj" */}
      {!printMode && (
        <section className="mt-6">
          <button
            onClick={handlePrint}
            className="bg-blue-500 text-white p-3 rounded"
          >
            Drukuj
          </button>
        </section>
      )}

      {/* Dodanie stylów dla trybu wydruku */}
      <style jsx>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
            display: block;
            width: 100%;
          }
          .qr-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* Dwie kolumny */
            gap: 20mm;
            justify-items: center; /* Wyśrodkowanie elementów w kolumnach */
            padding: 10mm;
         
            width: 100%;
            max-width: 100%;
            margin: 0 auto; /* Wyśrodkowanie kontenera */
           /* Unikamy kontynuacji na kolejnej stronie */
          }
          .qr-code {
            text-align: center;
            margin: 5mm;
          }
          .p-6 {
            padding: 0;
          }
          h1, .mt-4, .p-2, button, label {
            display: none; /* Ukrywamy inne elementy w trybie druku */
          }
          .grid {
            display: grid;
            justify-items: center; /* Wyśrodkowanie całej siatki */
            gap: 10mm;
            grid-template-columns: repeat(2, 1fr);
            max-width: 100%;
            padding: 10mm;
          }
        }
      `}</style>
    </section>
  );
};

export default QrButtonGenerate;
