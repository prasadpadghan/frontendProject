export class Customer {

    cid!: number;
    cfname!: string;
    clname!: string;
    cgender!: string;
    cage!: number;
    cmobile!: number;
    cemail!: string;
    cuser!: string;
    cpassword!: string;
    caddress!:  {
        line1:string,
        line2:string,
        area:string,
        city:string,
        pincode:number,
        state:string,
    };
    wishlist!: string;
    orderhistory!: string ;

}
