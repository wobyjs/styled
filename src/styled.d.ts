import { JSX, ObservableMaybe, ObservableReadonly } from 'woby';
/** convert inline css to class and update <style></style> element
 *
 * @example
 * const color = ${'red'}
 * <div class={styled`color:${color};`}></div>
 *
 * Output:
 * <head>
 *   <style>
 *   .hash-name {
 *     color:red;
 *   }
 *   </style>
 * <head>
 * <body>
 *   <div class='hash-name'></div>
 * </body>
 *
 * @example
 * const ND = cls('div')`color:${color};`
 *
 * Updating <style> in head and prepend className into ND component.
 */
export declare const styled: <K extends (keyof JSX.IntrinsicElementsMap | TemplateStringsArray)>(strings: K, ...values: ObservableMaybe<any>[]) => K extends keyof JSX.IntrinsicElementsMap ? (strings: TemplateStringsArray, ...values: ObservableMaybe<any>[]) => (props: JSX.IntrinsicElements[K]) => JSX.IntrinsicElementsMap[K] : ObservableReadonly<string>;
//# sourceMappingURL=styled.d.ts.map