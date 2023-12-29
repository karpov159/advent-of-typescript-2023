type StreetSuffixTester<T, K> = T extends `${infer First}${infer Second}`
	? Second extends K
		? true
		: StreetSuffixTester<Second, K>
	: false;

export default StreetSuffixTester;
