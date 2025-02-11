export function getAPIMOCKDATA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "John", lastName: "Mattis", age: "32" },
        { name: "Craig", lastName: "Bolton", age: "33" },
      ]);
    }, 7000);
  });
}
