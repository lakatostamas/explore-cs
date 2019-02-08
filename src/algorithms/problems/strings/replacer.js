function replacer(string) {
  return string
    .trim()
    .replace(/\s/g, '%20');
}

export default replacer;
