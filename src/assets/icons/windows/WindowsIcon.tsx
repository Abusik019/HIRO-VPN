interface WindowsIconProps {
    width?: number | string;
    height?: number | string;
    className?: string;
    fill?: string;
}

const WindowsIcon: React.FC<WindowsIconProps> = ({
    width = 24,
    height = 24,
    className = "",
    fill = "currentColor",
}) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    width={width}
                    height={height}
                    className={className}>
        <g clipPath="url(#clip0_1274_3287)">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.0075 11.2005L0 3.39851L9.60026 2.09501V11.2005H0.0075375H0.0075ZM11.1997 1.86247L23.9964 0V11.2005H11.1996L11.1997 1.86247ZM24 12.8004L23.9973 24.0009L11.2001 22.2004V12.8004H24L24 12.8004ZM9.59936 21.9958L0.0070875 20.6803V12.7986H9.59936V21.9958Z" fill={fill}/>
        </g>
        <defs>
        <clipPath id="clip0_1274_3287">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    );
};

export default WindowsIcon;
