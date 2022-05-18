"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VLang = {
    defaultLand: "en",
    seporator: "$",
    install(Vue, options = {
        seporator: "$",
        defaultLand: "en",
    }) {
        this.seporator = options.seporator;
        this.defaultLand = options.defaultLand;
        Vue.directive("lang", (el, binding) => {
            const key = binding.value
                ? binding.value
                : navigator.language.substring(0, 2);
            el.childNodes.forEach((children) => {
                var _a;
                if ((_a = children.textContent) === null || _a === void 0 ? void 0 : _a.includes(this.seporator)) {
                    const dic = {};
                    children.textContent.split(this.seporator).forEach((content) => {
                        dic[content.slice(0, key.length)] = content.slice(2);
                    });
                    if (dic[key]) {
                        children.textContent = dic[key];
                    }
                    else if (dic[this.defaultLand]) {
                        children.textContent = dic[this.defaultLand];
                    }
                    else {
                        console.error(`[v-lang] Default lang: "${this.defaultLand}".\nNo default translation!`);
                        children.textContent = "ERROR";
                    }
                }
            });
        });
    },
};
exports.default = VLang;
//# sourceMappingURL=index.js.map