function Func_1() { //ฟังก์ชันอันแรก แสดงข้อความใน Id:text-1
    document.getElementById("text-1").innerHTML = "<hr>" + "Name : Sirapatson Imkrajang" + "<br>" + "Location : Thailand" + "<hr>" ;
    
}

function Func_2() { //ฟังก์ชันอันที่สองแสดงข้อความใน Id:text-1 สลับกับฟังก์ชันอันแรกตามปุ่มที่กด
    document.getElementById("text-1").innerHTML =  "<hr>" + "I am a student at Bangkok University." + "<br> <br>" + "I'm studying JavaScript Programming" + "<br>" + "with Visual Studio Code." + "<hr>";
}


