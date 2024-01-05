import React from "react";
import Image from "next/image";
import Link from "next/link";
function Nav_Left() {
  return (
    <Link href={"/"} className="w-auto h-auto flex flex-row items-center">
      <Image
        src={"/signature-crop.png"}
        width={150}
        height={150}
        alt="Taufeeq Riyaz"
        className="  cursor-pointer"
      />
    </Link>
  );
}

export default Nav_Left;
