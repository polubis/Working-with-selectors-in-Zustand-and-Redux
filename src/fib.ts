const fibonacci = (n: number): number => {
  // Base cases.
  if (n <= 1) {
    return n;
  }

  // Calculate the Fibonacci number recursively.
  const result = fibonacci(n - 1) + fibonacci(n - 2);

  return result;
};

export { fibonacci };
