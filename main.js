let plyname = prompt("名前を教えてください");
let flag = true;
//プレイヤーデータ
let plyLv = 1;
let plyHp = 15;
let plyHpMax = 15;
let plyAtt = 1;
let plyHeal = 1;
let plyExp = 0;
let plyExpNext = 15;
let plyExpNeed = [15, 30, 80, 150, 300, 500, 1000];
let plyImg = document.getElementById("plyImg");
let plySt = new Array(7);
for (i = 0; i < 7; i++) {
  plySt[i] = document.getElementById("plySt" + i);
}
plySt[0].textContent = plyname;
// let player = new Array(7);
// player = ["plySt0", "plySt1", "plySt3", "plySt4", "plySt5", "plySt6"];
// for (i = 0; i < 7; i++) {
//   player[i] = document.getElementById("player[i]");
// }
// let plySt0 = document.getElementById("plySt0");
// let plySt1 = document.getElementById("plySt1");
// let plySt2 = document.getElementById("plySt2");
// let plySt3 = document.getElementById("plySt3");
// let plySt4 = document.getElementById("plySt4");
// let plySt5 = document.getElementById("plySt5");
// let plySt6 = document.getElementById("plySt6");

//プレイヤー回復
plyImg.addEventListener("mousedown", () => {
  if (flag) {
    plyImg.src = "img/playerC.png";
  }
});
plyImg.addEventListener("mouseup", () => {
  if (flag) {
    plyImg.src = "img/playerA.png";
    plyHp += plyHeal;
    if (plyHp > plyHpMax) {
      plyHp = plyHpMax;
    } else {
      plySt[2].textContent = "HP:" + plyHp;
    }
  }
});
//敵データ;
let eneLv = 1;
let eneHp = 10;
let eneHpMax = [10, 20, 30, 20, 60, 40, 10, 80, 90, 150];
let eneAtt = [1, 4, 6, 5, 5, 4, 20, 10, 7, 14];
let Attack = 1;
let enekill = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let eneExp = [1, 5, 3, 4, 5, 6, 15, 8, 25, 0];
let eneCnt = 19;
let eneCntMax = [19, 15, 15, 13, 15, 16, 99, 18, 15, 17];
let eneName = [
  "スライム",
  "コウモリ",
  "ドブネズミ",
  "ヘビ",
  "オオカミ",
  "ゴブリン",
  "ゴースト",
  "ゾンビ",
  "ファイヤ",
  "クマ",
];
// for (let i = 0; i < eneState.length; i++) {
//   mog[i] = new Array(9);
// }12
// let eneStateX = 0;
// let emeStateY = 0;
// let eneState = new Array(9);
// eneState = [
//   [1, 10, 10, 1, 0, 1, 19, 19],
//   [2, 20, 20, 0, 0, 5, 15, 15],
//   [3, 30, 30, 0, 0, 3, 15, 15],
//   [4, 20, 20, 0, 0, 4, 11, 13],
//   [5, 60, 60, 0, 0, 5, 15, 15],
//   [6, 40, 40, 0, 0, 6, 16, 16],
//   [7, 10, 10, 0, 0, 15, 99, 99],
//   [8, 80, 80, 0, 0, 8, 14, 18],
//   [9, 90, 90, 0, 0, 25, 10, 15],
//   [10, 150, 150, 1, 0, 1, 17, 17],
// ];
// let eneState = new Array(7);
// eneState = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   [10, 20, 30, 20, 60, 40, 10, 80, 90, 150],
//   [10, 20, 30, 20, 60, 40, 10, 80, 90, 150],
//   [1, 0, 0, 0, 0, 0, 0, 10, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 5, 3, 4, 5, 6, 15, 8, 25, 0],
//   [19, 15, 15, 11, 15, 16, 99, 14, 10, 17],
//   [19, 15, 15, 13, 15, 16, 99, 18, 15, 17],
// ];
let eneImg = document.getElementById("eneImg");
let eneSt = new Array(5);
for (i = 0; i < 5; i++) {
  eneSt[i] = document.getElementById("eneSt" + i);
}
eneSt[0].textContent = eneName[eneLv - 1];
// let enemy = new Array(5);
// enemy = ["eneSt0", "eneSt1", "eneSt2", "eneSt3", "eneSt4"];
// for (i = 0; i < 5; i++) {
//   enemy[i] = document.getElementById("enemy[i]");
// }
//let eneImg = document.getElementById("eneImg");
// let eneSt0 = document.getElementById("eneSt0");
// let eneSt1 = document.getElementById("eneSt1");
// let eneSt2 = document.getElementById("eneSt2");
// let eneSt3 = document.getElementById("eneSt3");
// let eneSt4 = document.getElementById("eneSt4");
//敵を攻撃

//for (let i = 0; i < eneState.length; i++) {
//eneState[1][i] = eneState[2][i];
//if (eneState[i][2] <= 0) {
//for (let j = 0; j < 8; j++) {
eneImg.addEventListener("mousedown", () => {
  if (flag) {
    eneImg.src = "img/enemyB" + (eneLv - 1) + ".png";
  }
});
eneImg.addEventListener("mouseup", () => {
  if (flag) {
    eneImg.src = "img/enemyA" + (eneLv - 1) + ".png";
    if (eneHp > 0) {
      //eneHp0
      eneHp -= plyAtt; //eneHp0
    } else {
      // eneHp -= eneStateHpMax; //eneHp0 -= eneHpMax0
      enekill[eneLv - 1]++; //enekill0
      eneSt[4].textContent = "倒した回数:" + enekill[eneLv - 1]; //enekill0
      //経験値の処理
      plyExp += eneExp[eneLv - 1]; //eneExp0
      plySt[5].textContent = "経験値:" + plyExp;
      plyExpNext -= eneExp[eneLv - 1]; //eneExp0
      //次のステージへ進む
      eneLv++;
      if (eneLv > 10) {
        flag = false;
        document.getElementById("clear").style.display = "block";
      } else {
        eneImg.src = "img/enemyA" + (eneLv - 1) + ".png";
        eneHp = eneHpMax[eneLv];
        eneAttack = eneAtt[eneLv - 1];
        eneExp[0] = eneExp[eneLv - 1];
        eneCnt = eneCntMax[eneLv - 1];
        eneSt[0].textContent = eneName[eneLv - 1];
        eneSt[1].textContent = "レベル:" + eneLv;
        eneSt[2].textContent = "HP:" + eneHp;
        eneSt[3].textContent = "攻撃力:" + eneAttSc;
        eneSt[4].textContent = "倒した回数:" + eneKill[eneLv - 1];
        //レベルアップ処理
        if (plyExpNext <= 0) {
          plyExpNext = plyExpNeed[plyLv];
          plyLv++;
          plySt[1].textContent = "レベル:" + plyLv;
          plyHpMax = plyLv * 3 + 6;
          plyHp = plyHpMax;
          plySt[2].textContent = "HP:" + plyHp;
          plyAtt++;
          plySt[3].textContent = "攻撃力:" + plyAtt;
          plyHeal++;
          plySt[4].textContent = "回復魔法:" + plyHeal;
        }
      }
    }
    plySt[6].textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
    eneSt[2].textContent = "HP:" + eneHp; //eneHp0
  }
});
//敵が時間ごとに攻撃
let eneSec = document.getElementById("eneSec");
let loop = setInterval(() => {
  if (eneCnt > 0 && flag) {
    //eneCnt0
    eneCnt--; //eneCnt0
    eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒"; //eneCnt0
  } else if (flag) {
    plyImg.src = "img/playerB.png";
    plyHp = plyHp - eneAtt[eneLv - 1]; //eneAtt0
    if (plyHp > 0) {
      plySt[2].textContent = "HP:" + plyHp;
      eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒"; //eneCnt0
    } else {
      plyHp = 0;
      clearInterval(loop);
      flag = false;
      plySt[2].textContent = "HP:" + plyHp;
      eneSec.textContent = "ゲームオーバー";
    }
    setTimeout(() => {
      if (flag) {
        eneCnt = eneCntMax[0]; //eneCnt0 = eneCntMax0
        plyImg.src = "img/playerA.png";
        eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒";
      }
    }, 500);
  }
  eneSec.src = "img/clear.png";
}, 1000);
//}
let right = document.getElementById("right");
right.addEventListener("click", () => {
  if (flag) {
    eneLv++;
    eneImg.src = "img/enemyA" + (eneLv - 1) + ".png";
    eneHp = eneHpMax[eneLv - 1];
    eneAttack = eneAtt[eneLv - 1];
    eneExp[0] = eneExp[eneLv - 1];
    eneCnt = eneCntMax[eneLv - 1];
    eneSt[0].textContent = eneName[eneLv - 1];
    eneSt[1].textContent = "レベル:" + eneLv;
    eneSt[2].textContent = "HP:" + eneHp;
    eneSt[3].textContent = "攻撃力:" + eneAtt[eneLv - 1];
    eneSt[4].textContent = "倒した回数:" + eneKill[eneLv - 1];
  }
});
let left = document.getElementById("left");
left.addEventListener("click", () => {
  if (flag) {
    eneLv--;
    eneImg.src = "img/enemyA" + (eneLv - 1) + ".png";
    eneHp = eneHpMax[eneLv - 1];
    eneAttack = eneAtt[eneLv - 1];
    eneExp[0] = eneExp[eneLv - 1];
    eneCnt = eneCntMax[eneLv - 1];
    eneSt[0].textContent = eneName[eneLv - 1];
    eneSt[1].textContent = "レベル:" + eneLv;
    eneSt[2].textContent = "HP:" + eneHp;
    eneSt[3].textContent = "攻撃力:" + eneAtt[eneLv - 1];
    eneSt[4].textContent = "倒した回数:" + eneKill[eneLv - 1];
  }
});
