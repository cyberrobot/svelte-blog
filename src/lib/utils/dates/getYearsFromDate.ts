export const getYearsFromDate = (date: Date): number => {
	const now = new Date();
	return now.getFullYear() - new Date(date).getFullYear();
};
