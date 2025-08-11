import { setCursor } from "@/common-functions";
import { CursorContext } from "@/context/CursorContext";
import Image from "next/image";
import { useContext, useRef, useState } from "react";
import hand from "../../assets/image/Contact Us/hand.svg";
import style from "./index.module.css";
import { Paperclip } from "lucide-react";

const Contact_Us = () => {
  const [open, setopen] = useState(false);
  const [budget, setBudget] = useState("");

  const categoryNames = {
    design: "UI / UX DESIGN",
    tech: "WEBSITE DEVELOPMENT",
    app: "APP DEVELOPMENT",
    marketing: "MARKETING & PROMOTION",
    branding: "BRANDING",
    consulting: "PLANNING / CONSULTANCY",
  }
  const budgetRanges = {
    "5 - 10": "5-10K",
    "10 - 20": "10-20K",
    "20 - 40": "20-40K",
    "40 - 60": "40-60K",
    ">60": ">60K",
  }

  const getCursorContext = useContext(CursorContext);
  const [selectedCategories, setSelectedCategories] = useState([])

  const getBudget = (value) => { setBudget(value); }

  const toggleCategory = (value) => {
    setSelectedCategories((prev) => {
      if (prev.includes(value)) {
        return prev.filter((cat) => cat !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  const changeCursor = (changeType) => {
    const cursor = setCursor(changeType);
    getCursorContext.setCursorStyle(cursor);
  };

  const isCategorySelected = (category) => {
    return selectedCategories.includes(category)
  }

  const fileInputRef = useRef(null)

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event) => {
    const files = event.target.files
    if (files && files.length > 0 && onFileSelect) {
      onFileSelect(files)
    }
  }

  return (
    <div className="container">
      <div className={style.mainpart}>
        <h2 className={style.headertext}>
          Hey! Tell us all <br /> the things{" "}
          <Image className={style.hand_design} src={hand} alt="contact"></Image>
        </h2>
        <p className={style.below_header}>Fill the form below and we'll get back to you.</p>
        <p className={style.below_peragraph}>I'm interested in...</p>
        <div>
          <div className={style.designtext_container}>
            <button
              className={style.boxtext_design}
              onClick={() => toggleCategory(categoryNames.design)}
              style={{
                backgroundColor: isCategorySelected(categoryNames.design) ? "#181818" : "#fff",
                color: isCategorySelected(categoryNames.design) ? "#fff" : "#000",
              }}
              onMouseEnter={() => {
                changeCursor("size_defference");
              }}
              onMouseLeave={() => {
                changeCursor();
              }}
            >
              UI / UX DESIGN
            </button>

            <button
              className={style.boxtext_design}
              onClick={() => toggleCategory(categoryNames.tech)}
              style={{
                backgroundColor: isCategorySelected(categoryNames.tech) ? "#181818" : "#fff",
                color: isCategorySelected(categoryNames.tech) ? "#fff" : "#000",
              }}
              onMouseEnter={() => {
                changeCursor("size_defference");
              }}
              onMouseLeave={() => {
                changeCursor();
              }}
            >
              WEBSITE DEVELOPMENT
            </button>

            <button
              className={style.boxtext_design}
              onClick={() => toggleCategory(categoryNames.app)}
              style={{
                backgroundColor: isCategorySelected(categoryNames.app) ? "#181818" : "#fff",
                color: isCategorySelected(categoryNames.app) ? "#fff" : "#000",
              }}
              onMouseEnter={() => {
                changeCursor("size_defference");
              }}
              onMouseLeave={() => {
                changeCursor();
              }}
            >
              APP DEVELOPMENT
            </button>


            <button
              className={style.boxtext_design}
              onClick={() => toggleCategory(categoryNames.marketing)}
              style={{
                backgroundColor: isCategorySelected(categoryNames.marketing) ? "#181818" : "#fff",
                color: isCategorySelected(categoryNames.marketing) ? "#fff" : "#000",
              }}
              onMouseEnter={() => {
                changeCursor("size_defference");
              }}
              onMouseLeave={() => {
                changeCursor();
              }}
            >
              MAREKETING & PROMOTION
            </button>

            <button
              className={style.boxtext_design}
              onClick={() => toggleCategory(categoryNames.branding)}
              style={{
                backgroundColor: isCategorySelected(categoryNames.branding) ? "#181818" : "#fff",
                color: isCategorySelected(categoryNames.branding) ? "#fff" : "#000",
              }}
              onMouseEnter={() => {
                changeCursor("size_defference");
              }}
              onMouseLeave={() => {
                changeCursor();
              }}
            >
              BRANDING
            </button>


            <button
              className={style.boxtext_design}
              onClick={() => toggleCategory(categoryNames.consulting)}
              style={{
                backgroundColor: isCategorySelected(categoryNames.consulting) ? "#181818" : "#fff",
                color: isCategorySelected(categoryNames.consulting) ? "#fff" : "#000",
              }}
              onMouseEnter={() => {
                changeCursor("size_defference");
              }}
              onMouseLeave={() => {
                changeCursor();
              }}
            >
              PLANNING / CONSULTANCY
            </button>
          </div>

          <form action="https://formspree.io/f/xeqwevor" method="POST" className={style.input_form}>
            <input
              className={style.input_container}
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className={style.input_container}
              type="email"
              name="email"
              placeholder="Your Email address"
              required
            />
            <input
              className={style.input_container}
              type="text"
              name="description"
              placeholder="Tell us something about your project"
            />
            <input
              className={style.input_container}
              type="text"
              name="category"
              value={selectedCategories.join(", ")}
              hidden
              readOnly
            />
            <input
              className={style.input_container}
              type="text"
              name="category"
              value={budget}
              hidden
              readOnly
            />

            <div className={style.budget}>
              <h5 className={style.below_peragraph}>Project Budget</h5>
              <span style={{ fontSize: "18px" }} >(In USD)</span>

              <div className={style.budget_input}>

                <button
                  className={style.boxtext_design}
                  onClick={() => { getBudget(budgetRanges["5 - 10"]); }}
                  style={{ backgroundColor: budget == budgetRanges["5 - 10"] ? "#181818" : "#fff", color: budget == budgetRanges["5 - 10"] ? "#fff" : "#000", }}
                  onMouseEnter={() => { changeCursor("size_defference"); }}
                  onMouseLeave={() => { changeCursor(); }} >
                  5-10 K
                </button>
                <button
                  className={style.boxtext_design}
                  onClick={() => { getBudget(budgetRanges["10 - 20"]); }}
                  style={{ backgroundColor: budget == budgetRanges["10 - 20"] ? "#181818" : "#fff", color: budget == budgetRanges["10 - 20"] ? "#fff" : "#000", }}
                  onMouseEnter={() => { changeCursor("size_defference"); }}
                  onMouseLeave={() => { changeCursor(); }} >
                  10-20 K
                </button>
                <button
                  className={style.boxtext_design}
                  onClick={() => { getBudget(budgetRanges["20 - 40"]); }}
                  style={{ backgroundColor: budget == budgetRanges["20 - 40"] ? "#181818" : "#fff", color: budget == budgetRanges["20 - 40"] ? "#fff" : "#000", }}
                  onMouseEnter={() => { changeCursor("size_defference"); }}
                  onMouseLeave={() => { changeCursor(); }} >
                  20-40 K
                </button>

                <button
                  className={style.boxtext_design}
                  onClick={() => { getBudget(budgetRanges["40 - 60"]); }}
                  style={{ backgroundColor: budget == budgetRanges["40 - 60"] ? "#181818" : "#fff", color: budget == budgetRanges["40 - 60"] ? "#fff" : "#000", }}
                  onMouseEnter={() => { changeCursor("size_defference"); }}
                  onMouseLeave={() => { changeCursor(); }} >
                  40-60 K
                </button>


                <button
                  className={style.boxtext_design}
                  onClick={() => { getBudget(budgetRanges[">60"]); }}
                  style={{ backgroundColor: budget == budgetRanges[">60"] ? "#181818" : "#fff", color: budget == budgetRanges[">60"] ? "#fff" : "#000", }}
                  onMouseEnter={() => { changeCursor("size_defference"); }}
                  onMouseLeave={() => { changeCursor(); }} >
                  {">"}60 K
                </button>

                {/* <input type="text" name="budget" placeholder="e.g. 200000" /> */}
              </div>
            </div>


            <div>
              <button
                type="button"
                onClick={handleClick}
                className={style.paper_clip_div}
              >
                <Paperclip className="w-4 h-4" />
                <span className="text-sm">Add Attachment (optional)</span>
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="*/*"
                multiple={true}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>

            <input className={style.button_send} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact_Us;
