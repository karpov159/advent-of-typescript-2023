type Reverse<T> = T extends `${infer Head}${infer Rest}`
	? `${Reverse<Rest>}${Head}`
	: '';

export default Reverse;
