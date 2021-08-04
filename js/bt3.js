/**
 * Khối 1: input
 * giá USD hiện tại
 * usd
 * 
 * Khối 2: 
 * B1: tạo và gán giá trị usd cần đổi ra tiền VND
 * USD
 * B2: tạo biến và gán giá trị với mệnh giá VND
 * VND
 * B3: tính số tiền quy đổi
 * soTienDoi = USD * VND
 * 
 * Khối 3: output
 * số tiền được đổi ra
 */
// hàm tính 
function change() {
    var USD = document.getElementById("inputUSD").value;
    var VND = document.getElementById("inputVND").value;
    console.log(USD, VND);

    // Quy đổi tiền mặt
    var doiTien = USD * VND ;
    console.log(doiTien);

    // hiển thị trên UI
    document.getElementById("txtMoney").innerHTML = "Tiền = " + doiTien + " VND";

}
