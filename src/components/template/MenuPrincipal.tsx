
import { IconApps, IconHexagonNumber1, IconLayout2, IconListCheck } from "@tabler/icons-react";
import MenuItem from "../MenuItem";

export default function MenuPrincipal() {
    return (
        <aside className="w-80 bg-zinc-600">
            <nav className="flex flex-col p-5 ">
                <MenuItem link="/primeiro">
                   <IconHexagonNumber1 />
                     <span className="text-white">Primeiro Componente</span>
                </MenuItem>
                <MenuItem link="/flexbox">
                <IconLayout2/>
                <span className="text-white">Flexbox</span>
                </MenuItem>
                <MenuItem link="/pagina">
                <IconApps />
                <span className="text-white">Componente Página</span>
                </MenuItem>
                
                <MenuItem link="/estado">
                <IconListCheck />
                <span className="text-white">Componente com Estado</span>
                </MenuItem>
                
            </nav>
        </aside>
    )
    
}


                
