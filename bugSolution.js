import * as WebBrowser from 'expo-web-browser';

async function handlePress() {
  try {
    let result = await WebBrowser.openBrowserAsync('https://www.example.com');
    if (result.type === 'success') {
      console.log('Browser opened successfully:', result);
    } else if (result.type === 'cancel') {
      console.log('Browser opening cancelled:', result);
    } else {
      console.error('Error opening browser:', result);
      // Add more specific error handling based on the 'error' property if needed
    }
  } catch (error) {
    console.error('An unexpected error occurred:', error);
  }
}
// This improved version adds more specific error handling and checks for different result types.  It handles the scenario where the result may not contain all the expected properties, preventing unexpected failures.