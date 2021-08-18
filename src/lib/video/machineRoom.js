import { createMachine } from 'xstate';
let arrived = false;
let checkArrived = () => arrived;
// This machine is completely decoupled from Svelte
export const elevator = createMachine(
	{
		id: 'overkill?',
		initial: 'opened',
		context: {
			retries: 0
		},
		states: {
			opened: {
				on: {
					NEW_FLOOR: 'closing'
				}
			},
			closed: {
				on: {
					OPENING_START: {
						target: 'opening'
						//             cond: checkArrived,
						//             actions:['setArrived']
					},
					PULL_START: 'pulling'
				}
			},
			pulling: {
				on: {
					ARRIVED: { target: 'closed' }
				}
			},
			closing: {
				on: {
					FINISHED: 'closed',
					NEW_FLOOR: 'opening'
				}
			},
			opening: {
				on: {
					FINISHED: 'opened',
					NEW_FLOOR: 'closing'
				}
			},

			success: {
				type: 'final'
			}
		}
	},
	{
		actions: {
			// action implementations
			setArrived: (context, event) => {
				arrived = !arrived;
			}
		}
	}
);
