export const useSpringCode = `const [boxSpring, boxApi] = useSpring(
    () => ({
	    backgroundColor: blue,
    }),
    []
);`;

export const apiStartCode = `const handleClick = () => {
    boxApi.start({
        backgroundColor: getRandomRGBAColor(true)
    });
};`;

export const animatedCode = `<animated.div
    style={{
        width: "120px",
        height: "120px",
        backgroundColor: boxSpring.backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "10px",
        marginBottom: "1rem"
    }}
    onClick={handleClick}
>
    <p style={{ color: "#fff", fontWeight: "bold" }}>Click me</p>
</animated.div>

<animated.p style={outputStyle}>
    {boxSpring.backgroundColor.to((color) => color)}
</animated.p>`;

export const durationCode = `const [durationState, setDurationState] = useState(1000);
const [boxSpring, boxApi] = useSpring(
    () => ({
        backgroundColor: "rgba(0,0,255,1)",
        config: {
            duration: durationState
        }
    }),
    [durationState]
);`;
