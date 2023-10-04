function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // You can replace these conversion rates with real-time data from an API
    const conversionRates = {
        USD: {
            EUR: 0.85,
            GBP: 0.73,
        },
        EUR: {
            USD: 1.18,
            GBP: 0.86,
        },
        GBP: {
            USD: 1.37,
            EUR: 1.16,
        },
    };

    const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    document.getElementById("convertedAmount").value = convertedAmount.toFixed(2);

      // Check if the converted amount is within the user-defined thresholds
      const minThreshold = parseFloat(document.getElementById("minThreshold").value);
      const maxThreshold = parseFloat(document.getElementById("maxThreshold").value);
  
      if (!isNaN(minThreshold) && !isNaN(maxThreshold)) {
          if (convertedAmount < minThreshold) {
              alert(`Alert: Converted amount is below the minimum threshold of ${minThreshold}`);
          } else if (convertedAmount > maxThreshold) {
              alert(`Alert: Converted amount exceeds the maximum threshold of ${maxThreshold}`);
          }
      }

      function setAlerts() {
        // This function can be used to set the minimum and maximum thresholds for alerts
        // You can store these values in local storage or on the server for persistence
    }
}