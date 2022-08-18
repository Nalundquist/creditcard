function cCAnalyzer(input){
	const numInput = parseInt(input);
  console.log("numInput= " + typeof numInput);
  console.log("first= " + typeof numInput);
	const errorResult = "Error: Invalid input";
  const numErrorResult = "Error: Second"
	if ( input === NaN || input === undefined || input === null || input.length > 16 || input.length < 15) {
    console.log("second= " + typeof numInput);
    return errorResult;
  }
  else if (typeof numInput != "number") {
    console.log("third= " + typeof numInput);
    return numErrorResult;
  } 
}



