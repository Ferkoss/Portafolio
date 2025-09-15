import "./cambiarModo.css"
import { modeContext } from "../../context/ModeContext"
import { useContext } from "react"
const CambiarModo = () => {

    const { mode, setMode } = useContext(modeContext)

    const changeMode = (e) => {
        switch (e.target.value) {
            case "o": setMode({

                type: "dark",

                sombraAnimation: {

                    animationName: "sombra",
                    animationDuration: "7s",
                    animationIterationCount: "infinite",
                },

                content: { backgroundColor: "black" },

                text: { color: "#ccc" },
                select:{
                    borderColor:"white",
                    color:"white"
                }

            })
                break



            case "c": setMode({

                type: "light",

                layout: {
                    // backgroundColor:"#eeeeee"
                    backgroundColor: "#ccc"
                },

                select:{
                    borderColor:"black",
                    color:"black"
                },

                botonSend:{
                    borderColor:"black",
                    color:"black"
                },

                sombraAnimation: {

                    animationName: "sombraLight",
                    animationDuration: "7s",
                    animationIterationCount: "infinite",
                },

                backgroundAnimation: {
                    animationName: "BackgroundLight",
                    animationDuration: "7s",
                    animationIterationCount: "infinite",
                },

                perfilAnimation: {
                    animationName: "perfilLight,sombraLight",
                    animationDuration: "7s",
                    animationIterationCount: "infinite",
                },

                content: {
                    backgroundColor: "#ccc",
                    borderColor: "black"
                },

                text: { color: "black" }

            })
                break
            case "80s": setMode({
                type: "80s",

                layout: {
                    backgroundColor: "#2d2d44", // gris azulado oscuro como base ochentera
                },

                select:{
                    borderColor:"#00e6ff",
                    color:"#00e6ff"
                },

                 botonSend:{
                    borderColor:"#00e6ff",
                    color:"#00e6ff"
                },

                sombraAnimation: {
                    animationName: "sombra80s",
                    animationDuration: "7s",
                    animationIterationCount: "infinite",
                },

                backgroundAnimation: {
                    animationName: "background80s",
                    animationDuration: "7s",
                    animationIterationCount: "infinite",
                },

                perfilAnimation: {
                    animationName: "perfil80s,sombra80s",
                    animationDuration: "7s",
                    animationIterationCount: "infinite",
                },

                content: {
                    backgroundColor: "#3c3c5c",
                    borderColor: "#ff4dc4",
                },

                text: {
                    color: "#00e6ff",
                },
            })
                break
            case "m": setMode({
                
                type: "matrix",

                main:{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    boxShadow:"0 0 100px green"
                },

                header:{
                    backgroundColor: "rgba(0, 0, 0, 0.9)"
                },

                footer:{
                    backgroundColor: "rgba(0, 0, 0, 0.9)"
                },

                separador:{
                    backgroundColor: "green"
                },

                img:{
                    border:"2px solid green",
                    boxShadow:"0 0 100px green"
                },

                layout: {
                backgroundColor: "none",
                backgroundImage: "url('../../../public/the matrix GIF.gif')",
            },

            select:{
                    borderColor:"rgb(118, 255, 3)",
                    color:"rgb(118, 255, 3)"
                },

                 botonSend:{
                     borderColor:"rgb(118, 255, 3)",
                    color:"rgb(118, 255, 3)"
                },

                sombraAnimation: {
                animationName: "sombraMatrix",
                animationDuration: "6s",
                animationIterationCount: "infinite",
            },

                backgroundAnimation: {
                animationName: "BackgroundMatrix",
                animationDuration: "8s",
                animationIterationCount: "infinite",
            },

                perfilAnimation: {
                animationName: "perfilMatrix,sombraMatrix",
                animationDuration: "7s",
                animationIterationCount: "infinite",
            },

                content: {
                backgroundColor: "#111111", // gris oscuro casi negro
                borderColor: "#00ff41",     // verde neón clásico de Matrix
            },

                text: {
                color: "#76ff03", // verde lima brillante para contraste
            },})


            default:
        }
    }

    return (
        <select  style={mode.select} name="" className="cambiarModo" onChange={changeMode}>
            <option value="o">Oscuro</option>
            <option value="c">Claro</option>
            <option value="80s">80s</option>
            <option value="m">Matrix</option>
        </select>
    )
}
export default CambiarModo