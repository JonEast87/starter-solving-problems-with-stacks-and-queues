const Stack = require('../lib/stack')

const match = (expression) => {
	/*
    initialize an empty stack
    iterate through characters
      if character is === `(:`
        push onto the stack
      else
        if character is === `):`
          if the stack isn't empty
            pop one item off the stack
          else
            return false
    if stack is empty
      return true
    else
      return false
  */

	const expStack = new Stack()
	for (let i = 0; i < expression.length; i++) {
		if (expression[i] === '(') {
			expStack.push(expression[i])
		} else {
			if (expression[i] === ')') {
				if (expStack.top) {
					expStack.pop()
				} else {
					return false
				}
			}
		}
	}
	if (!expStack.top) {
		return true
	} else {
		return false
	}
}

module.exports = match
