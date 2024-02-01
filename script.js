const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play:
async function selectMediaStream() {
  // Anything that needs to be resolved after we complete our call will wait 
  // until the try has completed instead of just throwing an error:
  try {
    // waiting to assign media stream data until user has selected which 
    // screen/window they want to share:
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    // when the video metadata has loaded, calls function to play video:
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    }
  } catch (error) {
    console.log('error: ' + error);
  }
}

// On load:
selectMediaStream();