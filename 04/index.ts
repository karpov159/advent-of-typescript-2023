type Address = { address: string; city: string };
type PresentDeliveryList<T extends Record<string, unknown>> = {
	[key in keyof T]: Address;
};

export { Address, PresentDeliveryList };
