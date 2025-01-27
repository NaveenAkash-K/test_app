const Toggle = (props: {
    isEnabled: boolean;
    onChange: (value: boolean) => void;
    isDisabled?: boolean;
}) => {
    return (
        <div
            style={{backgroundColor: props.isDisabled ? props.isEnabled ? "#241067" : "#16181C" : props.isEnabled ? "#2B00FF" : "#16181C"}}
            onClick={() => {
                if (!props.isDisabled) {
                    props.onChange(!props.isEnabled);
                }
            }}
            className={`w-11 h-6 border-gray-800 border rounded-full flex items-center transition relative cursor-pointer ${
                props.isDisabled ? "cursor-not-allowed" : ""
            }`}
        >
            <div
                style={{
                    backgroundColor: props.isDisabled ? "#565656" : "#EDEDED",
                }}
                className={`w-4 h-4 rounded-full transition transform ${
                    props.isEnabled
                        ? "translate-x-[1.4rem] scale-110"
                        : "translate-x-1 scale-90"
                }`}
            ></div>
        </div>
    );
};

export default Toggle;
