const drawButton = document.getElementById("draw");
const userNameInput = document.getElementById("user-name");
const displayArea = document.getElementById("display-area");
const fortuneslips = [
  'img/greatLuck.png',
  'img/middleLuck.png',
  'img/smallLuck.png',
  'img/goodLuck.png',
  'img/uncertainLuck.png',
  'img/badLuck.png',
  'img/worseLuck.png'
];

function drawFortuneslip(){
  let r = Math.floor(Math.random() * fortuneslips.length);
  return fortuneslips[r];
};

drawButton.onclick = () => {
  const userName = userNameInput.value;
  if (userName.length === 0) {
    // 名前が空の時は処理を終了する
    return;
  }
  displayArea.innerText = '';
   // HTMLに表示したい要素の作成
 const h3 = document.createElement('h3');
 h3.innerText = `${userName}さんの今日の運勢は…`;
 displayArea.appendChild(h3);
 
 const img = document.createElement('img');
 let imgPath =  drawFortuneslip();
 img.setAttribute('src',imgPath);
 displayArea.appendChild(img);
};

