declare namespace table {
    function deepcopy<T>(this: void, value: T): T;
}

/** @noResolution */
declare module 'util' {
    function empty_sprite(this: void): Sprite & Animation;
    function merge<T, U>(this: void, toMerge: [T, U]): T & U;
    function merge(this: void, toMerge: object[]): object;
    function format_number(this: void, amount: number, append_suffix?: boolean): string;
}
