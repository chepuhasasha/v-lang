# v-lang

This plugin for VUE is designed to save you from having to maintain language dictionaries for the text content of your Vuejs application and make it easier to localize it. If you are tired of the endless naming of variables in the language dictionary, this plugin is for you.

---

[![stars](https://badgen.net/github/stars/sashachepuha/v-lang)](https://github.com/sashachepuha/v-lang)
[![latest version](https://badgen.net/npm/v/@sashachepuha/v-lang)](https://github.com/sashachepuha/v-lang)
[![license](https://badgen.net/github/license/sashachepuha/v-lang?color=cyan)](https://github.com/sashachepuha/v-lang/blob/main/LICENSE)
[![install size](https://badgen.net/packagephobia/install/@sashachepuha/v-lang?label=npm+install)](https://packagephobia.now.sh/result?p=@sashachepuha/v-lang)
[![open issues](https://badgen.net/github/open-issues/sashachepuha/v-lang?label=issues)](https://github.com/sashachepuha/v-lang/issues)

## Basic Usage

main.ts

```js
import { createApp } from "vue";
import App from "./App.vue";
import { VLang } from "@sashachepuha/vue-localization-plagin";

createApp(App).use(VLang).mount("#app");
```

### In Component

Write the text in the format `$ru Привет! - <seporator><language><text>`

```html
<template>
  <div v-lang="lang">$ru Привет! $en Hi!</div>
  <button @click="changeLang">CHANGE LANG</button>
</template>

<script setup lang="ts">
  import { computed, ref } from "vue";

  const lang = ref("ru");

  const changeLang = () => {
    lang.value = lang.value === "ru" ? "ru" : "en";
  };
</script>
```

---

#### ❌ Do not do that!

```html
<!-- bad bad bad.... 💩-->
<div v-lang="'ru'">
  <div>$ru Текст $en Text</div>
  <div>$ru Текст $en Text</div>
</div>
```

#### ✔️ Do it like this!

```html
<div>
  <div v-lang="'ru'">$ru Текст $en Text</div>
  <div v-lang="'ru'">$ru Текст $en Text</div>
</div>
```

---

## Custom seporator

You can set your own separator (default is `"$"`)

```js
createApp(App).use(VLang, "YOUR CUSTOM SEPORATOR").mount("#app");
```

---
