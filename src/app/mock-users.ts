import { User } from './model/user.model';

export const USERS: User[] = [
  { id:1,firstName: 'John', lastName: 'Doe',email:'johnDoe@gmail.com',phone:'9889887778',status:true,profile:'assets/user1.png' },
  { id:2,firstName: 'Vicky', lastName: 'Sharma',email:'vickySharma@gmail.com',phone:'6878778878',status:true,profile:'assets/user2.png' },
  { id:3,firstName: 'Michel', lastName: 'las' ,email:'michel@gmail.com',phone:'898989898',status:true,profile:'assets/user3.png'},
  { id:4,firstName: 'Mic', lastName: 'John' ,email:'mikee@gmail.com',phone:'08923232323',status:false,profile:'assets/user4.png'},
  { id:5,firstName: 'Jim', lastName: 'Kate' ,email:'jim@gmail.com',phone:'899978676',status:false,profile:'assets/user5.png'},
];