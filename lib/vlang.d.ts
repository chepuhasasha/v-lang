interface App {
    directive: (name: string, cb: (el: HTMLElement, binding: {
        value: string;
    }) => void) => void;
}
export declare const VLang: {
    install(Vue: App, separator?: string): void;
};
export {};
