// Use setDate to display the date of your birth
const birthday = new Date()
birthday.setFullYear(1995, 10, 02)

// Convert to UTC
// Display the date
alert(birthday.toUTCString())