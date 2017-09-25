import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
export declare class EnterValues implements Task {
    private Title;
    private FirstName;
    private LastName;
    static called(Title: string, FirstName: string, LastName: string): EnterValues;
    performAs(actor: PerformsTasks): Promise<void>;
    constructor(Title: string, FirstName: string, LastName: string);
}
export declare class ProvidePostCode implements Task {
    private PostCode;
    static postCodeValue(PostCode: string): ProvidePostCode;
    performAs(actor: PerformsTasks): Promise<void>;
    constructor(PostCode: string);
}
export declare class AccountDetails implements Task {
    private SortCode;
    private AccountNumber;
    static account_Details(SortCode: string, AccountNumber: string): AccountDetails;
    performAs(actor: PerformsTasks): Promise<void>;
    constructor(SortCode: string, AccountNumber: string);
}