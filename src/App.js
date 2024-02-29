import './App.css';
import  {es,en} from "./languages"
import {useState,useEffect} from "react";






function Presentation(props)
{
    const {text} = props


    return <div id={"presentation-wrapper"}>
        <h1 id={"title"} style={{"width": "100%"}}>Luciano Gustavo González Muñoz </h1>
   <div className={"image-presentation-wrapper"}>
     <img id={"img"} src="face.jpg" alt="" style={{"border-radius":"50%"}} height={300}/>
   </div>
    <section className={"presentation-section"} id={"about-me"}>
      <p className={"presentation-title"}>{text["descriptionTitle"]}</p>
      <p className={"presentation-text"}>{text["description"]}</p>
    </section>

    <section className={"presentation-section"} id={"education"}>
      <p className={"presentation-title"}>{text["educationTitle"]}</p>
        <p className={"presentation-text"}>{"-" +text["university"]}</p>

        <p className={"presentation-text"}>{"-" +text["campus"]}</p>
        <p className={"presentation-text"}>{"-"+text["career"]}</p>


        <p className={"presentation-text"}>{text["certifications"]}</p>

    </section>

    <section className={"presentation-section"} id={"knowledge"}>
      <p className={"presentation-title"}>{text["knowledgeTitle"]}</p>
        <p className={"presentation-text"}>{ "-"+text["knowledge"][0]}</p>
        <p className={"presentation-text"}>{"-" +text["knowledge"][1]}</p>
        <p className={"presentation-text"}>{"-" +text["knowledge"][2]}</p>
        <p className={"presentation-text"}>{"-" +text["knowledge"][3]}</p>
        <p className={"presentation-text"}>{"-" +text["knowledge"][4]}</p>
        <p className={"presentation-text"}>{"-" +text["knowledge"][5]}</p>



        <p className={"presentation-title"}>{text["languagesTitle"]}</p>
        <p className={"presentation-text"}>{"-" +text["languages"]}</p>


    </section>

  </div>

}
function MenuRadial(props) {
    const {textMenu} = props
    const [circleSize, setCircleSize] = useState(0);
    const [currentOption, setCurrentOption] = useState("selecciona")

    useEffect(() => {
        const updateCircleSize = () => {
            const wrapper = document.getElementById("menu-radial-wrapper");
            if (wrapper) {
                setCircleSize(wrapper.offsetWidth - 40);
            }
        };
        updateCircleSize();

        window.addEventListener("resize", updateCircleSize);

        return () => {
            window.removeEventListener("resize", updateCircleSize);
        };
    }, []);
    const InternalCircle = (
        <div
            id="external-circle"
            style={{
                width: "45%",
                height: "45%",
                background: "url('neptuno.png') no-repeat center center ",
                backgroundSize: "100% 100%",
                borderRadius:  "50%",

                position: "absolute",
                top: "35%",
                left: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign:"center"

            }}
        >
            {currentOption}
        </div>
    );
    const circleOptionClass = {
        background: "url('triton.png') no-repeat center center ",
        backgroundSize: "100% 100%",

        position: "absolute",
        width: "25%",
        height: "25%",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",

        borderRadius:"50%",


    };

    function handleOptionCircle(e)
        {
            setCurrentOption(textMenu[e.target.id.toString()][0])
            console.log(currentOption)
        }
    const CircleOption = (props) => {

        const {appIndex,position,url,srcImage} = props
        const appInfo = textMenu["app"+appIndex]
        return <div className={"circle-option"} style={{...circleOptionClass, ...position}}>  <a style={{width: "100%",height: "100%",display:"flex",alignItems:"center",justifyContent:"center"}} href={url} target="_blank" rel="noopener noreferrer">
            <img id={"app"+appIndex}  onMouseOver={handleOptionCircle} style={{width: "80%",height: "80%"}} src={srcImage} /></a></div> }
    const ExternalCircle = (
        <div
            id="external-circle"
            style={{
                width: circleSize,
                height: circleSize,
                background: "none",
                borderRadius: "50%",
                position: "relative"
            }}
        >
            {InternalCircle}
            <CircleOption position ={{ top: "5%",
                left: "30%"}} appIndex = {"1"} url = "https://lucioggm.github.io/calculator" srcImage = "calculadora.png"/>
            <CircleOption position ={{ top: "15%",
                left: "60%"}} appIndex = {"2"} url = "https://lucioggm.github.io/markdown-previewer/"  srcImage = "codigo.png"/>
            <CircleOption position ={{ top: "45%",
                left: "70%"}} appIndex = {"3"} url = "https://lucioggm.github.io/quote-machine/"  srcImage = "comillas.png"/>
            <CircleOption position ={{ top: "70%",
                left: "50%"}} appIndex = {"4"} url = "https://lucioggm.github.io/drum-machine/"  srcImage = "drum.png"/>

        </div>
    );


    return (
        <div id={"menu-radial-wrapper"}>
            <div className="menu-header">
                <p id="menu-radial-title">{"Apps"}</p>
                <p id="menu-radial-description">{textMenu["menu-description"]}</p>
                <div id={"circle-wrapper"}>{ExternalCircle}
                </div>

            </div>
        </div>
    );
}

function App() {
    let [language,setLanguage] = useState(es)
    function changeLanguage()
    {

        if(language["lang"]==="es")
            setLanguage(en)
        else
            setLanguage(es)
        document.getElementById("language-button").removeEventListener("click",changeLanguage)

    }
    document.getElementById("language-button").addEventListener("click",changeLanguage)

  return <div id={"app"}>


    <Presentation text = {language} />
    <MenuRadial textMenu = {language} />
      <footer>
          <p id={"contact-title"}>Informacion de Contacto</p>
          <p>Nombre: Luciano González</p>
          <p>Correo: lucioggm210@gmail.com</p>
          <p>GitHub: <a href="https://github.com/lucioggm" target="_blank">lucioggm</a></p>
          <p>Ver: <a href="https://www.linkedin.com/in/luciano-gustavo-gonzalez-mu%C3%B1oz-046154265?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Be%2BAH525lTmqj80FEE9L8Gw%3D%3D" target="_blank">Linkedin</a></p>
          <p>Ver: <a href="https://github.com/lucioggm" target="_blank">Curriculum</a></p>
      </footer>

  </div>
      ;
}





export default App;