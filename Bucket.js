const firebaseConfig = {
    apiKey: "AIzaSyAgqa5x-_piu2XtU5hueVJcAgjKYE4o1mA",
    authDomain: "hope-3a1f2.firebaseapp.com",
    databaseURL: "https://hope-3a1f2-default-rtdb.firebaseio.com",
    projectId: "hope-3a1f2",
    storageBucket: "hope-3a1f2.appspot.com",
    messagingSenderId: "583200898829",
    appId: "1:583200898829:web:b330dbcc693cf22c373a44",
    measurementId: "G-4SXWPEJSW1"
};

firebase.initializeApp(firebaseConfig);

// Get elements
const fileInput = document.getElementById("fileInput");
const uploadButton = document.getElementById("uploadButton");
const uploader = document.getElementById("uploader");
const downloadLink = document.getElementById("downloadLink");


// Listen for file selection
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    uploadButton.style.display = "block";
  } else {
    // Handle the case when no file is selected
    console.error("No file selected");
  }
});

// Listen for upload button click
uploadButton.addEventListener("click", () => {
  const file = fileInput.files[0];
  if (file) {
    // Proceed with the upload process
    // ...
  } else {
    // Handle the case when no file is selected
    console.error("No file selected");
  }
});

