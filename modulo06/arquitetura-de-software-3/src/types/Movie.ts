export class Movie {
  constructor(
    private id: string, 
    private title: string, 
    private description: string,
    private duration_in_minutes: number, 
    private year_of_release: number
  ){
    this.id = id,
    this.title = title,
    this.description = description,
    this.duration_in_minutes = duration_in_minutes,
    this.year_of_release = year_of_release
  }

  public getID(){
    return this.id
  }
  public getTitle(){
    return this.title
  }
  public getDescription(){
    return this.description
  }
  public getDurationInMinutes(){
    return this.duration_in_minutes
  }
  public getYearOfRelease(){
    return this.year_of_release
  }

  public setID(newID: string){
    this.id = newID
  }
  public setTitle(newTitle: string){
    this.title = newTitle
  }
  public setDescription(newDescription: string){
    this.description = newDescription
  }
  public setDurationInMinutes(newDurationInMinutes: number){
    this.duration_in_minutes = newDurationInMinutes
  }
  public setYearOfRelease(newYearOfRelease: number){
    this.year_of_release = newYearOfRelease
  }
}
