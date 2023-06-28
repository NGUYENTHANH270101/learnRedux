import React from "react";
import { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../component/scrollToTop.css'

export default function BtnScrollToTop() {
    const [scrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScrollToTop(true);
            } else {
                setScrollToTop(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="wc-scroll">
            {scrollToTop && (
                <button className="btn-scroll" onClick={scrollUp}>
                    <span>
                        <FontAwesomeIcon icon={faArrowUp} />
                    </span>
                </button>
            )}
        </div>
    );
}
