import variables from "./variables.modules.scss"
import Image from 'next/image'

export default function Logo() {
  return (
    <>
      <Image
        className="ms-2" 
        src="/mi.jpg"
        alt="Mi Logo"
        width={70}
        height={70}
        priority
      />
    </>
  );
}