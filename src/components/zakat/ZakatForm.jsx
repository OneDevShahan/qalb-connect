import { jsPDF } from "jspdf";
import { useState } from "react";
import { HiOutlineCalculator } from "react-icons/hi";

function ZakatForm() {
  const [nisabValue, setNisabValue] = useState("");
  const [goldValue, setGoldValue] = useState("");
  const [silverValue, setSilverValue] = useState("");
  const [cashValue, setCashValue] = useState("");
  const [propertyValue, setPropertyValue] = useState("");
  const [debtsValue, setDebtsValue] = useState("");
  const [zakatAmount, setZakatAmount] = useState(null);
  const [notEligible, setNotEligible] = useState(false);

  // Function to calculate Zakat
  const calculateZakat = () => {
    const totalAssets =
      parseFloat(goldValue) +
      parseFloat(silverValue) +
      parseFloat(cashValue) +
      parseFloat(propertyValue);

    const totalLiabilities = parseFloat(debtsValue);
    const netAssets = totalAssets - totalLiabilities;

    if (netAssets > parseFloat(nisabValue)) {
      const zakat = (netAssets * 2.5) / 100;
      setZakatAmount(zakat);
    } else {
      setZakatAmount(0);
      setNotEligible(true);
    }
  };

  // Function to download PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Set PDF metadata
    doc.setProperties({
      title: "Zakat Calculator Summary",
      subject: "Generated Zakat Report",
      author: "Zakat Calculator App",
    });

    // Add Header with Styling
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(40, 40, 40);
    doc.text("Zakat Calculation Summary", 70, 15);
    doc.setLineWidth(0.5);
    doc.line(10, 20, 200, 20); // Underline

    // Reset Font for Body
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(60, 60, 60);

    let y = 30; // Starting Y position

    // Helper function for adding rows
    const addRow = (label, value) => {
      doc.setFont("helvetica", "bold");
      doc.text(label, 20, y);
      doc.setFont("helvetica", "normal");
      doc.text(`₹ ${value}`, 120, y);
      y += 8;
    };

    // Add financial details
    addRow("Nisab Value:", nisabValue);
    addRow("Gold Value:", goldValue);
    addRow("Silver Value:", silverValue);
    addRow("Cash Value:", cashValue);
    addRow("Property Value:", propertyValue);
    addRow("Debts & Liabilities:", debtsValue);
    addRow("Total Zakat Amount:", zakatAmount);

    // Add Explanation Section on a New Page
    doc.addPage();
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("How Zakat is Calculated", 60, 15);
    doc.setLineWidth(0.3);
    doc.line(10, 20, 200, 20);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    const explanation = [
      "Step 1: Enter the Nisab Value in your local currency.",
      "Step 2: Add the total value of your Gold and Silver.",
      "Step 3: Include your cash savings, properties, and other assets.",
      "Step 4: Subtract your debts and liabilities.",
      "Step 5: If the net assets exceed the Nisab, pay 2.5% as Zakat.",
    ];

    let explanationY = 30;
    explanation.forEach((step, index) => {
      doc.text(`${index + 1}. ${step}`, 20, explanationY);
      explanationY += 10;
    });

    // Save the PDF
    doc.save("Zakat_Summary.pdf");
  };

  // Form validation
  const isFormValid =
    nisabValue &&
    goldValue &&
    silverValue &&
    cashValue &&
    propertyValue &&
    debtsValue;

  // Clear form function
  const clearForm = () => {
    setNisabValue("");
    setGoldValue("");
    setSilverValue("");
    setCashValue("");
    setPropertyValue("");
    setDebtsValue("");
    setZakatAmount(null);
  };

  return (
    <div className="pb-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-center dark:text-white">
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <HiOutlineCalculator className="mr-2 text-red-400" />
            Zakat Calculator {new Date().getFullYear()}
          </div>
          <div className="flex justify-center text-center">
            <hr className="text-center w-2/3 sm:w-1/3 md:w-1/4 mt-3 mb-2" />
          </div>
        </h2>
        <p className="my-4 text-lg md:my-4 text-gray-600 dark:text-gray-300">
          Calculate your Zakat obligations based on your assets, liabilities,
          and Nisab values.
        </p>
      </div>

      <div className="space-y-6">
        {/* Input Fields */}
        {[
          {
            label: "Nisab Value (Total value in ₹)",
            description: "Threshold based on 87.48g gold or 612.36g silver",
            value: nisabValue,
            setter: setNisabValue,
          },
          {
            label: "Gold Value (Total value in ₹)",
            description: "Based on weight × current gold price per gram",
            value: goldValue,
            setter: setGoldValue,
          },
          {
            label: "Silver Value (Total value in ₹)",
            description: "Based on weight × current silver price per gram",
            value: silverValue,
            setter: setSilverValue,
          },
          {
            label: "Cash Value (Savings in ₹)",
            description: "Including bank and liquid cash",
            value: cashValue,
            setter: setCashValue,
          },
          {
            label: "Property Value (Investment in ₹)",
            description: "Excluding personal-use items",
            value: propertyValue,
            setter: setPropertyValue,
          },
          {
            label: "Debts and Liabilities (Outstanding amount in ₹)",
            description: "Debt, loans, or liabilities to be repaid",
            value: debtsValue,
            setter: setDebtsValue,
          },
        ].map(({ label, description, value, setter }) => (
          <div
            key={label}
            className="flex flex-col dark:text-white sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 md:m-8"
          >
            <label className="text-sm text-gray-800 dark:text-white sm:w-1/3">
              {label}
            </label>
            <div className="flex-1">
              <input
                type="number"
                value={value}
                placeholder={description}
                onChange={(e) => setter(e.target.value)}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full bg-gray-50 dark:bg-gray-700"
              />
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between items-center space-x-4 m-8">
          <button
            onClick={calculateZakat}
            disabled={!isFormValid}
            className={`py-2 px-6 ${
              isFormValid
                ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                : "bg-gray-300 cursor-not-allowed"
            } text-white font-medium rounded-lg shadow-md`}
          >
            Calculate Zakat
          </button>
          <button
            onClick={clearForm}
            className="py-2 px-6 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow-md"
          >
            Clear
          </button>
        </div>

        {/* Zakat Result */}
        {zakatAmount !== null && (
          <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md relative">
            <button
              onClick={() => setZakatAmount(null)}
              className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Zakat Summary:
            </h3>
            <div className="mt-4 text-lg text-gray-800 dark:text-white">
              <p>
                Total Assets:{" ₹ "}
                {parseFloat(goldValue) +
                  parseFloat(silverValue) +
                  parseFloat(cashValue) +
                  parseFloat(propertyValue)}{" "}
              </p>
              <p>Debts: ₹ {debtsValue}</p>
              {!notEligible ? (
                <p className="mt-4 font-semibold">
                  Zakat Amount: ₹ {zakatAmount}
                </p>
              ) : (
                <p className="mt-4 font-semibold text-red-500">
                  You are not eligible to pay Zakat as your net assets are less
                  than the Nisab value.
                </p>
              )}
            </div>
            <div className="flex justify-center items-center p-2 m-2">
              <button
                type="button"
                onClick={downloadPDF}
                className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
              >
                Download PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ZakatForm;
