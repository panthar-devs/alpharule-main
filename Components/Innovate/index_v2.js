import { useContext } from "react";
import style from "./index.module.css";
import { CursorContext } from "@/context/CursorContext";
import { setCursor } from "@/common-functions";
import Image from "next/image";
import graph from "../../assets/image/Difference/graph.svg";
import clock from "../../assets/image/Difference/clock.svg";
import icon from "../../assets/image/Difference/icon.svg";

const Strive = () => {

    const getCursorContext = useContext(CursorContext);

    const changeCursor = (changeType) => {
        const cursor = setCursor(changeType);
        getCursorContext.setCursorStyle(cursor);
    }

    return (
        <div className="container">
            <section className={style.strive_section}>

                <div
                    onMouseEnter={() => {
                        changeCursor("color_change");
                    }}
                    onMouseLeave={() => {
                        changeCursor();
                    }}
                >
                    <div className={style.innovateupper}>
                        <span className={style.v2_text_container}>We ,</span>{" "}
                        <span className={style.v2_text_container}>Strive</span>{" "}
                        <span className={style.v2_text_container}>to</span>{" "}
                        <span className={style.v2_text_container}>Innovate</span>
                    </div>
                </div>

                <div className={style.flex_div} >
                    <div className={style.flex_1} >
                        <div>
                            <h3 className={style.text} > Solid Strategy aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights </h3>
                        </div>

                        <div className={style.cont_div} >
                            <div className={style.small_div} >
                                <div className={style.small_flex_div}  >
                                    <h1 className={style.div_heading} > +5 </h1>
                                    <p className={style.div_para} > Year of Service </p>
                                </div>
                                <div>
                                    <Image src={clock} alt="graph" />
                                </div>
                            </div>

                            <div className={style.small_div}  >
                                <div className={style.small_flex_div}  >
                                    <h1 className={style.div_heading}> +40 </h1>
                                    <p className={style.div_para} > Projects </p>
                                </div>
                                <div>
                                    <Image src={icon} alt="graph" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={style.img_flex_1} >
                        <Image src={graph} alt="graph" />
                    </div>

                </div>

            </section>

        </div>)
}

export default Strive