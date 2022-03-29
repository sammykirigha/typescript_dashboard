import React, { useEffect, useState } from "react";
import "./Carousel.css";

interface Props {
    width?: number;
    children: React.ReactElement | React.ReactElement[];
}

export const CarouselItem = ({ children, width }: Props) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

export const Carousel: React.FC<Props> = ({ children }): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [paused, setPaused] = useState<boolean>(false);

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 2000);
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });
    return (
        <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="carousel"
        >
            <div
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 40}%)` }}
            >
                {React.Children.map(children, (child: React.ReactElement, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
        </div>
    );
};
