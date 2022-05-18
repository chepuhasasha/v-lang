# v-lang

This plugin for VUE is designed to save you from having to maintain language dictionaries for the text content of your Vuejs application and make it easier to localize it. If you are tired of the endless naming of variables in the language dictionary, this plugin is for you.

[![stars](https://badgen.net/github/stars/chepuhasasha/v-lang)](https://github.com/chepuhasasha/v-lang)
[![latest version](https://badgen.net/npm/v/@chepuhasasha/v-lang)](https://github.com/chepuhasasha/v-lang)
[![license](https://badgen.net/github/license/chepuhasasha/v-lang?color=cyan)](https://github.com/chepuhasasha/v-lang/blob/main/LICENSE)
[![install size](https://badgen.net/packagephobia/install/@chepuhasasha/v-lang?label=npm+install)](https://packagephobia.now.sh/result?p=@chepuhasasha/v-lang)
[![open issues](https://badgen.net/github/open-issues/chepuhasasha/v-lang?label=issues)](https://github.com/chepuhasasha/v-lang/issues)

---

## Basic Usage

### Installation

```
npm install @chepuhasasha/v-lang
```

### Connection

Include plugin in `main.ts/js`

```js
import { createApp } from "vue";
import App from "./App.vue";
import VLang from "@chepuhasasha/v-lang";

createApp(App).use(VLang).mount("#app");
```

> Write the text in the format `<seporator><language><text> - $ru Привет!`

### Auto mode

If you do not specify a value for the v-lang directive, the plugin will automatically detect the language. The **first two** letters of `novigator.language` are used to determine the language. (`ru-RU` - language will be `ru`)

> If your layout does not have a language suitable for the user's language, then the plugin will set the value corresponding to the `en` key. How to change the default language, see the **[settings](#custom-settings)** section.

```html
<template>
  <div v-lang>$ru Привет! $en Hi!</div>
</template>
```

### Dinamic mode

The value for your key will be displayed.

> The key can be a string of any length, for example:
>
> ```html
> <div v-lang="'some key'">$some key Привет! $en Hi!</div>
> ```

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

## Custom settings

| option      | type       | description                                           |
| :---------- | ---------- | ----------------------------------------------------- |
| seporator   | _`string`_ | You can set your own separator (default is `"$"`)     |
| defaultLand | _`string`_ | You can set your own default lang (default is `"en"`) |

```js
const options = {
  seporator: "#"
  defaultLand: "ru"
}
createApp(App).use(VLang, options).mount("#app");
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
