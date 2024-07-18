import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiAtari, SiCommodore, SiNintendo, SiSega } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { IconType } from "react-icons"
import { GiConsoleController } from "react-icons/gi"

export const capitalize = (str: string) => {
  const words: string[] = str.split(" ");
  const capitalized: string[] = [];

  for (let word of words) {
    const first = word.charAt(0);
    const rest = word.length > 1 ? word.slice(1) : "";

    capitalized.push(first.toUpperCase() + rest);
  }

  return capitalized.join(" ");
};

export const platformIconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  ios: MdPhoneIphone,
  android: FaAndroid,
  mac: FaApple,
  linux: FaLinux,
  nintendo: SiNintendo,
  atari: SiAtari,
  'commodore-amiga': SiCommodore,
  sega: SiSega,
  '3do': GiConsoleController,
  'neo-geo': GiConsoleController,
  web: BsGlobe,
};
