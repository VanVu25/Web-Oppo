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

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const hiddenProducts = document.querySelectorAll('.card-air.hidden');
    const productsContainer = document.querySelector('.products-card-air');

    toggleButton.addEventListener('click', function() {
        hiddenProducts.forEach(product => {
            product.classList.toggle('hidden');
        });

        // Toggle button text between "Xem Tất Cả" and "Thu Gọn"
        if (toggleButton.textContent === 'Xem Tất Cả') {
            toggleButton.textContent = 'Thu Gọn';
        } else {
            toggleButton.textContent = 'Xem Tất Cả';

            // Scroll to the top of the products container
            productsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

//product-img3
document.getElementById('color-air3').addEventListener('change',function(){
    document.getElementById('product-img3').src='/Image/product/Air4-PRO-600-600-white.png';
});

document.getElementById('color-air4').addEventListener('change',function(){
    document.getElementById('product-img3').src='/Image/product/AIR4-PRO-600-600-black.png';
});

//product-img4
document.getElementById('color-air5').addEventListener('change', function() {
    document.getElementById('product-img4').src = '/Image/product/AIR3-600x600.png';
});

document.getElementById('color-air6').addEventListener('change', function() {
    document.getElementById('product-img4').src = '/Image/product/AIR3-white-600x600.png';
});

//product-img5
document.getElementById('color-air7').addEventListener('change',function(){
    document.getElementById('product-img5').src='/Image/product/AIR2-PRO-white_listpage-600_490.png';
});

document.getElementById('color-air8').addEventListener('change',function(){
    document.getElementById('product-img5').src='/Image/product/AIR2-PRO-gray_listpage-600_490.png';
});

//product-img6
document.getElementById('color-air9').addEventListener('change',function(){
    document.getElementById('product-img6').src='/Image/product/AIR2-navigation-white.png';
});

document.getElementById('color-air10').addEventListener('change',function(){
    document.getElementById('product-img6').src='/Image/product/AIR2-navigation-blue.png';
});

//product-img7
document.getElementById('color-air11').addEventListener('change',function(){
    document.getElementById('product-img7').src='/Image/product/AIR-navigation-white-v2.png';
});

document.getElementById('color-air12').addEventListener('change',function(){
    document.getElementById('product-img7').src='/Image/product/AIR-listpage-black-v2.png';
});

document.getElementById('color-air13').addEventListener('change',function(){
    document.getElementById('product-img7').src='/Image/product/AIR-listpage-blue-v2.png';
});

//product-img8
document.getElementById('color-air14').addEventListener('change',function(){
    document.getElementById('product-img8').src='/Image/product/AIR-buds2-pro-427_600-white.png';
});

document.getElementById('color-air15').addEventListener('change',function(){
    document.getElementById('product-img8').src='/Image/product/AIR-buds2-pro-427_600-black.png';
});

//product-img9
document.getElementById('color-air16').addEventListener('change',function(){
    document.getElementById('product-img9').src='/Image/product/Enco-buds2-600_600-v3.png';
});

document.getElementById('color-air17').addEventListener('change',function(){
    document.getElementById('product-img9').src='/Image/product/Enco-Buds2-black-600_600.png';
});

//product-img12
document.getElementById('color-air20').addEventListener('change',function(){
    document.getElementById('product-img12').src='/Image/product/W31-navigation-Black-v2.png';
});

document.getElementById('color-air21').addEventListener('change',function(){
    document.getElementById('product-img12').src='/Image/product/W31-navigation-white-v2.png';
});

//product-img13
document.getElementById('color-air22').addEventListener('change',function(){
    document.getElementById('product-img13').src='/Image/product/Enco Q1-navigation-black-v2.png';
});

document.getElementById('color-air23').addEventListener('change',function(){
    document.getElementById('product-img13').src='/Image/product/Enco Q1-navigation-orange-v2.png';
});


