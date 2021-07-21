class User {
  name: string
  age: number
  city: string
  status: boolean

  constructor(name: string, age: number, city: string, status: boolean) {
    this.name = name
    this.age = age
    this.city = city
    this.status = status
  }

  setName(name: string): void {
    this.name = name
  }

  getName(): string {
    return this.name
  }
  setAge(age: number):void {
    this.age = age
  }
  getAge():number{
    return this.age
  }
  setCity(city:string):void{
    this.city = city
  }
  getCity():string{
    return this.city
  }
  changeStatus(status:boolean):void{
    this.status=status
  }
}


interface Animal{
  action:string;
  talk:string;
  info():void;

}
class Fish implements Animal{
  action: string;
  talk: string;

  constructor(action: string, talk: string) {
    this.action = action;
    this.talk = talk;
  }

  info(): void {
    console.log(`action: ${this.action} talk: ${this.talk}`)
  }
}




class Cat implements Animal{
  action: string;
  talk: string;


  constructor(action: string, talk: string) {
    this.action = action;
    this.talk = talk;
  }

  info(): void {
    console.log(`action: ${this.action} talk: ${this.talk}`)
  }

}

class Bird implements Animal{
  action: string;
  talk: string;


  constructor(action: string, talk: string) {
    this.action = action;
    this.talk = talk;
  }

    info(): void {
    console.log(`action: ${this.action} talk: ${this.talk}`)
  }
}


let bird = new Bird('летает','чирик')
bird.info()


let rufus = new User(
  'Rufus',
  20,
  'Lvov',
  false
)

console.log(rufus.getCity())
rufus.setCity('Kiev')
console.log(rufus.getCity())
