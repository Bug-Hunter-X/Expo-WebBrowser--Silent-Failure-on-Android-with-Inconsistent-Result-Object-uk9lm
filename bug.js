import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  let result = await WebBrowser.openBrowserAsync('https://www.example.com');
  console.log(result);
}

// Uncommon bug: This code might fail silently on some Android devices if the default browser isn't configured correctly or if there's an issue with the browser's intent handling.  The result might not reflect actual success or failure.
// The result object may not contain the expected keys or values, leading to difficult debugging.
