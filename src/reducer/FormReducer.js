



export const FormReducer = (state, action) => {
	switch (action.type) {
		case 'HANDLE TEXT INPUT':
			return {
				...state,
				[action.field]: action.payload,
			};
		case 'HANDLE SOCIAL INPUT':
			const socials = {...action.payload, socials: [...action.payload.socials]}
			return {...action.payload, ...socials};
			// return action.payload
		default:
			return state;
	}
};