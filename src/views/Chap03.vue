<template>
  <h1>こんにちは!{{name}}さん</h1>
  <div>
    <h2>reactive system</h2>
    <p>現在時刻：{{ timeStr }}</p>
    <p>現在時刻(ref)：{{ timeStrRef }}</p>    
  </div>
  <div>
    <h2>computed</h2>
    <p>半径{{ radius }}の円の面積を円周率{{ PI }}で計算すると{{ area }}</p>
  </div>
  <div>
    <h2>reactive function</h2>
    <p>半径{{ data.radius }}の円の面積を円周率{{ data.PI }}で計算すると、{{ area2 }}</p>
  </div>
</template>
<script setup>
import {ref, reactive, computed} from "vue";

const name = ref("田中太郎");

// 現在日時を取得
const now = new Date();
// 現在の時刻の文字列を取得
const nowStr = now.toLocaleTimeString();
// 現在の時刻文字列をテンプレート変数として用意
let timeStr = nowStr;
// 同じく現在の時刻文字列をテンプレート変数としてref()で用意
const timeStrRef = ref(nowStr);
// 新しい時刻に変更する関数
function changeTime(){
  // 現在日時を取得
  const newTime = new Date();
  // 現在の時刻文字列を取得
  const newTimeStr = newTime.toLocaleTimeString();
  // 現在の時刻文字列をテンプレート変数timeStrに格納
  timeStr = newTimeStr;
  // 現在の時刻文字列をテンプレート変数timeStrRefに格納
  timeStrRef.value = newTimeStr;
}
// changeTime関数を1秒ごとに実行。
setInterval(changeTime, 1000);

// 半径の初期値を乱数で取得
const radiusInit = Math.round(Math.random() * 10);
// 円周率のテンプレートを用意
const PI = ref(3.14);
// 半径のテンプレート変数を用意
const radius = ref(radiusInit);
// 円の面積の算出プロパティを用意
const area = computed(
    () => {
        return radius.value * radius.value * PI.value;
    }
);
// 半径のテンプレート変数に新しい乱数を1秒ごとに格納
setInterval(
  () => {
    radius.value = Math.round(Math.random() * 10);
  },
  1000
);


//reactive function
//リアクティブなテンプレート変数をまとめて用意
const data = reactive({
  PI: 3.14,
  radius: Math.round(Math.random() * 10)
});

// 円の算出プロパティを用意
const area2 = computed(
  () => {
    return data.radius * data.radius * data.PI;
  }
);
// 半径のテンプレート変数に新しい乱数を1秒ごとに格納
setInterval(
  () => {
    data.radius = Math.round(Math.random() * 10);
  },
  1000
);
</script>
