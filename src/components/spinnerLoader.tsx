import Image from 'next/image'

interface SpinnerLoaderProps {
  src: string
  width?: number,
  height?: number
}
const SpinnerLoader = ({ src, width, height }: SpinnerLoaderProps) => {
  return (
    <div className="flex items-center justify-content-center h-screen">
      <Image src={src} alt="loader" width={width} height={height} />
    </div>
  )
}

export default SpinnerLoader