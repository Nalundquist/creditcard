describe: cCAnalyzer()

test: should only take numbers as variables
code: const input = "string";
code: cCAnalyzer(input);
expected output: "Error: Invalid input"

test: should not take null or undefined as inputs
code: (cCAnalyzer);
expected output: "Error: Invalid input"

test: should not take numbers less than 15 digits or more than 16 digits
code: const numInput = 2;
