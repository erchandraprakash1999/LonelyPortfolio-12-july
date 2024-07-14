import { CiFaceSmile } from 'react-icons/ci';
import { CgNotes } from 'react-icons/cg';
import { FaEarthAmericas } from 'react-icons/fa6'
import { GrNotes } from 'react-icons/gr'
import { IoBasketballOutline } from 'react-icons/io5'
import { MdSpeed } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io';
import { BsAward } from 'react-icons/bs';
export const headerSection ={
  image: "/image/hero-bg.jpg",
  title: "Hi, I'm Alice!",
  description: "I am a graphic designer"
}

export const navbar = {
  name: "Lonely",
  navitem: ["home","about", "resume", "services", "portfolio",'testimonials', "contact"]
}
export const about = {
  image:"./image/girlCall.jpg",
  title:"Voluptatem dignissimos provident quasi",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.",
  subItem:[
          {strong:'Happy Clients',icons:<CiFaceSmile fontSize={55}/>,value:65,text:'consequuntur voluptas nostrum aliquid ipsam architecto ut.'},
          {strong:'Projects',icons:<CgNotes fontSize={55}/>,value:85,text:'adipisci atque cum quia aspernatur totam laudantium et quia dere tan'},
          {strong:'Years of experience',icons:<IoMdTime fontSize={55}/>,value:12,text:' aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel'},
          {strong:'Awards',icons:<BsAward fontSize={55}/>,value:15,text:' rerum asperiores dolor alias quo reprehenderit eum et nemo pad der'},
  ],
}
export const  skills = {
  title: "Skills",
  description: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
  progressBars: [
    { key: "HTML", value: 100 },
    { key: "CSS", value: 90 },
    { key: "JavaScript", value: 75 },
    { key: "Php", value: 80 },
    { key: "WordPress/CMS", value: 90 },
    { key: "Photoshop", value: 55 }
  ]
}

export const  services = {
  title:'Services',
  description:'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
  itemList:[
      {icon:<IoBasketballOutline fontSize={45} />,itemhead:'Lorem Ipsum',itemtext:'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi'},
      {icon:<GrNotes fontSize={45} />,itemhead:'Sed ut perspiciatis',itemtext:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'},
      {icon:<MdSpeed fontSize={45} />,itemhead:'Magni Dolores',itemtext:'Excepturi sint occaecat cupidatat non proident, sunt in culpa qui officia'},
      {icon:<FaEarthAmericas fontSize={45} />,itemhead:'Nemo Enim',itemtext:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'}
  ]
}
 export const testimonials = {
        title:'Testimonials',
        description:'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
        Reviews:[
            {feedback:'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',image:'image/testimonials-1.jpg',Clientname:'Jena Karlis',proffession:'Store Owner'},
            {feedback:'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',image:'image/testimonials-2.jpg',Clientname:'Matt Brandon',proffession:'Hacker'},
            {feedback:'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',image:'image/testimonials-3.jpg',Clientname:'Jena Karlis',proffession:'Store Owner'},
            {feedback:'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',image:'image/testimonials-4.jpg',Clientname:'Matt Brandon',proffession:'Hacker'},
            {feedback:'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',image:'image/testimonials-5.jpg',Clientname:'Rishabh',proffession:'Freelancer'},
        ]
    } 
      
export const filterImages = 
{title:'Portfolio',
  description:"Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
  images:[
  {name:"app",link:"image/app1.jpg"},
  {name:"web",link:"image/web2.jpg"},
  {name:"card",link:"image/card2.jpg"},
  {name:"app",link:"image/app3.jpg"},
  {name:"card",link:"image/card3.jpg"},
  {name:"web",link:"image/web3.jpg"},
  {name:"app",link:"image/app2.jpg"},
  {name:"web",link:"image/web1.jpg"},
  {name:"card",link:"image/card1.jpg"},
]}