import { jsPDF } from "jspdf";
import { useState } from "react";
import { HiOutlineCalculator } from "react-icons/hi";

function ZakatCalculator() {
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

  const explanations = [
    {
      title: "Nisab Value (₹)",
      content: [
        "Unit: The local currency of the user (e.g., USD, EUR, INR).",
        "Purpose: Represents the threshold above which Zakat is obligatory. The Nisab value is calculated based on the current market value of 87.48 grams of gold or 612.36 grams of silver, whichever is lower.",
        "Source: Users should check reliable sources or Islamic organizations for the updated Nisab value in their local currency.",
      ],
    },
    {
      title: "Gold Value (₹)",
      content: [
        "Unit: The local currency of the user.",
        "Purpose: Enter the total value of the gold owned by the user.",
        "How to Calculate: Multiply the weight of the gold (grams) by the current market price of gold per gram.",
      ],
    },
    {
      title: "Silver Value (₹)",
      content: [
        "Unit: The local currency of the user.",
        "Purpose: Enter the total value of the silver owned by the user.",
        "How to Calculate: Multiply the weight of the silver (grams) by the current market price of silver per gram.",
      ],
    },
    {
      title: "Cash Value (₹)",
      content: [
        "Unit: The local currency of the user.",
        "Purpose: Enter the total cash savings, including bank savings and liquid cash.",
      ],
    },
    {
      title: "Property Value (₹)",
      content: [
        "Unit: The local currency of the user.",
        "Purpose: Represents properties, stocks, or other investments held for over a year.",
        "Exclusions: Personal items like houses for residence, furniture, or cars for personal use are excluded.",
      ],
    },
    {
      title: "Debts and Liabilities (₹)",
      content: [
        "Unit: The local currency of the user.",
        "Purpose: Enter the total outstanding debts that the user needs to repay within the year.",
        "Examples: Personal loans, credit card dues, or any liabilities.",
      ],
    },
  ];

  const formInputFieldsDetails = [
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
  ];

  // Function to download PDF
  const downloadPDF = () => {
    const doc = new jsPDF();

    // Add Heading
    doc.setFontSize(20);
    doc.text("Zakat Calculator Summary", 20, 10);

    // Add form values
    doc.setFontSize(12);
    doc.text(`Nisab Value: ₹ ${nisabValue}`, 20, 20);
    doc.text(`Gold Value: ₹ ${goldValue}`, 20, 30);
    doc.text(`Silver Value: ₹ ${silverValue}`, 20, 40);
    doc.text(`Cash Value: ₹ ${cashValue}`, 20, 50);
    doc.text(`Property Value: ₹ ${propertyValue}`, 20, 60);
    doc.text(`Debts/Liabilities: ₹ ${debtsValue}`, 20, 70);
    doc.text(`Zakat Amount: ₹ ${zakatAmount}`, 20, 80);

    // Add Explanation (Ensure it's at the bottom)
    doc.addPage();
    doc.text("Zakat Explanation:", 20, 10);
    doc.text(
      "QalbConnect Zakat Calculator 2025 provides you a step by step method to calculate Zakat on your assets.",
      20,
      20
    );
    doc.text(
      "Step 1: Enter the Value of Nisab in ₹. According to Sharia Law, Nisab is the minimum amount a person possesses for over a year in order to be obliged to pay Zakah.",
      20,
      30
    );
    doc.text(
      "Step 2: Add the quantity of Gold and silver that you have possessed for more than a year and its price per 10 grams in ₹.",
      20,
      40
    );
    doc.text(
      "Step 3: Add the values of Cash, Properties, and stocks in your possession for more than a year.",
      20,
      50
    );
    doc.text(
      "Step 4: Add your debts and liabilities, and subtract them from your assets to determine the Zakah obligatory on you.",
      20,
      60
    );
    doc.text(
      "Step 5: The payable Zakat is 2.5% of your overall possessions.",
      20,
      70
    );

    // Save the PDF
    doc.save("zakat-summary.pdf");
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
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-center dark:text-white">
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl space-x-2">
            <HiOutlineCalculator className="mr-2 text-red-400" />
            Zakat Calculator {new Date().getFullYear()}
          </div>
          <div className="flex justify-center text-center">
            <hr className="text-center w-2/4 md:w-1/4 mt-3 mb-8" />
          </div>
        </h2>
        <p className="my-4 text-lg md:my-4 text-gray-600 dark:text-gray-300">
          Calculate your Zakat obligations based on your assets, liabilities,
          and Nisab values.
        </p>
      </div>

      <div className="space-y-6">
        {/* Input Fields */}
        {formInputFieldsDetails.map(({ label, description, value, setter }) => (
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

      {/* Explanations */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">
          Explanation for Zakat Calculation
        </h2>
        {explanations.map((item, index) => (
          <div key={index} className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {item.title}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              {item.content.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ZakatCalculator;
