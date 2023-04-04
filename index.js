function stringLength (string) {
    if (string.length >= 1 && string.length <= 10) {
      return string.length;
    } else {
      return 'Error: string not between 1 and 10';
    }
}  

const reverseString = (string) => string.split('').reverse().join('');

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = {stringLength, reverseString, capitalize};