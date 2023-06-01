export interface IInfromPhotoProps {
  pk: number;
  urlfile: string | null;
  file: string | null;
  description: string;
}

export interface IInformProps {
  pk: number;
  name: string;
  link: string;
  date: string;
  photo: IInfromPhotoPros[];
}
