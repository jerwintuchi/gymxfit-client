import Image from "next/image";

export const Logo = () => {
    return (
        <Image height={100}
            width={100}
            priority
            src="/static/mainlogo.jpg"
            alt="mainlogo"
        />
    );
}
