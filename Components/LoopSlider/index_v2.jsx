import Image from "next/image";
import Phone from "../../assets/image/Difference/phone.svg";
import Mesh from "../../assets/image/Difference/bg.svg";
import { bg_section, image, innovate_section, word_div, word_content, wrapper, tempDiv, secondDiv, phoneContainer, phoneImg } from "./index.module.css";
import LoopSlider from ".";


const Difference = () => {
    return (
        <div className={innovate_section}>

            <div className={bg_section}>
                <Image src={Mesh} alt="background" className={image} />
            </div>


            <div className={word_div} >
                <div className={wrapper} >
                    <WordSeparate word="EXPERIENCE" />
                    <WordSeparate word="THE" />
                </div>
                <WordSeparate word="DIFFERENCE" />

                <div>
                    <span> {`{`} </span>
                    <br />
                    <span> SMART </span>
                    <br />
                    <span> DEVELOPMENT </span>
                    <br />
                    <span> {`}`} </span>
                </div>
            </div>


            <div className={secondDiv} >
                <LoopSlider />
                <div className={tempDiv}></div>

                <div className={phoneContainer} >
                    <Image className={image} alt="phone" src={Phone} />
                </div>
            </div>
        </div>
    )
}

export default Difference

const WordSeparate = ({ word }) => {
    return (
        <div className={wrapper} >
            {word.split("").map((w, i) => (
                <div className={word_content} key={i} > {w} </div>
            ))
            }
        </div>
    )
}