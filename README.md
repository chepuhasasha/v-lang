# v-lang

![header](https://raw.githubusercontent.com/chepuhasasha/v-lang/4483e0f8d510f86fbeb60f13aea003b971bc106f/assets/HEADER.svg)

This plugin for VUE is designed to save you from having to maintain language dictionaries for the text content of your Vuejs application and make it easier to localize it. If you are tired of the endless naming of variables in the language dictionary, this plugin is for you.

[![stars](https://badgen.net/github/stars/chepuhasasha/v-lang)](https://github.com/chepuhasasha/v-lang)
[![latest version](https://badgen.net/npm/v/@chepuhasasha/v-lang)](https://github.com/chepuhasasha/v-lang)
[![license](https://badgen.net/github/license/chepuhasasha/v-lang?color=cyan)](https://github.com/chepuhasasha/v-lang/blob/main/LICENSE)
[![install size](https://badgen.net/packagephobia/install/@chepuhasasha/v-lang?label=npm+install)](https://packagephobia.now.sh/result?p=@chepuhasasha/v-lang)
[![open issues](https://badgen.net/github/open-issues/chepuhasasha/v-lang?label=issues)](https://github.com/chepuhasasha/v-lang/issues)

## Contents

- [Quick start](#quick-start)
- [Custom usage](#custom-usage)
- [Settings](#settings)
- [Features of use](#features-of-use)

---

## Quick start

### Install

```
npm install @chepuhasasha/v-lang
```

### Register the plugin in `main.ts/js`

```js
import { createApp } from "vue";
import App from "./App.vue";
import VLang from "@chepuhasasha/v-lang";

createApp(App).use(VLang).mount("#app");
```

### Use in template

If you do not specify a value for the `v-lang` directive, the plugin will automatically detect the language. The **first two** letters of `novigator.language` are used to define the language. (`ru-RU` - language will be `ru`)

Write the text in the format `<seporator><language><text> - $ru Русский текст`

<div style='display: flex; width: 100%; justify-content: center; padding: 20px'>
  <img src='https://raw.githubusercontent.com/chepuhasasha/v-lang/4483e0f8d510f86fbeb60f13aea003b971bc106f/assets/FORMAT.svg'>
</div>

```html
<template>
  <button v-lang>$ru Русский текст $en English text</button>
</template>
```

> If your layout does not have a language suitable for the user's language, then the plugin will set the value corresponding to the `en` key. How to change the default language, see the **[settings](#custom-settings)** section.

---

## Custom usage

You can dynamically pass any key to the `v-lang` directive.
The key can be a string of any length, for example:

```html
<div v-lang="'some key'">$some key Привет! $some key 2 Hi!</div>
```

Example with dynamic key switching:

```html
<template>
  <button @click="changeLang" v-lang="lang">$ru Русский $en English</button>
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

## Settings

| option      | type       | default |
| :---------- | ---------- | ------- |
| seporator   | _`string`_ | `"$"`   |
| defaultLand | _`string`_ | `"en"`  |

```js
const options = {
  seporator: "#"
  defaultLand: "ru"
}
createApp(App).use(VLang, options).mount("#app");
```

---

## Features of use

❌ Do not do that!

```html
<div v-lang="'ru'">
  <div>$ru Текст $en Text</div>
  <div>$ru Текст $en Text</div>
</div>
```

✔️ Do it like this!

```html
<div>
  <div v-lang="'ru'">$ru Текст $en Text</div>
  <div v-lang="'ru'">$ru Текст $en Text</div>
</div>
```
