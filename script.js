const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play:
async function selectMediaStream() {
  try {
    // waits to assign media stream data until user has selected which 
    // screen/window they want to share:
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    // when the video metadata has loaded, calls function to play video:
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.log('error: ' + error);
  }
}

button.addEventListener('click', async () => {
  // disable "start" button on click:
  button.disabled = true;

  // start picture in picture:
  await videoElement.requestPictureInPicture();

  // reset button (only happens if we've successfully requested picture in picture):
  button.disabled = false;
});

// On load:
selectMediaStream();