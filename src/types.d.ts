export interface IInformPhotoProps {
  pk: number;
  urlfile: string | null;
  file: string | null;
  description: string;
}

export interface IProgramProps {
  pk: number;
  name: string;
  description: string;
}

export interface IInformProps {
  pk: number;
  name: string;
  link: string;
  date: string;
  photo: IInfromPhotoPros[];
}

export interface IProjectProps {
  pk: number;
  name: string;
  programs: IProgramProps[];
  location: string;
  status: string;
  year: number;
  description: string;
  photo: IInfromPhotoPros[];
}

export interface IProjectDetailProps {
  id: number;
  created: string;
  updated: string;
  name: string;
  location: string;
  status: string;
  year: number;
  description: string;
  programs: IProgramProps[];
  photo: IInformPhotoPros[];
}
