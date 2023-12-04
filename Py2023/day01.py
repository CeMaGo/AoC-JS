def get_calibration_value(calibration_document):
    # Split the calibration document into lines
    lines = calibration_document.split('\n')

    # Initialize a variable to store the total sum
    total_sum = 0

    # Iterate over each line
    for line in lines:
        # Extract the first and last digits
        first_digit = int(line[0])
        last_digit = int(line[-1])

        # Combine the first and last digits into a two-digit number
        calibration_value = first_digit * 10 + last_digit

        # Add the calibration value to the total sum
        total_sum += calibration_value

    # Return the total sum
    return total_sum


# Example calibration document
calibration_document = """1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet"""

# Calculate the sum of calibration values
result = get_calibration_value(calibration_document)

# Print the result
print(result)
