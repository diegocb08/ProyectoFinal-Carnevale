import { app } from "./config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);




export async function getProductsDb() {
    const documentos = await getDocs(collection(db, "productos"));
    const productos = []
    documentos.forEach((doc) => {
        productos.push({ ...doc.data(), id: doc.id })
    });
    console.log(productos)
    return productos;

}
getProductsDb();
