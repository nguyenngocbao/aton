jQuery(document).ready(function () {
    const ndef = new NDEFReader();
    ndef.scan().then(() => {
        alert("Đã kết nối đến thiết bị NFC.");
      }).catch((error) => {
        alert("Không thể kết nối đến thiết bị NFC: " + error);
      });
      ndef.addEventListener("reading", (event) => {
        alert("Thẻ NFC đã được đọc:", event);
        // Xử lý dữ liệu từ thẻ NFC ở đây.
      });
      
});