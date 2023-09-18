jQuery(document).ready(function () {
  if ("NDEFReader" in window) {
    const ndef = new NDEFReader();
      ndef.addEventListener("reading", (event) => {
        alert("Thẻ NFC đã được đọc:", event);
        // Xử lý dữ liệu từ thẻ NFC ở đây.
      });
    }else{
      alert("Không hỗ trợ NFC.");
    }
      
});