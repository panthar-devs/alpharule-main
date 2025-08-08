import { CursorContext } from "@/context/CursorContext";
import style from "./index.module.css";
import React, { useCallback, useContext, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from "./DotButton";
import { usePrevNextButtons, NextButton, PrevButton } from "./ArrowButton";
import { reviews } from "@/utilites/data";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)



const Our_Clients = (props) => {
  const getCursorContext = useContext(CursorContext);

  const options = { loop: true }
  const slides = Array.from(Array(10).keys())


  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 1500 })
  ])
  const tweenFactor = useRef(0)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const opacity = numberWithinRange(tweenValue, 0, 1).toString()
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  }, [emblaApi, tweenOpacity])



  return (
    <div className={style.mainpart}>
      <div className={style.mainContainer}>

        <div className={style.flex_col} >
          <h1> What Our Clients Are Saying </h1>

          <span> Discover the experience of those we've had the pleasure to work with. Our client's success stories are a testament to the deication and passion we put into every project </span>
        </div>


        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {reviews.map((review, index) => (

                <div className="embla__slide_cover" key={index} >
                  <div className="embla_star" >
                    {Array.from({ length: review.rating }).map(() => '⭐')}
                  </div>

                  <div className="embla__slide" key={index}>
                    <div>
                      <span> " {review.review} " </span>
                    </div>
                    <div className={style.flex_div} >
                      <Image src={review.pic} alt="user" className={style.reviewProfile} />
                      <span> {review.author} </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>

            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : ''
                  )}
                />
              ))}
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Our_Clients;
