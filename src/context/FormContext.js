// plse dibug this react or js :)
import { createContext, useContext } from 'react';

export const FormContext = createContext(null);

export const FormProvider = FormContext.Provider;

export function useFormContext() {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error('useFormContext must be used with a formProvider');
	}
	return context
}
