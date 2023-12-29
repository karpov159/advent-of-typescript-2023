type FilterChildrenBy<T, K> = T extends K ? never : T;

export default FilterChildrenBy;
