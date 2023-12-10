export interface IKeyboard {
  name: string;
  description: string;
  colors: IKeyboardColor[] | [];
  price: number;
  battery: IBattery;
  images: IImage[];
  materials: IMaterials;
  profile: string;
  series: string;
  connectivity: string;
  size: number;
  features: string[];
  _id: string;
}

export interface IKeyboardColor {
  name: string;
  hex: string;
}
export interface IBattery {
  capacity: number;
  workingTimeLightsOn: number;
  workingTimeLightsOff: number;
}

export interface IImage {
  image: string;
  color?: string;
}
export interface IHeroKeyboard {
  id: string;
  img: string;
  name: string;
  desc: string;
}
export interface IMaterials {
  frame: string;
  bottomCase: string;
  keycap: string;
}
