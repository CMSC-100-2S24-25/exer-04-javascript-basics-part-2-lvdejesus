const uuid = require("uuid");
const validator = require("validator");
const fs = require("fs");

function generateUniqueID(firstName, lastName) {
  return firstName[0].toLowerCase() + lastName.toLowerCase() + uuid.v4().slice(0, 8);
}

function addAccount(values) {
  if (values.length != 4)
    return false;

  let [first_name, last_name, email, age] = values;
  if (first_name !== "" && last_name !== "" && validator.isEmail(email) && age >= 18) {
    fs.appendFileSync("users.txt", `${first_name},${last_name},${email},${age},${generateUniqueID(first_name, last_name)}\n`);
    return true;
  }

  return false;
}

module.exports = addAccount;
