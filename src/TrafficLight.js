import { useEffect, useState } from 'react';

function Light({ backgroundColor }) {
    return (
        <div
            className="traffic-light"
            style={{ backgroundColor: backgroundColor, }}
        />
    );
}

export default function TrafficLight({
    initialColor = 'green',
    config,
    layout = 'vertical',
}) {
    const [currentColor, setCurrentColor] = useState(initialColor);

    useEffect(() => {
        const { duration, next } = config[currentColor];

        const timerId = setTimeout(() => {
            setCurrentColor(next);
        }, duration);

        return () => {
            clearTimeout(timerId);
        };
    }, [currentColor]);

    // In the given code, the return statement within the useEffect hook 
    // is used to specify a cleanup function. This cleanup function is executed 
    // when the dependencies of the useEffect hook change or when the component 
    // unmounts. It's a way to clean up any resources or side effects created by 
    // the useEffect when they are no longer needed.

    return (
        <div className={layout === 'vertical' ? "traffic-light-container--vertical" : 'traffic-light-container'}>
            {Object.keys(config).map((color) => (
                <Light
                    key={color}
                    backgroundColor={
                        color === currentColor
                            ? config[color].backgroundColor
                            : undefined
                    }
                />
            ))}
        </div>
    );
}
