export default interface IsValidInterface<T = object> {
	(data: T): Promise<boolean>;
}