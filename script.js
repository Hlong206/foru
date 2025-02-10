function openLetter() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    // Mở phong bì và thư
    envelope.style.transform = 'rotateX(180deg)';  // Quay phong bì để mở
    letter.classList.add('open');  // Thêm lớp "open" vào thư để nó xuất hiện
}

function closeLetter() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    // Đóng phong bì và thư
    envelope.style.transform = 'rotateX(0deg)';  // Đóng phong bì lại
    letter.classList.remove('open');  // Loại bỏ lớp "open" để thư biến mất
}
