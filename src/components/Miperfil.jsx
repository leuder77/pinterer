'use client'

import userStore from "@/store/userStore"
import Image from "next/image"

export default function miperfil() {

    const { usuario } = userStore()
    console.log(usuario)
    return (
        <div className="flex flex-col mx-auto w-[50%]">
            <div className="mx-auto">
                {usuario && usuario.photoURL ? (
                    <Image className="rounded-full justify-center" src={usuario.photoURL} width={60} height={60} alt="profile" />
                ) : (
                    null
                )
                }
            </div>
            <div className="mx-auto my-5 font-bold">
                {usuario && usuario.displayName ? (
                    <p>{usuario.displayName}</p>
                ) : (
                    null
                )
                }
            </div>
            <p className="mx-auto font-bold">siguendo a 0</p>
            <div className="mx-auto my-5">
                <button className="border rounded-xl bg-gray-200 py-2 px-2 mr-2">Compartir</button>
                <button className="border rounded-xl bg-gray-200 py-2 px-2 mr-2">Editar perfil</button>
            </div>
            <input
                type="text"
                placeholder="Pega la url de una imagen aquí"
                className="border-2 border-black py-3 my-5 mx-[15%]" />
            <button
                className="bg-red-600 py-2 rounded-xl my-5 mx-[35%] font-bold text-white">
                Agregar Imagen
            </button>
        </div>
    )
}