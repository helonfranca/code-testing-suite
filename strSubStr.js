/**
 * @param {string} haystack
 * @param {string} needle
 * @author ChatGPT
 */
function strSubStr(haystack, needle) {
    if (needle === '') return 0; 
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i; 
        }
    }
    
    return -1; 
}

module.exports = strSubStr;