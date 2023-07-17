import { useContext } from "react";
import { ModalContext } from "../context/ModalProvider";

export default function useModal () {
    return useContext(ModalContext)
}

/* import { useState } from "react";

export default function useModal () {
    const [isOpen, setIsOpen] = useState(false);

    function toogleModal () {
        setIsOpen(!isOpen)
    }

    return {isOpen, toogleModal}

} */