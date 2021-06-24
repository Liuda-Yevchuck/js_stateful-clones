'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const changedStates = [];
  let currentState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties' :
        Object.assign(currentState, action.extraData);
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete currentState[key];
        }
        break;

      case 'clear':

        currentState = {};
        break;
    }

    const currentStates = {
      ...currentState,
    };

    changedStates.push(currentStates);
  }

  return changedStates;
}

module.exports = transformStateWithClones;
