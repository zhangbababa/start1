



// 选择 id 或 class 标签下的属性名，用上一层的 id 或 class
var oSideBoxImg = document.getElementById('img-box');
var aImg = oSideBoxImg.getElementsByTagName('img');
var oSideBoxList = document.getElementById('btn-box');
var aBtn = oSideBoxList.getElementsByTagName('li');

for( var i = 0; i<aBtn.length; i++){
    aBtn[i].index = i;
    aBtn[i].onclick = function(){
        for( var j = 0; j<aBtn.length; j++){
            aBtn[j].className = "";
            aImg[j].className = "";
        }
        aBtn[this.index].className = "selected";
        aImg[this.index].className = "active";
    }
}