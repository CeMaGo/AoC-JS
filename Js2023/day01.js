// prep input data line by line:
// getFirstDigit() Iterate over the input String
//check for the 1 occurrence of an Int and assign to the return ('')
//getLastDigit() Iterate backwards through the array and get the first occurrence of an Int and add it to the return (''+'')
// concatenate `${first and last digit}`
//finally add all values together and return (calibrationValue: Num = Int)




function getCalibrationValue(input) {
    // Split the input by lines
    const lines = input.split('\n');

    // Initialize a variable to store the total sum
    let totalSum = 0;

    // Iterate over each line
    for (const line of lines) {
        // Use a regular expression to match integers
        const integers = line.match(/\d+/g);

        // Check if there are integers in the line
        if (integers && integers.length > 0) {
            // Extract the first and last digits
            const firstDigit = integers[0].charAt(0); // Extract the first character
            const lastDigit = integers[integers.length - 1].slice(-1); // Extract the last character

            // Concatenate the first and last digits into a new number
            const newNumber = parseInt(firstDigit + lastDigit, 10);

            // Add the new number to the total sum
            totalSum += newNumber;
        }
    }

    // Return the total sum
    return totalSum;
}

// Example input
const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

// Calculate the sum of concatenated first and last digits
const result = getCalibrationValue(input);

// Log the result
console.log(result);