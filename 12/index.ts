type FindSanta<T, K extends 0[] = []> = T extends [infer First, ...infer Rest]
	? First extends '🎅🏼'
		? K['length']
		: FindSanta<Rest, [...K, 0]>
	: never;

export default FindSanta;
