import { app } from "./config";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";

const db = getFirestore(app);

export async function getProductsDB() {
    const documentos = await getDocs(collection(db, "productos"));
    const productos = []
    documentos.forEach((doc) => {
        productos.push({ ...doc.data(), id: doc.id })
    });
    return productos;
}

export async function getProductsByCategorieDB(categoria) {
    const productos = [];
    const q = query(collection(db, "productos"), where("categoria", "==", categoria));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        productos.push({ ...doc.data(), id: doc.id }); // 
    });
    return productos;
}

export async function getProductByIdDB(id) {
    const docRef = doc(db, "productos", id);
    const documento = await getDoc(docRef);

    if (documento.exists()) {
        return { ...documento.data(), id: documento.id }
    } else {
        return null;
    }
}

export async function getCategoriesDB() {
    const documentos = await getDocs(collection(db, "productos"));
    const categorias = new Set();

    documentos.forEach((doc) => {
        const producto = doc.data();
        if (producto.categoria) {
            categorias.add(producto.categoria);
        }
    });

    return Array.from(categorias).sort();
}

export async function createOrderDB(orden) {
    const docRef = await addDoc(collection(db, "ordenes"), orden);
    return docRef.id;
}



