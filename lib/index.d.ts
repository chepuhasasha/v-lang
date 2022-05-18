interface App {
    directive: (name: string, cb: (el: HTMLElement, binding: {
        value: string;
    }) => void) => void;
}
declare const VLang: {
    defaultLand: string;
    seporator: string;
    install(Vue: App, options?: {
        seporator: string;
        defaultLand: string;
    }): void;
};
export default VLang;
