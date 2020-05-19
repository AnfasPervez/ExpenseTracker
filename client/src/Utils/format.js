
export function numberWithCommas(x){
    return x.toString().replace(/\B(?={3})+(?!\d))/g,",");
}