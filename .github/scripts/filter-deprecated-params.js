const fs = require("fs");
const yaml = require("yaml");

// Load the input file
const inputFile = "openapi.yaml";
const outputFile = "openapi.filtered.yaml";

try {
  const fileContent = fs.readFileSync(inputFile, "utf8");
  const openapi = yaml.parse(fileContent);

  // Function to filter out deprecated parameters
  const removeDeprecatedParams = (parameters) =>
    parameters.filter((param) => !param.deprecated);

  // Iterate through paths and methods to filter parameters
  Object.entries(openapi.paths).forEach(([path, methods]) => {
    Object.entries(methods).forEach(([method, details]) => {
      if (details.parameters) {
        details.parameters = removeDeprecatedParams(details.parameters);
      }
    });
  });

  // Save the updated content to a new file
  fs.writeFileSync(outputFile, yaml.stringify(openapi), "utf8");
  console.log(`Filtered file written to ${outputFile}`);
} catch (err) {
  console.error("Error processing the file:", err);
}
