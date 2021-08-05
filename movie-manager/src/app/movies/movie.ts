export class Movie{

  constructor(
    public id: string,
    public name: string,
    public duration: number,
    public genre1: string,
    public genre2: string,
    public genre3: string
  ){}

  static fromForm(formData: any): Movie{
    return new Movie(
      '',
      formData.name,
      formData.duration,
      formData.genre1,
      formData.genre2,
      formData.genre3
    );
  }

}

