const Compose = (...func) => (component) => {
  return func.reduceRight(
      (prevResult, f) => f(prevResult), component)
};

export default Compose;