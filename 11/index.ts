type SantaListProtector<T> = T extends Function
	? T
	: T extends object
	? {
			readonly [key in keyof T]: SantaListProtector<T[key]>;
	  }
	: T;

export default SantaListProtector;
