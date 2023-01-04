export interface IUser {
    name: string;
    email: string;
    id: number;
    address: IAdress;
}

export interface IAdress {
    street: string;
    city: string;
    zipcode: string;
}