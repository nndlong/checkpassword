function checkNumber() {
    const inputNumber = document.getElementById('input-number').value;
    const errorMessage = document.getElementById('error-message');

    if (inputNumber === '0') {
        // Chuyển sang trang tiếp theo (Trang 1)
        window.location.href = 'page1.html';
    } else {
        errorMessage.textContent = 'Em bé nhập sai rùi, kiểm tra kỹ lại nhé';
    }
}

function checkCode(code) {
    const inputCode = document.getElementById('input-code').value;
    const errorMessage = document.getElementById('error-message');

    // Kiểm tra mã nhập vào từng trang
    let correctCode = '';
    switch (code) {
        case 1:
            correctCode = '9213';
            break;
        case 2:
            correctCode = '2013';
            break;
        case 3:
            correctCode = '3344';
            break;
        case 4:
            correctCode = '1314';
            break;
        default:
            correctCode = '';
    }

    if (inputCode === correctCode) {
        // Chuyển sang trang kế tiếp
        if (code < 4) {
            window.location.href = `page${code + 1}.html`;
        } else {
            alert("Chúc mừng em bé đã tìm thấy 4 mảnh ghép, còn 1 mảnh giấy được giấu ở đồ đôi chúng ta. Hãy tìm để đi đến cuối nhé");
        }
    } else {
        errorMessage.textContent = 'Em bé nhập sai rùi, kiểm tra kỹ lại nhé';
    }
}
