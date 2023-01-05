import Modal from "./components/modal"
import { useState } from "react"
import './App.css'

export default function Exemplodia5 () {
   
   const [openModal, setOpenModal] = useState(false)
   
    return (
        <div className='App'>
            Samuel Lopes - Modal
            <div>
                <button onClick={() => {if (openModal == false) {setOpenModal(true)} else {setOpenModal(false)}}}>
                    Abrir Modal
                </button>
            </div>
            <Modal isOpen={openModal}/>
        </div>
    )
}