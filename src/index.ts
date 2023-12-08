// class User {

// Access modifiers "public" & "private" ==>

// (default public)  name: string;
//   private email: string;
//   readonly city: string = "Los Santos";
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const user1 = new User("user123", "user@email.com");
// user1.city = "SomeCity";

// (can only be accessed in the User)
// console.log(user1.email)

// Alternative ==>
// class User {
//   // private city: string = "Los Santos";
//   // Another Access modidfier "protected"
//   protected city: string = "Los Santos";
//   constructor(public name: string, private email: string) {
//     this.name = name;
//     this.email = email;
//   }
//   get nameGetter(): string {
//     return `The name is ${this.name}`;
//   }
//   set nameSetter(newName: string) {
//     if (newName === this.name) {
//       throw new Error("The name you are providing is old");
//     }
//     this.name = newName;
//   }
// }
// const user1 = new User("user123", "user@email.com");
// console.log(user1);
// user1.nameSetter = "newName";
// console.log(user1);

// class subUser extends User {
//   isFamily: boolean = true;
//   get cityGetter(): string {
//     return `City=>>${this.city}`;
//   }
// }
// const user_2 = new subUser("user234", "user2@email.com");
// const city = user_2.cityGetter;
// console.log(city);

interface takePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}
interface story {
  createStory(): void;
}

class instaGram implements takePhoto, story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
  createStory(): void {
    console.log("This is a story which is amazing!!");
  }
}
