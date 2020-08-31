/**
 * 全ユーザーの在室状況・在室時間を可視化する関数
 * @param {array} users
 */
// function showUsers(users) {
//   const main = document.getElementById("main");
//   const ul = document.createElement("ul");
//   main.appendChild(ul);
//   /**
//    * 現在のHTMLの状態
//    * <div id="main">
//    *   <ul>
//    * </div>
//    */

//   users.forEach((user) => {
//     const li = document.createElement("li");
//     li.classList.add("flex");
//     li.classList.add("user_list");
//     li.classList.add("row");
//     ul.appendChild(li);
//     /**
//      * 現在のHTMLの状態
//      * <div id="main">
//      *   <ul>
//      *     <li></li>
//      *   </ul>
//      * </div>
//      */

//     // divタグを格納する配列を定義
//     let div = [];
//     div.length = 4;

//     for (let i = 0; i < div.length; i++) {
//       div[i] = document.createElement("div");
//     }

//     // イメージカラーを表示する
//     div[0].setAttribute(
//       "style",
//       "background-color: rgb(" + user.r + "," + user.g + "," + user.b + ")"
//     );
//     div[0].classList.add("image_color");
//     div[0].classList.add("col-1");

//     // ユーザー名を表示する
//     div[1].innerHTML = user.name;
//     div[1].classList.add("user_name");
//     div[1].classList.add("col-6");
//     if (user.attend == 1) {
//       div[1].classList.add("attend");
//     } else if (user.attend == 0) {
//       div[1].classList.add("absent");
//     }

//     // IN or OUTを表示する
//     div[2].classList.add("in_out");
//     div[2].classList.add("col-2");
//     const img = document.createElement("img");
//     img.classList.add("d-block");
//     img.classList.add("mx-auto");
//     if (user.attend == 1) {
//       img.classList.add("in_image");
//       img.setAttribute("src", "../img/in.png");
//       img.setAttribute("alt", "INの画像です");
//       div[2].setAttribute("style", "background-color: white");
//     } else if (user.attend == 0) {
//       img.classList.add("out_image");
//       img.setAttribute("src", "../img/out.png");
//       img.setAttribute("alt", "OUTの画像です");
//       div[2].setAttribute("style", "background-color: #04012c");
//     }
//     div[2].appendChild(img);

//     // グラフとn時間前を表示する
//     div[3].classList.add("column");
//     div[3].classList.add("graph_time");
//     div[3].classList.add("col-3");
//     if (user.attend == 1) {
//       div[3].setAttribute("style", "background-color: white");
//     } else if (user.attend == 0) {
//       div[3].setAttribute("style", "background-color: #04012c");
//     }

//     // グラフと時間を表示するためのdivタグを作成
//     const div_child = [];
//     div_child.length = 2;
//     for (let i = 0; i < div_child.length; i++) {
//       div_child[i] = document.createElement("div");
//       div[3].appendChild(div_child[i]);
//     }

//     // グラフ画像を表示
//     div_child[0].setAttribute("style", "margin: 0px");

//     // モーダルの設定
//     div_child[0].classList.add("d-block");
//     div_child[0].classList.add("mx-auto");
//     div_child[0].setAttribute("data-toggle","modal");
//     div_child[0].setAttribute("data-target","#Modal");
//     div_child[0].onclick = function () {
//       callApi("../php/api.php?type=count&id="+user.id,drowCountGraph);
//     };

//     const graph_img = document.createElement("img");
//     graph_img.classList.add("graph_image");
//     if (user.attend == 1) {
//       graph_img.setAttribute("src", "../img/attend_graph.png");
//       graph_img.setAttribute("alt", "グラフの画像です");
//     } else if (user.attend == 0) {
//       graph_img.setAttribute("src", "../img/absent_graph.png");
//       graph_img.setAttribute("alt", "OUTの画像です");
//     }
//     div_child[0].appendChild(graph_img);

//     // n時間前を表示する
//     // 現在時刻の取得し、ミリ秒に変換する
//     const date = new Date();
//     const now = new Date(date.getFullYear(),(date.getMonth()+1),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds());
//     now_sec = now.getTime();

//     // データベースに保存されている日時を取得し、ミリ秒に変換する
//     const str = String(user.last_login);
//     const year = parseInt(str.substr(0,4));
//     const month = parseInt(str.substr(5,2));
//     const day = parseInt(str.substr(8,2));
//     const hour = parseInt(str.substr(11,2));
//     const min = parseInt(str.substr(14,2));
//     const sec = parseInt(str.substr(17,2));
//     const before = new Date(year,month,day,hour,min,sec);
//     const before_sec = before.getTime();

//     // 現在日時とデータベースの日時の差を取得し、時間に変換
//     let diff = parseInt(now_sec - before_sec);
//     const diff_hour = parseInt(diff / (1000 * 60 * 60));
//     if (diff_hour > 168) {
//       div_child[1].innerHTML = "7日以上前";
//     } else if (diff_hour > 24) {
//       const diff_day = parseInt(diff_hour / 24);
//       div_child[1].innerHTML = diff_day + "日前";
//     } else {
//       div_child[1].innerHTML = diff_hour + "時間前";
//     }

//     div_child[1].classList.add("text-center");
//     if (user.attend == 1){
//       div_child[1].setAttribute("style","color: #04012c");
//     } else if (user.attend == 0){
//       div_child[1].setAttribute("style","color: white");
//     }

//     // divタグを全てliにappendする
//     div.forEach((element) => {
//       li.appendChild(element);
//     });
//   });
// }
