//直接將配對用三個div包起來，但只有第一個顯示，其他隱藏起來
var d1 = document.getElementById('pair1');
var d2 = document.getElementById('pair2');
var d3 = document.getElementById('pair3');
var i1 = document.getElementById('img1');
var i2 = document.getElementById('img2');
var i3 = document.getElementById('img3');
var inform = document.getElementById('informU');
var close = document.getElementById('close');

//記錄按鈕被點擊次數，隨次數設定條件呈現不同效果
var count = 0;
$('.match').on('click', function () {
    count++;
    if (count == 1) {
        d1.style.display = 'none';
        i1.style.display = 'none';
        d2.style.display = 'block';
        i2.style.display = 'block';
    } else if (count == 2) {
        d2.style.display = 'none';
        i2.style.display = 'none';
        d3.style.display = 'block';
        i3.style.display = 'block';
    } else {
        // alert('今日配對次數已用畢');
        setTimeout(warnout, 400);
    }
})
function warnout() {
    // alert('今日配對次數已用畢');
    inform.showModal();
    close.addEventListener('click', function () {
        inform.close();
    })
}

//產生聊天室
$('#chat').on('click', function () {
    // window.open("/chatroom");
    setTimeout(forchat, 800);
})
function forchat() {
    window.open("/chatroom")
}

// function submitForm() {

//     var gender = document.getElementsByTagName('input')[name = "gender"].value;
//     var minage = document.getElementsByTagName('input')[name = "minage"].value;
//     var maxage = document.getElementsByTagName('input')[name = "maxage"].value;
//     var county = document.getElementsByTagName('select')[name = "County"].value;

//     var req = new XMLHttpRequest();

//     req.open("POST", '/pair');
//     req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     req.send();

//     req.onreadystatechange = function () {
//         if (req.readystate == 4 && req.status == 200) {
//             alert(req.responseTest)
//         }
//     }

//     return false;
// }