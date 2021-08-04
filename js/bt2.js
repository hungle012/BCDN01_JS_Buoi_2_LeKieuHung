/**
 * Khối 1 : input
 * 5 số thực 
 * num1, num2, num3, num4, num5
 * 
 * Khối 2: 
 * B1: tạo và gán giá trị cho 5 số thực
 * B2: tạo biến chứa giá trị trung bình của 5 số thực
 * B3: tính giá trị trung bình của 5 số thực
 * trungBinhTong = (num1 + num2 + num3 + num4 + num5) / 5
 * 
 * Khối 3:
 * trungBinhTong : giá trị trung bình của 5 số thực 
 */

// hàm tính 
function SumAg() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;
    var num5 = document.getElementById("num5").value;
    console.log(num1,num2,num3,num4,num5);

    // tính giá trị trung bình của 5 chử số chia hết cho 5
    var average = (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4)+ parseInt(num5) / 5);
    console.log(average);

    // hiển thị trên UI
    document.getElementById("txtTinh").innerHTML = "Giá trị trung bình của 5 số = " + average ;

}