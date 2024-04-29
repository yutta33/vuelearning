<template>
  <pre>
    <code>
        {{ highlightedCode }}
    </code>
  </pre>
  <Chap0511 />
  <!-- <VueCodeHighlighter :code="code0511" lang="js" title="0511" /> -->
  <highlightjs autodetect :code="code0511" />
  <Chap0514 />
  <highlightjs autodetect :code="code0514" />
  <Chap0515 />
  <highlightjs autodetect :code="code0515" />
  <Chap0521 />
  <highlightjs autodetect :code="code0515" />
  <Chap0523 />
  <highlightjs autodetect :code="code0515" />
  </template>
  <script setup >
  import {ref} from "vue";
  import Chap0511 from "@/components/Chap0511.vue";
  import Chap0514 from "@/components/Chap0514.vue";
  import Chap0515 from "@/components/Chap0515.vue";
  import Chap0521 from "@/components/Chap0521.vue";
  import Chap0523 from "@/components/Chap0523.vue";
  // import { VueCodeHighlighter } from 'vue-code-highlighter'
  import 'highlight.js/styles/xcode.css'; // ここでデザインを変更
  import hljs from 'highlight.js/lib/core';
  import 'highlight.js/styles/github.css';
  import javascript from 'highlight.js/lib/languages/javascript.js';
  hljs.registerLanguage('javascript', javascript);

  const highlightedCode = hljs.highlight(
    'select * from TableName',
    { language: 'javascript' }
)


  const code0511 = ref(`<template>
  <div>
    <h2>5.1.1 双方向データバインディングを実現するv-model</h2>
    <section>
    <input type="text" v-model="inputNameModel">
    <p>{{ inputNameModel }}</p>
  </section>
  </div>
  </template>
  <script setup >
  import {ref} from "vue";
  // 5.1.1 双方向データバインディングを実現するv-model
  const inputNameModel = ref("双方向");
  <\/script>`);
  
  const code0514 = ref(`
  <template>
  <div >
    <h2>5.1.4 文字列入力以外のコントロールでのv-model</h2>
    <textarea v-model="inputTextarea"></textarea>
    <br />
    <section>
      <label><input type="radio" name="memberType" value="1" v-model="memberType" />通常会員</label>
      <label><input type="radio" name="memberType" value="2" v-model="memberType" />特別会員</label>
      <label><input type="radio" name="memberType" value="3" v-model="memberType" />優良会員</label>
      <br />
      <p>選択されたラジオボタン:{{ memberType }}</p>
    </section>
    <br />
    <section>
      <select v-model="memberTypeSelect">
        <option value="1">通常会員</option>
        <option value="2">特別会員</option>
        <option value="3">優良会員</option>
      </select>
      <br />
      <p>選択されたリスト:{{ memberTypeSelect }}</p>
    </section>
    <br />
    <section>
      <label><input type="checkbox" v-model="isAgreed" />同意する</label>
      <p>同意の結果：{{ isAgreed }}</p>
    </section>
    <br />
    <section>
      <label
        ><input type="checkbox" v-model="isAgreed01" true-value="1" false-value="0" />同意する</label
      >
      <p>同意の結果：{{ isAgreed01 }}</p>
    </section>
    <br />
    <section>
      <label><input type="checkbox" v-model="selectedOS" value="1" />macOS</label>
      <label><input type="checkbox" v-model="selectedOS" value="2" />Windows</label>
      <label><input type="checkbox" v-model="selectedOS" value="3" />Linux</label>
      <label><input type="checkbox" v-model="selectedOS" value="4" />iOS</label>
      <label><input type="checkbox" v-model="selectedOS" value="5" />Android</label>
      <p>選択されたOS:{{ selectedOS }}</p>
    </section>
    <br />
    <section>
      <select v-model="selectedOSSelect" multiple>
        <option value="1">macOS</option>
        <option value="2">Windows</option>
        <option value="3">Linux</option>
        <option value="4">iOS</option>
        <option value="5">Android</option>
      </select>
      <p>選択されたOS:{{ selectedOSSelect }}</p>
    </section>
  </div>
  </template>
  <script setup >
  import {ref} from "vue";
  
  // 5.1.4 文字列入力以外のコントロールでのv-model
  const inputTextarea = ref('テキストエリアへの入力文字。\n改行も加えてみる')
  const memberType = ref(1)
  const memberTypeSelect = ref(1)
  const isAgreed = ref(false)
  const isAgreed01 = ref(0)
  const selectedOS = ref([])
  const selectedOSSelect = ref([])
  
  <\/script>
  `);
  
  const code0515 = ref(`
  <template>
  <div>
    <h2>5.1.5 v-modelの修飾子</h2>
    <section>
      <input type="text" v-model.trim="trimedText">
    </section><br>
      <p>{{ trimedText }}</p>
  </div>
  </template>
  <script setup >
  import {ref} from "vue";
  // 5.1.5 v-modelの修飾子
  const trimedText = ref("");
  <\/script>
  `);
  
  
  const code0521 = ref(`
  <template>
  <div>
    <h2>5.2.1 HTML文字列をそのまま表示するv-html</h2>
    <section>{{ htmlstr }}</section><br>
    <section v-html="htmlstr"></section>  
  </div>
  </template>
  <script setup >
  import {ref} from "vue";
  // 5.2.1 HTML文字列をそのまま表示するv-html
  const htmlstr = ref('<a href="https://vuejs.org//">Vue.jsのTOPページ</a>');
  <\/script>
  `);
  
  const code0523 = ref(`
  <template>
  <div>
    <h2>5.2.3 データバインドを一度だけ表示させるv-once</h2>
    <section>
      <input type="number" v-model="price">円<br>
      <p>金額は{{ price }}円です</p>
      <p v-once>金額は{{ price }}円です</p>
    </section>
  </div>
  </template>
  <script setup >
  import {ref} from "vue";
  // 5.2.3 データバインドを一度だけ表示させるv-once
  const price = ref(1000);
  <\/script>
  `);
  
  const codeMulti = [
    {
      lang: "html",
      title: "hoge1",
      code: code0511.value,
    },
    {
      lang: "js",
      title: '0514',
      code: code0514.value,
    },
    {
      lang: "js",
      title: '0515',
      code: code0515.value,
    },
    {
      lang: "js",
      title: '0521',
      code: code0521.value,
    },
    {
      lang: "js",
      title: '0523',
      code: code0523.value,
    },
  ]
  
  </script>
  <style>
  
  pre {
      margin: 0 !important;
  }
  
  pre code {
      border-radius: 0 0 10px 10px !important;
      margin: 0 !important;
      font-size: 14px;
  }
  
  .wrapper-code-highlight {
      background-color: #334155;
      border-radius: 12px;
  }
  
  .wrapper-section-code-highlight {
      background-color: #334155;
      border-radius: 10px 10px 10px 0;
      width: 100%;
      height: 100%;
      font-size: 14px;
      display: flex;
      align-items: center;
  }
  
  .wrapper-title-code-highlight {
      font-family: 'General Sans', sans-serif;
      padding: 0 16px;
      font-weight: 500;
      font-size: 12px;
      border-radius: 10px 0 0 0;
      background-color: #2563EB;
      display: flex;
      align-items: center;
      height: 100%;
  }
  
  .wrapper-copy-code-highlight {
      padding: 0 16px;
      font-weight: 500;
      border-radius: 0 10px 0 10px;
      height: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
      display: flex;
      background-color: #334155;
      cursor: pointer;
  }
  
  .header-code-highlight {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #272822;
      height: 40px;
      color: white;
      width: 100%;
  }
  
  .border-copy {
      border-radius: 10px 10px 0 0;
  }
  
  .border-disable-copy {
      border-radius: 10px 10px 0 0;
  }
  
  .mr6 {
      margin-right: 6px;
  }
  </style>