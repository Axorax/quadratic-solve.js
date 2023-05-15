function quadraticSolve(a, b, c, arr) {
  if (arr != undefined && Array.isArray(arr) && arr.length == 2) {
      const epsilon = 0.000001;
      return Math.abs(a * arr[0] * arr[0] + b * arr[0] + c) < epsilon && Math.abs(a * arr[1] * arr[1] + b * arr[1] + c) < epsilon;
  } else {
      const discriminant = b * b - 4 * a * c;
      if (discriminant < 0) {
          return undefined;
      }
      const sqrtDiscriminant = Math.sqrt(discriminant);
      return [(-b + sqrtDiscriminant) / (2 * a), (-b - sqrtDiscriminant) / (2 * a)];
  }
}