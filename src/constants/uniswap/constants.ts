import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export enum ChainId {
    // MAINNET = 1,
    // ROPSTEN = 3,
    // RINKEBY = 4,
    // GÖRLI = 5,
    // KOVAN = 42,
    // HARMONY = 1666600000,
    TESTNET = 1666700000
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0xa041855C1c2e23f959f6ab9Ac70BEbA0Ec511c5a";
export declare const INIT_CODE_HASH = "0x269e474423a1d29bef6c0d23e0de37b73fbd4cdc2db36b2fac3267a7d9c585c8";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
