"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VLang = void 0;
exports.VLang = {
    install(Vue, separator = "$") {
        Vue.directive("lang", (el, binding) => {
            el.childNodes.forEach((children) => {
                var _a;
                if ((_a = children.textContent) === null || _a === void 0 ? void 0 : _a.includes(separator)) {
                    const content = children.textContent.split(separator).find((el) => {
                        return el.slice(0, 2) === binding.value;
                    });
                    if (content)
                        children.textContent = content.slice(2);
                }
            });
        });
    },
};
//# sourceMappingURL=index.js.map