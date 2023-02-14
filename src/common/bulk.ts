/**
 * Single use function which returns true if @any of its predicates are true
 * @param args: The list of predicates
 * @returns {boolean}
 */
const anyIfStatement = (...args: any[]): boolean => args.some(arg => arg);

/**
 * Single use function which returns true if @all of its predicates are true
 * @param args: The list of predicates
 * @returns {boolean}
 */
const allIfStatement = (...args: any[]): boolean => args.every(arg => arg);

export default {
    anyIfStatement,
    allIfStatement
}