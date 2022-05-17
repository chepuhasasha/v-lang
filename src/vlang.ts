interface App {
  directive: (
    name: string,
    cb: (el: HTMLElement, binding: { value: string }) => void
  ) => void;
}

export const VLang = {
  install(Vue: App, separator = "$"): void {
    Vue.directive("lang", (el: HTMLElement, binding) => {
      el.childNodes.forEach((children) => {
        if (children.textContent?.includes(separator)) {
          const content = children.textContent.split(separator).find((el) => {
            return el.slice(0, 2) === binding.value;
          });
          if (content) children.textContent = content.slice(2);
        }
      });
    });
  },
};
