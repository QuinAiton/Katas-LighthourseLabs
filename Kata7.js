const checkAir = (samples, threshold) => {
  let dirty = 0;
  for (const sample of samples) {
    if (sample === 'dirty') {
      dirty++;
    }
  }
  if (dirty / samples.length > threshold) {
    return "Polluted"
  } else {
    return "Clean"
  }
}