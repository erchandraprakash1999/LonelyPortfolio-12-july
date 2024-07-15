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
  navitem: ["about","skills","resume", "services", "portfolio",'testimonials', "contact"]
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
export const resume = {
  title:'Resume',
  description:'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
  Summary:{
      heading:"Summary",
      candidateName:"Alice Barkley",
      SummaryContent:"Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.",
      Address:"Portland par 127, Orlando, FL",
      phoneNumber:"(123) 456-7891",
      emailAddress:"",
  },
  Education:{
      heading:"Education",
      flowChart:[
          {
              courseName:"Master in Electronics",
              Batch:"2015 - 2016",
              courseContent:["Rochester Institute of Technology, Rochester, NY","Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend"],
          },
          {
              courseName:"Bachelor of Fine Arts & Graphic Design",
              Batch:"2010 - 2014",
              courseContent:["Delhi Institute of Technology, Rochester, NY","Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila"],
          },
      ]},
  Experience:{heading:"Professional Experience",
      flowChart:[
      {
          JobRole:"Senior Graphic Design Specialist",
          duration:"2019 - Present",
          location:"Experion, New York, NY",
          courseContent:["Lead in the design, development, and implementation of the graphic, layout, and production communication materials","Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.","Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design","Oversee the efficient use of production project budgets ranging from $2,000 - $25,000"]
          },
      {
          JobRole:"Graphic Design Specialist",
          duration:"2017 - 2018",
          location:"Stepping Stone Advertising, New York, NY",
          courseContent:["Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements","Managed up to 5 projects or tasks at a given time while under pressure","Recommended and consulted with clients on the most appropriate graphic design","Created 4+ design presentations and proposals a month for clients and account managers"]
      },
  ]}
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
export const contact = {
  title:"Contact",
  description:"Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
  webName:"LONELY",
  webDescription:"Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.",
  socialLinks:{
    twitterURL:"",
    facebookURL:"",
    instagramURL:"",
    linkedInURL:"",
  },
  ContactDetails:{
    Address:"A108 Adam Street, New York, NY 535022",
    phoneNumber:"+1 5589 55488 55",
    Gmail:"info@example.com"
  }
}