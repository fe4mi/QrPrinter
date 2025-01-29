import  Product  from "../lib/models";
import { connectToDB } from "./connect";

export const fetchProduct = async () =>{
    try{
        await connectToDB();
        const wyswietl = await Product.find({color: "Niebieski" });
      
        return wyswietl;
    }catch(err){
        console.logerror("wyjebalo", err);

    }
};