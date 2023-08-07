import variables from "./variables.modules.scss"
import Image from 'next/image'

export default function Logo() {
    return (
      <div>
        <h1 className={variables.title}> 💼 Portfolio </h1>
          <Image
            src="/mi.jpg"
            alt="Mi Logo"
            className={variables.miLogo}
            width={70}
            height={70}
            priority
          />
      </div>
    );
  }