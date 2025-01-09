import { Strategy } from "passport-jwt";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: {
        id: number;
        email: string;
        full_name: string;
        username: String;
    }): Promise<{
        id: number;
        email: string;
        full_name: string;
        username: String;
    }>;
}
export {};
