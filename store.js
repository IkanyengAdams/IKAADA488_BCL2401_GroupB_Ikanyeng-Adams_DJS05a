/**
 * @typedef {object} Task
 * @prop {string} id
 * @prop {string} title
 * @prop {Date} created
 */

export const Task = {};

/**
 * @typedef {'A-Z' | 'Z-A'} Sorting
 */

export const Sorting = {};

/**
 * @typedef {object} Filters
 * @prop {Sorting} sorting
 */


/**
 * @typedef {object} State
 * @prop {'idle' | 'adding'} phase
 * @prop {Record<string, Task>} tasks
 * @prop {Filters} filters
 */

export const State = {}; 

/**
 * @callback GetState
 * @returns {State}
 */

/**
 * @callback Dispatch
 * @param {Action} action 
 */

/**
 * @callback EmptyFn
 */

/**
 * @callback Subscribe
 * @param {State} prev
 * @param {State} next
 * @return {EmptyFn}
 */

/**
 * @type {Array<Subscribe>}
 */
const Subscribers = []

/**
 * @type {Array<State>}
 */
const states = []

/**
 * 
 * @return {State}
 */

export const getState = () => {
    return states[0]
}



/**
 * @typedef {object} Store
 * @prop {GetState} getState
 * @prop {Subscribe} Subscribe
 * @prop {Dispatch} dispatch
 */