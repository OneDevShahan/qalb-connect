import ZakatForm from "./ZakatForm";
import ZakatExplanation from "./ZakatExplanation";

function ZakatCalculator() {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900">
      <ZakatForm />
      <ZakatExplanation />
    </div>
  );
}

export default ZakatCalculator;