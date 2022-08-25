const Stack = require('../lib/stack')

const isPalindrome = (sentence) => {
	sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
	/*
    remove all spaces and punction from the sentence, all characters to lower case
    -
    declare a variable called middle and iniatlize it to half the length of the sentence,
    round down to an integer value for odd lengths.
    -
    initialize a new Stack()
    -
    iterate through sentence, from first letter to middle pushing onto stack
    -
    iterate from middle to last letter (if odd iterate from middle+1) pop each character from stack to compare to current character
    -
    return true
  */

	let middle = Math.floor(sentence.length / 2)

	let charStack = new Stack()

	for (let i = 0; i < middle; i++) {
		charStack.push(sentence[i])
	}

	middle += sentence.length % 2 === 0 ? 0 : 1

	for (let i = middle, limit = sentence.length; i < limit; i++) {
		if (sentence[i] !== charStack.pop()) {
			return false
		}
	}
	return true
}

module.exports = isPalindrome
