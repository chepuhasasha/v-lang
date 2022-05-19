interface App {
  directive: (
    name: string,
    cb: (el: HTMLElement, binding: { value: string }) => void
  ) => void;
}

const VLang = {
  install(
    Vue: App,
    options: {
      seporator: string;
      defaultLand: string;
    } = {
      seporator: "$",
      defaultLand: "en",
    }
  ): void {
    Vue.directive("lang", (el: HTMLElement, binding) => {
      const key = binding.value
        ? binding.value
        : navigator.language.substring(0, 2);
      el.childNodes.forEach((children) => {
        if (children.textContent?.includes(options.seporator)) {
          const dic: { [key: string]: string } = {};
          children.textContent.split(options.seporator).forEach((content) => {
            dic[content.slice(0, key.length)] = content.slice(key.length);
          });
          if (dic[key]) {
            children.textContent = dic[key];
          } else if (dic[options.defaultLand]) {
            children.textContent = dic[options.defaultLand];
          } else {
            console.error(
              `[v-lang] Default lang: "${options.defaultLand}".\nNo default translation!`
            );
            children.textContent = "ERROR";
          }
        }
      });
    });
  },
};

export default VLang;

