function calculerNuits(d1, d2) {
  let date1 = new Date(d1.split("/").reverse().join("-"));
  let date2 = new Date(d2.split("/").reverse().join("-"));
  return (date2 - date1) / (1000 * 60 * 60 * 24);
}