jQuery(document).ready(function () {
    if ("nfc" in navigator) {
        // Thêm một sự kiện nghe để xử lý khi thẻ NFC được đọc
        navigator.nfc.addEventListener("reading", event => {
          // Trích xuất thông tin từ thẻ NFC ở đây
          const tag = event.tag;
          // Xử lý thông tin từ thẻ NFC theo ý muốn của bạn
          console.log(tag)
          window.onload.href = "wallet.html"
        });
      } else {
        console.error("Trình duyệt không hỗ trợ NFC.");
      }
});