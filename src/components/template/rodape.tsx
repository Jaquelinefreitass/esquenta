import { IconHeartFilled } from "@tabler/icons-react";

export default function Rodape() {
    return(
        <footer className="flex justify-end items-center gap-2  bg-zinc-700 p-4
        text-zinc-400 text-sm
        "
    >
            <span className="text-white">Desenvolvido com</span>
            <IconHeartFilled
            
            
            
            size={18} className="text-red-600"/>
            
            <span className="text-white"> por Cod3r - {new Date().getFullYear()}</span>
        </footer>
    )
}