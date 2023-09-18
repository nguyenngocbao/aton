jQuery(document).ready(function () {
  if ("NDEFReader" in window) {
    const ndef = new NDEFReader();
    ndef
  .scan()
  .then(() => {
    console.log("Scan started successfully.");
    ndef.onreadingerror = (event) => {
      alert(
        "Error! Cannot read data from the NFC tag. Try a different one?",
      );
    };
    ndef.onreading = (event) => {
      alert("NDEF message read.");
    };
  })
  .catch((error) => {
    alert(`Error! Scan failed to start: ${error}.`);
  });
    }else{
      alert("Không hỗ trợ NFC.");
    }
      
});