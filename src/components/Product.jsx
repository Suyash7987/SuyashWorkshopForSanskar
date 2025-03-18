import React from 'react'
import './Product.css'
function Product() {
  const data =[
  { 
    img:"./vincetChase.png",
    Item:"Vincet Chase",
    Name:"Hustlr ACE",      
  },
  {
     img:"./Rayban.png",
    Item:"Rayban",
    Name:"Wayfarer",      
  },
  { 
    img:"./Fastrack.png",
    Item:"FasTrack",
    Name:"Avaitor",      
  },
  { 
    img:"./Titan.png",
    Item:"Titan",
    Name:"Tees",      
  },
  { 
    img:"./Maybach.png",
    Item:"MayBach",
    Name:"The Boss",      
  }
]
  return (
    <>
     <div id='ProMain'>
      <div id="headline">
        <h1>Our Products</h1>
      </div>
        <div id="innerdiv">
        {data.map((item, index) => (
        <div key={index} className="items">
            <div id="item-upper">
              <img src={item.img} alt="" />
            </div>
            <div id="item-lower">
               <h1>{item.Item}</h1>
               <p>{item.Name}</p>
               <button>View detail</button>
               <button>Buy Now</button>
            </div>
        </div>
      ))}
        </div>
     </div>
    </>
  )
}

export default Product