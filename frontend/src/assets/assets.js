import icon from './icon.jpg'
import search from './search1.png'
import menu from './menu.png'
import close from './close.png'
import user_profile from './user-icon.png'
import bike_img1 from './passion.jpg'
import bike_img2 from './splendor.jpg'
import bike_img3 from './unicorn.jpg'
import bike_img4 from './pulsar.jpg'
import bike_img5 from './mt.jpg'
import bike_img6 from './appache.jpg'
import karizma from './karizma.jpeg'
import location_icon from './location.jpg'
import edit_icon from './edit_icon.jpg'
import check_icon from './check.png'
import admin_icon from './admin.png'
import add_icon from './add.png'
import list_icon from './list.png'
import bike from './bike.png'
import coloredAdmin from './coloredadmin.png'
import coloredaddIcon from './coloredadd.png'
import coloredbikeIcon from './coloredbike.png'
import coloredlistIcon from './coloredlist.png'
import delete_icon from './delete.jpg'
import clock from './clock.png'

export const assets ={

    icon,
    search,
    menu,
    close,
    karizma,
    user_profile,
    location_icon,
    edit_icon,
    check_icon,
    admin_icon,
    add_icon,
    list_icon,
    coloredAdmin,
    coloredaddIcon,
    coloredbikeIcon,
    coloredlistIcon,
    delete_icon,
    clock

   

}

export const cityName = ["pune","Mumbai","solapur","kolhapur","Latur","Nanded"]


export const menuLinks = [ 
    
    
    {name:"Home",path:"/"},
    {name:"Bikes",path:"/bikes"},
    {name:"My Bookings",path:'/my-bookings'}
]

export  const adminMenuLinks =[

{name:'Admin',
 path:"/admin",
 icon :admin_icon,
 coloredIcon:coloredAdmin
},

{name:'Add bike',
 path:"/admin/add-bike",
 icon:add_icon,
 coloredIcon:coloredaddIcon
},

{name:'Manage bikes',
 path:"/admin/manage-bike",
 icon:bike,
 coloredIcon:coloredbikeIcon,
},

{name:'Manage Bookings',
path:"/admin/manage-bookings",
icon:list_icon,
coloredIcon:coloredlistIcon
},

]


export const userData = {
    "id": "1",
    "name":"greatstack",
    "email":"admin@example.com",
    "role":"admin",
    "image":user_profile,



}


export const bikedata =[

    {
        "id":"1",
        "admin": "rsee",
        "brand":"Hero",
        "model":"passionpro",
        "image": bike_img1,
        "year": 2001,
        "location":"nanded",
        "pricePerDay":110,
        "isAvaliable":true
    },

     {
        "id":"2",
        "admin": "peres",
        "brand":"Hero",
        "model":"splendor plus",
        "image": bike_img2,
        "year": 1985,
        "location":"parbhani",
        "pricePerDay":150,
        "isAvaliable":true
        },


     {
        "id":"3",
        "admin": "rrdsee",
        "brand":"Honda",
        "model":"unicorn",
        "image": bike_img3,
        "year": 2003,
        "location":"solapur",
        "pricePerDay":160,
        "isAvaliable":true
       },



     {
        "id":"4",
        "admin": "rghfee",
        "brand":"Bajaj",
        "model":"pulsar",
        "image": bike_img4,
        "year": 2007,
        "location":"pune",
        "pricePerDay":180,
        "isAvaliable":true
        },


     {
        "id":"5",
        "admin": "tteee",
        "brand":"Yamaha",
        "model":"MT15",
        "image": bike_img5,
        "year": 2022,
        "location":"satara",
        "pricePerDay":340,
        "isAvaliable":true
       },


    {
        "id":"6",
        "admin": "tteee",
        "brand":"TVS",
        "model":"Appache RTR",
        "image": bike_img6,
        "year": 2018,
        "location":"miraj",
        "pricePerDay":330,
        "isAvaliable":true
    },

    {
        "id":"7",
        "admin": "tteee",
        "brand":"TVS",
        "model":"Appache RTR",
        "image": bike_img6,
        "year": 2018,
        "location":"miraj",
        "pricePerDay":330,
        "isAvaliable":true
    }
]


export const bookingdata =[

    {
        
        "id":"1",
        "bike":bikedata[1],
        "user":"ewwe",
        "admin":"rwdww",
        "pickupdate":"2024-4-5",
        "returndate":"2025-5-4",
        "status":"confirmed",
        "price":440,
        "createdAt":"2025-5-4"
    },


     {
        
        "id":"2",
        "bike":bikedata[2],
        "user":"eerwe",
        "admin":"rgfdww",
        "pickupdate":"2024-4-5",
        "returndate":"2025-5-4",
        "status":"confirmed",
        "price":240,
        "createdAt":"2025-5-4"
    },


     {
        
        "id":"3",
        "bike":bikedata[3],
        "user":"weewwe",
        "admin":"rhgddww",
        "pickupdate":"2024-4-5",
        "returndate":"2025-5-4",
        "status":"pending",
        "price":540,
        "createdAt":"2025-5-4"
    },


     {
        
        "id":"4",
        "bike":bikedata[4],
        "user":"thjgwe",
        "admin":"kgjgww",
        "pickupdate":"2024-4-5",
        "returndate":"2025-5-4",
        "status":"confirmed",
        "price":740,
        "createdAt":"2025-5-4"
    },
]

export const admindata = {
    
   totalBikes:0,
   totalBookings:0,
   pendingBookings:0,
   completedBookings:0,
   recentBookings:[

    {
        
        "id":"2",
        "bike":bikedata[2],
        "user":"eerwe",
        "admin":"rgfdww",
        "pickupdate":"2024-4-5",
        "returndate":"2025-5-4",
        "status":"confirmed",
        "price":240,
        "createdAt":"2025-5-4"
    },


     {
        
        "id":"3",
        "bike":bikedata[3],
        "user":"weewwe",
        "admin":"rhgddww",
        "pickupdate":"2024-4-5",
        "returndate":"2025-5-4",
        "status":"pending",
        "price":540,
        "createdAt":"2025-5-4"
    },



   ],
   monthlyRevinew:0,
}
 