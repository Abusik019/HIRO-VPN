interface ArrowIconProps {
    width?: number | string;
    height?: number | string;
    className?: string;
    fill?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
    width = 24,
    height = 24,
    className = "",
    fill = "currentColor",
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            className={className}
            fill="none"
        >
            <path
                d="M12.0004 14.7079L6.69238 9.39989L7.40038 8.69189L12.0004 13.2919L16.6004 8.69189L17.3084 9.39989L12.0004 14.7079Z"
                fill={fill}
            />
        </svg>
    );
};

export default ArrowIcon;
