/**
 * Process content addition
 * @param str 
 * @returns 
 */
export function processContentAddition(str:string, len: number) {
    const strSliced = processSlice(str, str.search('<p>'), str.search('</p>') + 4);
    const strWithLength = processSlice(strSliced, 0, len);
    const lastSpace = processSearchLastCharacter(strWithLength, ' ');
    let index;
    if(lastSpace == -1) index = getLengthArrayOrderString(strSliced);
    index = lastSpace;
    return processSlice(strSliced, 0, index) + '...';
}

export function getLengthArrayOrderString(str:string) {
    return str.length
}
/**
 * Slices a string
 * @param str 
 * @param start 
 * @param end 
 * @returns 
 */
export function processSlice(str:string, start:number, end:number) {
    return str.slice(start, end);
}

/**
 * Process search last character
 * @param str 
 * @param character 
 * @returns 
 */
export function processSearchLastCharacter(str: string, character: string) {
    return str.lastIndexOf(character);
}

type QueryType = number | string;

/**
 * Check if type of a query is number
 * @param q 
 * @returns 
 */
export function isNumber(q: QueryType) {
    const isNumber = Number(q);
    if(isNaN(isNumber)) return false;
    return true;
}
