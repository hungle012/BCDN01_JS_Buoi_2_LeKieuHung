/**
 * Khối 1: input
 * 1 số có 2 chử số 
 * 
 * num
 * 
 * Khối 2: 
 * B1: tạo biến và gán giá trị 
 * num , unit(số hàng đơn vị), ten(hàng chục)
 * B2: lấy số hàng chục
 * ten = Math.floor(sum/10);
 * B3 : lấy số hàng đơn vị
 * unit = num%10;
 * B4: tính tống 2 kí số
 * num = ten + unit;
 * 
 * Khối 3: tổng của 2 kí số
 * sum
 */
 function bai5() {
    var num = document.getElementById("inputNum").value;
    console.log(num);
    // lấy phần số hàng chục
    var ten = Math.floor(num / 10);
    console.log("số hàng chục là :" + ten);
    // // lấy số hàng đơn vị
    var unit = num % 10;
    console.log("số hàng đơn vị là :" + unit);
    // // tổng số của 2 kí số
    var tong = ten + unit;
    console.log("tổng số của 2 kí số là :" + tong);

    // hiển thị trên UI
    document.getElementById("txtBai5").innerHTML = "tổng số 2 kí số là: " + tong;
    

}
