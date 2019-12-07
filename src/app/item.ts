export class Item {
    public get info(): string {
        return this._info;
    }
    public set info(value: string) {
        this._info = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
 
    public get availability(): boolean {
        return this._availability;
    }
    public set availability(value: boolean) {
        this._availability = value;
    }
    public get stock(): number {
        return this._stock;
    }
    public set stock(value: number) {
        this._stock = value;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    constructor(private _image:string,private _nom: string,private _prix: number,private _availability: boolean,private _stock: number,private _id: string,private _info: string){}
}
