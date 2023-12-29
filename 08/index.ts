type ValidateChild<T> = T extends `naughty_${string}` ? never : T;

type RemoveNaughtyChildren<T extends Record<string, unknown>> = {
	[key in keyof T as ValidateChild<key>]: T[key];
};

export default RemoveNaughtyChildren;
