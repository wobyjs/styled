import { ObservableMaybe, ObservableReadonly, type JSX } from 'woby';
/**
 * Convert inline css style to HTMLElement style string.
 * @example
 * const color = ${'red'}
 * <div style={css`color:${color};`}></div>
 *
 * Output:
 *   <div style='color:red;'></div>
 *
 * @example
 * const ND = css('div')`color:blue;`
 *
 * Output:
 *   <ND>blue color text here in a div container</ND>
 */
export declare const css: <K extends (keyof JSX.IntrinsicElementsMap | TemplateStringsArray)>(strings: K, ...values: ObservableMaybe<any>[]) => K extends keyof JSX.IntrinsicElementsMap ? (strings: TemplateStringsArray, ...values: ObservableMaybe<any>[]) => (props: JSX.IntrinsicElements[K]) => JSX.IntrinsicElementsMap[K] : ObservableReadonly<string>;
//# sourceMappingURL=css.d.ts.map