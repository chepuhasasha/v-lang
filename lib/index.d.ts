interface App {
    directive: (name: string, cb: (el: HTMLElement, binding: {
        value: string;
    }) => void) => void;
}
declare const VLang: {
    install(Vue: App, options?: {
        seporator: string;
        defaultLand: string;
    }): void;
};
export default VLang;
