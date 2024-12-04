export function add(string) {
// Removes double quotes
    let cleanedString = string.replace(/"/g, ""); 

    if (cleanedString.trim() === "") {
      return 0;
    }else if (typeof cleanedString === "string" && cleanedString.startsWith("") && !cleanedString.startsWith("//")) {  
        // Check if the string contains a custom delimiter definition
        // Step 1: Split the string by newline character \n
        let delimiter = cleanedString.split('\\n'); 
        // Step 2: Split each item by commas and flatten the array
        delimiter = delimiter.flatMap(item => item.split(',').map(num => parseInt(num.trim())));
        // Update cleanedString with the processed result
        cleanedString = delimiter;
      }  // Check if the string starts with "//" indicating a custom delimiter
      else if (typeof cleanedString === "string" && cleanedString.startsWith("//")) {
           // Step 1: Split the string by the newline character to separate the delimiter section
    let delimiterSection = cleanedString.split('\\n')[0]; // Get the part before the numbers

    // Step 2: Extract the delimiter (after "//")
    const delimiter = delimiterSection.slice(2); // Skip the "//" part

    // Step 3: Remove the delimiter section and keep the part with the numbers
    cleanedString = cleanedString.slice(delimiterSection.length + 1); // Skip the delimiter declaration
    cleanedString = cleanedString.replace('n', '');
    // Step 4: Replace the delimiter with commas in the numbers part
    cleanedString = cleanedString.replace(new RegExp(delimiter, 'g'), ',');

    // Step 5: Split by commas, trim spaces, and convert to integers
    cleanedString= cleanedString.split(',').map(num => parseInt(num.trim()));
      }
  
    const nums = cleanedString.map(Number);
    
    const negativeString = nums.filter(num => num < 0);
    if (negativeString.length > 0) {
      throw new Error(`negative String not allowed: ${negativeString.join(',')}`);
    }
  
    return nums.reduce((sum, num) => sum + num, 0);
  }