// Function to generate all binary combinations of a given length
function generateBinaryCombinations(length) {
  const combinations = [];
  for (let i = 0; i < Math.pow(2, length); i++) {
    const binaryString = i.toString(2).padStart(length, '0');
    combinations.push(binaryString.split('').map(Number));
  }
  return combinations;
}

// Base URL for the fetch request
const baseUrl = "/check";

// Headers for the fetch request
const headers = {
  "accept": "*/*",
  "accept-language": "en-US,en;q=0.9",
  "content-type": "application/x-www-form-urlencoded",
  "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Microsoft Edge\";v=\"120\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"Windows\"",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin"
};

// Referrer for the fetch request
const referrer = "https://hhc23-reportinator-dot-holidayhack2023.ue.r.appspot.com/?&challenge=reportinator&username=marcoparello&id=4993797f-13a4-40ff-939d-8179591d64d9&area=ci-rudolphsrest&location=32,26&tokens=&dna=ATATATTAATATATATATATATGCATATATATATGCCGTAATATATATATATTAGCATATATATATATATCGATATTAGCATATATATATATTACGATATATATATATTATAATATATGC";

// Referrer policy for the fetch request
const referrerPolicy = "strict-origin-when-cross-origin";

// Mode for the fetch request
const mode = "cors";

// Credentials for the fetch request
const credentials = "include";

// Number of inputs
const numberOfInputs = 9;

// Generate all binary combinations for the inputs
const inputCombinations = generateBinaryCombinations(numberOfInputs);

// Function to make a fetch request for a given combination
async function makeFetchRequest(combination) {
  // Create the request body using the current combination
  const requestBody = combination.map((value, index) => `input-${index + 1}=${value}`).join('&');

  // Make the fetch request
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: headers,
    referrer: referrer,
    referre
