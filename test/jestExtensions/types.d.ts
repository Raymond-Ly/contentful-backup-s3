// eslint-disable-next-line @typescript-eslint/no-namespace,no-redeclare
declare namespace jest {
  interface Matchers<R, T> {
    toHaveIds(ids: string[]): R;
  }
}
