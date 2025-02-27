import Carta from "@/components/Carta";
import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default async function Page() {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const documentos = querySnapshot.docs.map((doc) => doc.data())

    /*useEffect(
        () => {
            obtenerImagenesFirebase()
        }, []
    )*/

    return (
            <div>
                <div className="columns-5 gap-1">
                    {documentos.length > 0 ? (
                        documentos.map((doc, index) => (
                            <Carta url={doc.url} key={index} />
                        ))
                    ):(
                        <p>No se encontraron imagenes.</p>
                    )}
                </div>
            </div>
    )
}