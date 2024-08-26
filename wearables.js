document.getElementById("brand").addEventListener("click", function() {
    window.location.href = "index.html"; // Đổi link này thành trang mà bạn muốn chuyển đến
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


//product-img1
document.getElementById('color-watch1').addEventListener('change',function(){
    document.getElementById('product-img1').src='Image/product/OPPO-WATCH-X-427-600brown-v1.png';
});

document.getElementById('color-watch2').addEventListener('change',function(){
    document.getElementById('product-img1').src='Image/product/OPPPO-WATCH-X-427-600black-v1.png';
});

//product-img2
document.getElementById('color-watch3').addEventListener('change',function(){
    document.getElementById('product-img2').src='Image/product/OPPPO-WATCH-free-navigation-vanilla.png';
});

document.getElementById('color-watch4').addEventListener('change',function(){
    document.getElementById('product-img2').src='Image/product/OPPPO-WATCH-free-navigation-black.png';
});

//product-img3
document.getElementById('color-watch5').addEventListener('change',function(){
    document.getElementById('product-img3').src='Image/product/OPPPO-WATCH-navigation-Black-46mm-v2.png';
});

document.getElementById('color-watch6').addEventListener('change',function(){
    document.getElementById('product-img3').src='Image/product/OPPPO-WATCH-navigation-Gold-46mm-v2.png';
});

document.getElementById('color-watch7').addEventListener('change',function(){
    document.getElementById('product-img3').src='Image/product/OPPPO-WATCH-navigation-Black-41mm-v2.png';
});

document.getElementById('color-watch8').addEventListener('change',function(){
    document.getElementById('product-img3').src='Image/product/OPPPO-WATCH-navigation-Pink-41mm-v2.png';
});
document.getElementById('color-watch9').addEventListener('change',function(){
    document.getElementById('product-img3').src='Image/product/OPPPO-WATCH-navigation-Silver-41mm-v2.png';
});

//product-img4
document.getElementById('color-watch10').addEventListener('change', function() {
    document.getElementById('product-img4').src = 'Image/product/OPPPO-WATCH-band2-black.png';
});

document.getElementById('color-watch11').addEventListener('change', function() {
    document.getElementById('product-img4').src = 'Image/product/OPPPO-WATCH-band2-white.png';
});

//product-img5
document.getElementById('color-watch12').addEventListener('change',function(){
    document.getElementById('product-img5').src='Image/product/OPPPO-WATCH-navigation-support-black-v2.png';
});

document.getElementById('color-watch13').addEventListener('change',function(){
    document.getElementById('product-img5').src='Image/product/OPPPO-WATCH-navigation-support-lavender-v2.png';
});