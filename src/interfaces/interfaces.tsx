export interface heroSpec {
    likeChecker: Function;
    onLiked: Function;
    
    id: number;
    name: string;
    slug: string;
    powerstats: {
      intelligence: number;
      strength: number;
      speed: number;
      durability: number;
      power: number;
      combat: number;
    };
    appearance: {
      gender: string;
      race: string;
      height: string[];
      weight: string[];
      eyeColor: string;
      hairColor: string;
    };
    biography: {
      fullName: string;
      alterEgos: string;
      aliases: string[];
      placeOfBirth: string;
      firstAppearance: string;
      publisher: string;
      alignment: string;
    };
    work: {
      occupation: string;
      base: string;
    };
    connections: {
      groupAffiliation: string;
      relatives: string;
    };
    images: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
  };


export interface IHeroManager extends React.HTMLAttributes<HTMLElement>{
      likeCheck: Function;
      likeFunction: Function;
      displayList: heroSpec[]
}
export interface ILikelistManager extends React.HTMLAttributes<HTMLElement>,IHideManager{
  likeFunction: Function;
  displayList: heroSpec[]
  likeCheck: Function;
}
export interface IHideManager {
  hide: Boolean;
  setHide: Function;
}

export interface IGridList extends React.HTMLAttributes<HTMLElement>{ 
  heroState: heroSpec[];
  likeFunction: Function;
  displayList: heroSpec[]
  likeCheck: Function;
  appConfig: IConfig;
}

export interface ICellIndex {
    columnIndex: number;
    rowIndex: number;
}

export interface IConfig{
    columnCount: number;
    cardWidth: number;
}
