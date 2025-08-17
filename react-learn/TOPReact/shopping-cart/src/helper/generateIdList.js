export function generateIdList(nb){
    const res = new Array(nb);
    res.fill(0);
    return res.map((d, i) => i + 1);
}