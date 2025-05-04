// content.js

// Instead of loading local model files and performing inference locally,
// we now make a remote call to the deployed prediction endpoint.
const predictionEndpoint = "https://flasking-the-sentiment.onrender.com/predict";

/**
 * Sends the review text to the deployed prediction API.
 * @param {string} text - The review text to classify.
 * @returns {Promise<string>} A promise that resolves to the predicted sentiment.
 */
function classifyReview(text) {
  return fetch(predictionEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ review: text })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response not ok");
      }
      return response.json();
    })
    .then(data => {
      // Assuming the API returns an object like: { prediction: "Positive" }
      return data.prediction;
    })
    .catch(err => {
      console.error("Prediction error:", err);
      return "Error in prediction";
    });
}

// Listen for the message from the background script.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "CLASSIFY_TEXT") {
    const text = message.text || "";
    console.log("Received text for classification:", text);
    classifyReview(text).then(result => {
      alert(`Classification result: ${result}`);
      // You can send the result back to the sender if needed.
      sendResponse({ prediction: result });
    });
    // Return true to indicate that we'll send the response asynchronously.
    return true;
  }
});
