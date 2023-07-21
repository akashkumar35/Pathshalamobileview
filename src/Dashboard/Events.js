import React from 'react'
import img1 from '../assets/asset 5.jpeg';
import Card from 'react-bootstrap/Card';

function Events() {
    const arr=[
        {
            id:1,
            image:img1,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        },
        {
            id:2,
            image:img1,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }
    ]
  return (
    <div className="h-[50%] w-[full] flex justify-center items-center">
      <div className="h-[90%] w-[90%] flex flex-col bg-white rounded-2xl">
        <div className="h-[20%] w-[full] flex justify-start items-center ">
<h2 className="text-xl font-bold pl-5 ">Upcoming events</h2>
        </div>
        <div className="h-[80%] w-full  flex justify-around items-center">
            {
                arr.map((items)=>{
                    return(
                        <Card style={{ width: '45%',height:"90%" ,backgroundColor:"#eceef0",borderRadius:"10%" }}>
                        <Card.Img variant="top" src={items.image} />
                        <Card.Body>
                          <Card.Title className="text-[13px] pt-5 text-start text-blue-700 pl-4">{items.description}</Card.Title>
                          <Card.Text>
                           
                          </Card.Text>
                        
                        </Card.Body>
                      </Card>
                    )
                })
            }
      
        </div>
      </div>
    </div>
  )
}

export default Events
