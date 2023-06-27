namespace A {
  const deleteSimilarString = (str: string): string => {
    let helpStr: string[] = [];
    for (let i = 0; i < str.length; i++) {
      //  存在
      if (helpStr.indexOf(str[i]) !== -1) {
        helpStr.pop();
      } else {
        // 不存在
        helpStr.push(str[i]);
      }
    }
    console.log(helpStr.join(""));
    return helpStr.join("");
  };
  deleteSimilarString("abbaca");
}
