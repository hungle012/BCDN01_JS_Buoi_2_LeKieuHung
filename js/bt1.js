
/**
 * Tính lương nhân viên 
 * 
 * Khối 1: input
 * Tiền lương 1 ngày (total)
 * tienluong (day)
 * 
 * 
 * Khối 2: các bước xử lý 
 * B1: tạo biến và gán giá trị cho tiền lương
 * tienluong
 * B2: tạo biến chưa số ngày làm , lương
 * date, luong
 * B3: tính tiền lương
 * totalLuong = total * day
 * 
 * 
 * khối 3: Output
 * luong : tiền lương nhân viên (totalLuong)
 * 
 */

// hàm tính 
function calcTIP() {
    var total = document.getElementById("inputTotal").value;
    var day = document.getElementById("inputDay").value;
    console.log(total, day);

    // tính tiền lương của mỗi người hàng tháng
    var totalLuong = total * day ;
    console.log(totalLuong);

    // hiển thị trên UI
    document.getElementById("txtResult").innerHTML = "Số tiền lương = " + totalLuong+ " VND";

}
