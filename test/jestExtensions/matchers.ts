expect.extend({
  toHaveIds(received: { id: string }[], ids: string[]) {
    const actual = received.map(r => r.id).sort();
    const expected = ids.sort();

    const pass = this.equals(actual, expected);

    const matcherHint = this.utils.matcherHint('toHaveIds', undefined, undefined, {
      isNot: this.isNot,
      promise: this.promise,
    });

    const message = pass
      ? () => {
        const explanationMessage = `Expected: not ${this.utils.printExpected(expected)}\nReceived: ${this.utils.printReceived(actual)}`;
        return `${matcherHint}\n\n${explanationMessage}`;
      } : () => {
        const diffString = this.utils.diff(expected, actual, { expand: this.expand });
        const explanationMessage = (diffString?.includes('- Expect')
          ? `Difference:\n\n${diffString}`
          : `Expected: ${this.utils.printExpected(expected)}\nReceived: ${this.utils.printReceived(actual)}`);
        return `${matcherHint}\n\n${explanationMessage}`;
      };

    return { actual, message, pass };
  },
});
