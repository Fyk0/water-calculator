/**
 * Water Calculator
 * @module water/calculator
 */

module.exports = (weight, scale = 'lb') => {
	/**
	 * Calulates how much water you should drink based on weight
	 * @param {number} weight - The weight you want to calculate for
	 * @param {string} scale [lb]- kg or lb
	 * @returns {string} - the suggested amount in ounces
	 */
	if (isNaN(weight)) throw new Error('An invalid weight was provided.');
	if (scale === 'kg') weight *= 2.2;
	return `${Math.ceil(weight / 2)}oz`;
	// round up because there's no such thing as too much water
};


