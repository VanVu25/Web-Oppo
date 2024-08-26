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

// Lắng nghe sự kiện 'scroll' để làm nổi bật liên kết điều hướng
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.product-navbar a');

    let currentActiveLink = null;

    sections.forEach(section => {
        const sectionTitle = section.querySelector('.section-title');
        if (sectionTitle) {
            const rect = sectionTitle.getBoundingClientRect();

            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                currentActiveLink = sectionTitle.getAttribute('id');
            }
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentActiveLink) {
            link.classList.add('active');
        }
    });
});


  
//product-img1
document.getElementById('color1').addEventListener('change',function(){
    document.getElementById('product-img1').src='/Image/product/find-n3-427_600-gold.png';
});

document.getElementById('color2').addEventListener('change',function(){
    document.getElementById('product-img1').src='/Image/product/find-n3-427_600-black.png';
});

//product-img2
document.getElementById('color3').addEventListener('change',function(){
    document.getElementById('product-img2').src='/Image/product/find-n3-flip-427_600-gold.png';
});

document.getElementById('color4').addEventListener('change',function(){
    document.getElementById('product-img2').src='/Image/product/find-n3-flip-427_600-pink.png';
});

document.getElementById('color5').addEventListener('change',function(){
    document.getElementById('product-img2').src='/Image/product/find-n3-flip-427_600-black.png';
});

//product-img3
document.getElementById('color6').addEventListener('change',function(){
    document.getElementById('product-img3').src='/Image/product/OPPO-Reno12-Pro-5G-silver.png';
});

document.getElementById('color7').addEventListener('change',function(){
    document.getElementById('product-img3').src='/Image/product/OPPO-Reno12-Pro-5G-brown.png';
});

//product-img4
document.getElementById('color8').addEventListener('change', function() {
    document.getElementById('product-img4').src = '/Image/product/OPPO-Reno12-5G-brown.png';
});

document.getElementById('color9').addEventListener('change', function() {
    document.getElementById('product-img4').src = '/Image/product/OPPO-Reno12-5G-silver.png';
});

//product-img5
document.getElementById('color-N1').addEventListener('change',function(){
    document.getElementById('product-img5').src='/Image/product/find-n3-427_600-gold.png';
});

document.getElementById('color-N2').addEventListener('change',function(){
    document.getElementById('product-img5').src='/Image/product/find-n3-427_600-black.png';
});

//product-img6
document.getElementById('color-N3').addEventListener('change',function(){
    document.getElementById('product-img6').src='/Image/product/find-n3-flip-427_600-gold.png';
});

document.getElementById('color-N4').addEventListener('change',function(){
    document.getElementById('product-img6').src='/Image/product/find-n3-flip-427_600-pink.png';
});

document.getElementById('color-N5').addEventListener('change',function(){
    document.getElementById('product-img6').src='/Image/product/find-n3-flip-427_600-black.png';
});

//product-img7
document.getElementById('color-N6').addEventListener('change',function(){
    document.getElementById('product-img7').src='/Image/product/find-n2-flip-purple_427_600.png';
});

document.getElementById('color-N7').addEventListener('change',function(){
    document.getElementById('product-img7').src='/Image/product/find-n2-flip-black_427_600.png';
});

//product-img8
document.getElementById('color-RENO1').addEventListener('change',function(){
    document.getElementById('product-img8').src='/Image/product/OPPO-RENO12-F-4G-427-600-green.png';
});

document.getElementById('color-RENO2').addEventListener('change',function(){
    document.getElementById('product-img8').src='/Image/product/OPPO-RENO12-F-4G-427-600-grey.png';
});

//product-img9
document.getElementById('color-RENO3').addEventListener('change',function(){
    document.getElementById('product-img9').src='/Image/product/OPPO-RENO12-F-5G-427-600-orange.png';
});

document.getElementById('color-RENO4').addEventListener('change',function(){
    document.getElementById('product-img9').src='/Image/product/OPPO-RENO12-F-5G-427-600-green.png';
});

//product-img10
document.getElementById('color-RENO5').addEventListener('change',function(){
    document.getElementById('product-img10').src='/Image/product/OPPO-Reno12-Pro-5G-silver.png';
});

document.getElementById('color-RENO6').addEventListener('change',function(){
    document.getElementById('product-img10').src='/Image/product/OPPO-Reno12-Pro-5G-brown.png';
});

//product-img11
document.getElementById('color-RENO8').addEventListener('change', function() {
    document.getElementById('product-img11').src = '/Image/product/OPPO-Reno12-5G-brown.png';
});

document.getElementById('color-RENO7').addEventListener('change', function() {
    document.getElementById('product-img11').src = '/Image/product/OPPO-Reno12-5G-silver.png';
});

//product-img12
document.getElementById('color-RENO9').addEventListener('change',function(){
    document.getElementById('product-img12').src='/Image/product/reno11-f-427-600-blue.png';
});

document.getElementById('color-RENO10').addEventListener('change',function(){
    document.getElementById('product-img12').src='/Image/product/reno11-f-427-600-purple.png';
});

document.getElementById('color-RENO11').addEventListener('change',function(){
    document.getElementById('product-img12').src='/Image/product/reno11-f-427-600-green.png';
});

//product-img13
document.getElementById('color-RENO12').addEventListener('change',function(){
    document.getElementById('product-img13').src='/Image/product/reno11-pro-427-600-white.png';
});

document.getElementById('color-RENO13').addEventListener('change',function(){
    document.getElementById('product-img13').src='/Image/product/reno11-pro-427-600-gray.png';
});

//product-img14
document.getElementById('color-RENO14').addEventListener('change',function(){
    document.getElementById('product-img14').src='/Image/product/reno11-427-600-green.png';
});

document.getElementById('color-RENO15').addEventListener('change',function(){
    document.getElementById('product-img14').src='/Image/product/reno11-427-600-gray.png';
});

//product-img15
document.getElementById('color-RENO16').addEventListener('change',function(){
    document.getElementById('product-img15').src='/Image/product/reno10-pro-plus-5g-427_600-purple.png';
});

document.getElementById('color-RENO17').addEventListener('change',function(){
    document.getElementById('product-img15').src='/Image/product/reno10-pro-plus-5g-427_600-grey.png';
});

//product-img16
document.getElementById('color-A1').addEventListener('change',function(){
    document.getElementById('product-img16').src='/Image/product/OPPO-A3X-427-600-blue.png';
});

document.getElementById('color-A2').addEventListener('change',function(){
    document.getElementById('product-img16').src='/Image/product/OPPO-A3X-427-600-red.png';
});

//product-img17
document.getElementById('color-A3').addEventListener('change',function(){
    document.getElementById('product-img17').src='/Image/product/OPPO-A3-427-600-white.png';
});

document.getElementById('color-A4').addEventListener('change',function(){
    document.getElementById('product-img17').src='/Image/product/OPPO-A3-427-600-purple.png';
});

document.getElementById('color-A5').addEventListener('change',function(){
    document.getElementById('product-img17').src='/Image/product/OPPO-A3-427-600-black.png';
});

//product-img18
document.getElementById('color-A6').addEventListener('change',function(){
    document.getElementById('product-img18').src='/Image/product/OPPO-A60-427-600-purple.png';
});

document.getElementById('color-A7').addEventListener('change',function(){
    document.getElementById('product-img18').src='/Image/product/OPPO-A60-427-600-blue.png';
});

//product-img19
document.getElementById('color-A8').addEventListener('change', function() {
    document.getElementById('product-img19').src = '/Image/product/OPPO-A79-5g-427_600-purple.png';
});

document.getElementById('color-A9').addEventListener('change', function() {
    document.getElementById('product-img19').src = '/Image/product/OPPO-A79-5g-427_600-black.png';
});

//product-img20
document.getElementById('color-A10').addEventListener('change',function(){
    document.getElementById('product-img20').src='/Image/product/OPPO-A38-427_600-gold.png';
});

document.getElementById('color-A11').addEventListener('change',function(){
    document.getElementById('product-img20').src='/Image/product/OPPO-A38-427_600-black.png';
});

//product-img21
document.getElementById('color-A12').addEventListener('change',function(){
    document.getElementById('product-img21').src='/Image/product/OPPO-A58-427_600-green.png';
});

document.getElementById('color-A13').addEventListener('change',function(){
    document.getElementById('product-img21').src='/Image/product/OPPO-A58-427_600-black.png';
});

//product-img22
document.getElementById('color-A14').addEventListener('change',function(){
    document.getElementById('product-img22').src='/Image/product/OPPO-A98-5g-427x600-blue.png';
});

document.getElementById('color-A15').addEventListener('change',function(){
    document.getElementById('product-img22').src='/Image/product/OPPO-A98-5g-427x600-black.png';
});

//product-img23
document.getElementById('color-A16').addEventListener('change',function(){
    document.getElementById('product-img23').src='/Image/product/OPPO-A78-427_600-green.png';
});

document.getElementById('color-A17').addEventListener('change',function(){
    document.getElementById('product-img23').src='/Image/product/OPPO-A78-427_600-black.png';
});

document.querySelector('.reset-filter').addEventListener('click', function(event) {
    event.preventDefault();
    // Đặt lại tất cả các bộ lọc
    document.querySelectorAll('.filter-select').forEach(select => select.selectedIndex = 0);
});

// Thêm bất kỳ mã JavaScript nào khác cần thiết cho các sự kiện khác
function resetFilters() {
    document.getElementById("dienthoai").selectedIndex = 0;
    document.getElementById("pin").selectedIndex = 0;
    document.getElementById("bonho").selectedIndex = 0;
    document.getElementById("5g").selectedIndex = 0;
}

function applyFilters() {
    alert('Áp dụng bộ lọc');
    // Implement functionality to apply filters here
}

