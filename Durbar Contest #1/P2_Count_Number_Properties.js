function countNumberProperties(numbers) {
  // TODO: Implement this function
  let even = 0;
  let negative = 0;
  let odd = 0;
  let positive = 0;

  for(const number of numbers){
    if(number < 0){
        negative++
    }else if(number > 0){
        positive++
    }

    if(number % 2 === 0){
        even++
    }
    else{
        odd++
    }
  }

  return {"even": even, "negative": negative, "odd": odd, "positive": positive}
}