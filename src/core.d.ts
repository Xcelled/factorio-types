declare const game: LuaGameScript;

declare const script: LuaBootstrap;

declare const remote: LuaRemote;

declare const commands: LuaCommandProcessor;

declare const settings: LuaSettings;

declare const rcon: LuaRCON;

declare const rendering: LuaRendering;

declare const data: {
    raw: dataCollection,
    extend(values: any[]): void,
};

declare interface Globals {

}

declare const global: Globals;

declare function log(this: void, str: LocalisedString): void;

declare function table_size(this: void, tbl: object): number;

declare const serpent: Serpent;
