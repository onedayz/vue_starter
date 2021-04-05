function getCurrency(origin){
  return origin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default {getCurrency}




