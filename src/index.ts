interface App {
  directive: (
    name: string,
    cb: (el: HTMLElement, binding: { value: string }) => void
  ) => void;
}

const VLang = {
  defaultLand: "en",
  seporator: "$",
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
    this.seporator = options.seporator;
    this.defaultLand = options.defaultLand;
    Vue.directive("lang", (el: HTMLElement, binding) => {
      const key = binding.value
        ? binding.value
        : navigator.language.substring(0, 2);
      el.childNodes.forEach((children) => {
        if (children.textContent?.includes(this.seporator)) {
          const dic: { [key: string]: string } = {};
          children.textContent.split(this.seporator).forEach((content) => {
            dic[content.slice(0, key.length)] = content.slice(2);
          });
          if (dic[key]) {
            children.textContent = dic[key];
          } else if (dic[this.defaultLand]) {
            children.textContent = dic[this.defaultLand];
          } else {
            console.error(
              `[v-lang] Default lang: "${this.defaultLand}".\nNo default translation!`
            );
            children.textContent = "ERROR";
          }
        }
      });
    });
  },
};

export default VLang;
