"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VLang = {
    install(Vue, options = {
        seporator: "$",
        defaultLand: "en",
    }) {
        Vue.directive("lang", (el, binding) => {
            const key = binding.value
                ? binding.value
                : navigator.language.substring(0, 2);
            el.childNodes.forEach((children) => {
                var _a;
                if ((_a = children.textContent) === null || _a === void 0 ? void 0 : _a.includes(options.seporator)) {
                    const dic = {};
                    children.textContent.split(options.seporator).forEach((content) => {
                        dic[content.slice(0, key.length)] = content.slice(key.length);
                    });
                    if (dic[key]) {
                        children.textContent = dic[key];
                    }
                    else if (dic[options.defaultLand]) {
                        children.textContent = dic[options.defaultLand];
                    }
                    else {
                        console.error(`[v-lang] Default lang: "${options.defaultLand}".\nNo default translation!`);
                        children.textContent = "ERROR";
                    }
                }
            });
        });
    },
};
exports.default = VLang;
//# sourceMappingURL=index.js.map