
const astralRange = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g;
class EmojiCharString {
	constructor(string) {
		if (typeof string != 'string') {
            throw new Error('Input must be a string');
        }
        this._string = string;
		this._match = string.match(astralRange) || [];
	}
	get length() {
		return this._match.length;
	}

	/**
	 * Reverse the string in place
	 * @return {[String]} [The reversed string]
	 */
	reverse() {
		return this._match.reverse().join('');
	}

	/**
	 * The substring() method returns a subset of a string between begin index and end index
	 * @param  {Number} begin [begin index]
	 * @param  {Number} end   [end index]
	 * @return {[String]}     [A new string containing the extracted section of the given string.]
	 */
	substring(begin = 0, end) {
		let strLen = this.length,
			indexStart = (parseInt(begin, 10) || 0) < 0 ? 0 : (parseInt(begin, 10) || 0),
			indexEnd;
		if (typeof end == 'undefined') {
			indexEnd = strLen;
		} else {
			indexEnd = (parseInt(end, 10) || 0) < 0 ? 0 : (parseInt(end, 10) || 0);
		}

		if (indexStart > strLen) { indexStart = strLen; }
		if (indexEnd > strLen) { indexEnd = strLen; }

		if (indexStart > indexEnd) {
			[indexStart, indexEnd] = [indexEnd, indexStart];
		}
		return this._match.slice(indexStart, indexEnd).join('')
	}
}

export default EmojiCharString;