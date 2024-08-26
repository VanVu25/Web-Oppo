document.getElementById("brand").addEventListener("click", function() {
    window.location.href = "/index.html"; // Đổi link này thành trang mà bạn muốn chuyển đến
});

document.addEventListener('DOMContentLoaded', function() {
    const brandName = document.getElementById('brand-name'); 
    const text = 'OPPO';
    let index = 0;

    function showText() {
        if (index < text.length) {
            const span = document.createElement('span');
            span.textContent = text.charAt(index);
            span.classList.add('letter');
            brandName.appendChild(span);
            index++;
            setTimeout(showText, 200); // Điều chỉnh thời gian trễ ở đây để nhanh/chậm hơn
        } else {
            setTimeout(() => {
                brandName.innerHTML = ''; // Xóa nội dung cũ
                index = 0;
                setTimeout(showText, 200); // Bắt đầu lại sau khi xóa chữ
            }, 1000); // Điều chỉnh thời gian dừng trước khi lặp lại
        }
    }

    showText();
});
