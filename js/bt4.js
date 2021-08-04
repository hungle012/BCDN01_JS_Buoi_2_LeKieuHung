/**
 * Khối 1: input
 * 2 cạnh hình chữ nhật
 * chieudai
 * chieurong
 * 
 * khối 2: 
 * B1: tạo biến và gán giá trị cho chiều dài và chiều rộng
 * chieudai , chieurong
 * B2: tạo 2 biến chứa dienTich và chuVi
 * B3 : xây dựng công thức tính 
 * dienTich = chieuDai * chieuRong;
 * chuVi = (chieuDai + chieuRong) * 2;
 * B4: hiện kết quả dienTich, chuVi
 * 
 * Khối 3: output
 * dientich, chuVi hình chử nhật
 */

// hàm tính 
document.getElementById("btnDV").onclick = function()  {
    var width = parseFloat(document.getElementById("width").value);
    var hight = parseFloat(document.getElementById("hight").value);
    console.log(width, hight);

    // tính chu vi
    var perimeter = (width + hight) * 2;
    console.log("chu vi là" + perimeter);

    // tính diện tích
    var area = (width * hight);
    console.log("Diện tích là" + area);

    // hiển thị trên UI
    document.getElementById("txtChuVi").innerHTML = "Chu vi = " + perimeter+ " cm";
    document.getElementById("txtDienTich").innerHTML = "Diện tích = " +area+ " cm";
}
