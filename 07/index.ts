type AppendKey<T> = T extends string ? `good_${T}` : T;

type AppendGood<T extends Record<string, unknown>> = {
	[key in keyof T as AppendKey<key>]: T[key];
};

export default AppendGood;
