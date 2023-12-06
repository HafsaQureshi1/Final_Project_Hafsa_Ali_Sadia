import arrow from '../assets/images/DropDown.png'
import star from '../assets/images/stars.png'
import frame from '../assets/images/Frame 560.png'
import today from '../assets/images/Frame 625.png' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import card4 from '../assets/images/card4.png'
import arrows from '../assets/images/arrows.png'
import cat from '../assets/images/Categories.png'
import cat1 from '../assets/images/Category-CellPhone.png'
import cat2 from '../assets/images/cat2.png'
import cat3 from '../assets/images/cat3.png'
import cat4 from '../assets/images/cat4.png'
import cat5 from '../assets/images/cat5.png'

export default function Herosection() {
  return (
    < > 
<div className='container-fluid'>

  <div className='my-4 row'>

<div style={{marginLeft:'30px'}} className='col-lg-3 col-md-6 col-sm-12 divsize  text-light justify-content-center text-center  '>

<p style={{marginTop:'40px'}} className='mx-4 '>Women Fashion   <span><img style={{marginLeft:'30px',marginTop:'15px'}} src={arrow} alt="" /></span></p>
<p className='mx-4 my-3'>Men's Fashion  <span><img className='right' src={arrow} alt="" /></span></p>
<p className='mx-4 my-3'>Accessories   <span><img style={{marginLeft:'68px'}} className='' src={arrow} alt="" /></span></p>
<p className='mx-4 my-3'>Kids   <span><img style={{marginLeft:'132px'}} src={arrow} alt="" /></span></p>
<p className='mx-4 my-3'>Shawls   <span><img style={{marginLeft:'107px'}} src={arrow} alt="" /></span></p>

</div>
<div className='  col-lg-1 col-md-l 'style={{width:'auto'}}>
  <div className='vertical-line'></div>
  
</div>

<div className='col-lg-8 col-md-6 col-sm-6'>
  <img className=' img-fluid ' src={frame} alt="" /></div>
</div></div>
<hr />
<br />
    <div className='my-2 container'>
      <img className='my-2' src={today} alt="" />
    <p className='my-3 fw-bold' style={{fontSize:'36px'}}>Flash Sales <img style={{marginLeft:'500px'}} src={arrows} alt="" /> </p>
    </div>
    <div className='my-4 mx-5 container row '>
    <div className=' col-lg-3 col-md-6 col-sm-12'>
    <Card  style={{  border: 'none' }}>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Balochi Doch</Card.Title>
        $120   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $160</span>  
        <Card.Text>
      <img src={star} alt="" />
        <br /><br />
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='col-lg-3 col-md-6 col-sm-12'><Card  style={{  border: 'none' }}>
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>Embroidered Dress</Card.Title>
        $120   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $160</span>  
        <Card.Text>
      <img src={star} alt="" />
        <br /><br />
        </Card.Text>
      </Card.Body>
    </Card></div>
    <div className='col-lg-3 col-md-6 col-sm-12'><Card  style={{  border: 'none' }}>
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title>Embroidered Dress</Card.Title>
        $960   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $1160</span>  
        <Card.Text>
      <img src={star} alt="" />
        <br /><br />
        </Card.Text>
      </Card.Body>
    </Card></div>
    <div className='col-lg-3 col-md-6 col-sm-12'><Card  style={{  border: 'none' }}>
      <Card.Img variant="top" src={card4} />
      <Card.Body>
        <Card.Title>Blue Applique Dress </Card.Title>
        $120   <span style={{marginLeft:'8px', textDecoration: 'line-through' }}>  $160</span>  
        <Card.Text>
      <img src={star} alt="" />
        <br /><br />
        </Card.Text>
      </Card.Body>
    </Card></div>
    <div className='my-3 justify-content-center text-center'><button style={{width :'270px',fontSize:'18px'}} className=' gradient-container btn text-light'>View All Products</button>
   <br /><br />
   </div>
   <hr />
    </div>
    <div className='my-3 container'>
      <img src={cat} alt="" /> 
      <h3 className='my-4 fw-bold'>Browse by Category</h3>     
    </div>
    <div className='mx-5 my-4 row container justify-content-center text-center'>
<div style={{width:'155px',height:'140px'}} className="mx-3 col-lg-2 col-md-4 col-sm-12 bor justify-content-center text-center"><img style={{width:'50px',marginTop:'20px'}} src={cat1} alt="" /><p className='my-1 fw-bold'>Women</p> </div>
<div style={{width:'155px',height:'140px'}} className="mx-3 col-lg-2 col-md-4 col-sm-12 bor justify-content-center text-center"><img style={{width:'50px',marginTop:'20px'}} src={cat2} alt="" /><p className='my-1 fw-bold'>Accessories</p> </div>
<div style={{width:'155px',height:'140px'}} className="mx-3 col-lg-2 col-md-4 col-sm-12 bor justify-content-center text-center"><img style={{width:'50px',marginTop:'20px'}} src={cat3} alt="" /><p className='my-1 fw-bold'>Men</p> </div>
<div style={{width:'155px',height:'140px', background: 'linear-gradient(to right, #270B0B, #920505)'}} className="  mx-3 col-lg-2 col-md-4 col-sm-12 bor justify-content-center text-center"><img className='mx-2 ' style={{width:'40px',marginTop:'30px',height:'39px'}} src={cat4} alt="" /> <p className='my-1 text-light'>Kids</p> </div>
<div style={{width:'155px',height:'140px'}} className="mx-3 col-lg-2 col-md-4 col-sm-12 bor justify-content-center text-center"><img style={{width:'50px',marginTop:'20px'}} src={cat5} alt="" /><p className='my-1 fw-bold'>Shawls</p> </div>

    </div>
    </ >
  );
}

