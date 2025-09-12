import { ObservableMaybe, type JSX } from 'woby';
export declare const isTemp: (s: any) => s is TemplateStringsArray;
export declare const extract: <K extends keyof JSX.IntrinsicElementsMap>(C: K, props: JSX.IntrinsicElements[K], classNames?: ObservableMaybe<JSX.Class>) => JSX.IntrinsicElementsMap[K];
//# sourceMappingURL=utils.d.ts.map