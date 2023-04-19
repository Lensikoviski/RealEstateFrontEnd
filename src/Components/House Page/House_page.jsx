import React, { useState, useEffect } from 'react'
import './House_page.scss'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import {DatePicker} from '@mui/material/DatePicker'
// import {CAccordionCollapse} from '@coreui/react'
//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CDatePicker from "react-datepicker";
import FsLightbox from "fslightbox-react";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import Navbar from '../Navabar/Navbar';



const House_page = () => {




  const date = new Date()
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [toggler, setToggler] = useState(false);
  const [video, setVideo] = useState(false)
  const [inperson, setInperson] = useState(false)
  const timeOptions = [
    { value: '10:00', label: '10:00 AM' },
    { value: '10:30', label: '10:30 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '11:30', label: '11:30 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '12:30', label: '12:30 PM' },
    { value: '1:00', label: '1:00 PM' },
    { value: '1:30', label: '1:30 PM' },
    { value: '2:00', label: '2:00 PM' },
    { value: '2:30', label: '2:30 PM' },
    { value: '3:00', label: '3:00 PM' },
    { value: '3:30', label: '3:30 PM' },
    { value: '4:00', label: '4:00 PM' },
    { value: '4:00', label: '4:30 PM' },
    { value: '5:00', label: '5:00 PM' },
  ];

  const [selectedTimeOption, setSelectedTimeOption] = useState(timeOptions[0]);




  return (

    <>
      <Navbar bg='white' txtCol={'black'} hoverClass={'LightHover'} />
      <div className="Housepage_container">
        <div className="topsection">

          <div className="address">
            <h2>Golden Sands Showhome, Pāpāmoa</h2>
            <div>
              <img src="/images/location.png" alt="" />
              <p>380 State Rd 3075, Asheville, NC 28803, USA</p>
            </div>
          </div>

          <div className="details">
            <h2><span>Price</span> 156000</h2>
            <div className="area">
              <img src="/images/measuring.png" alt="" />
              <p>1,245 sq feet</p>
            </div>
          </div>

        </div>

        <div className="image_section">
          <div className="large_image">
            <img src="/images/heroimage1.jpg" alt="" />
          </div>
          <div className="two_small">
            <>
              <FsLightbox
                toggler={toggler}
                sources={[
                  'https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg',
                  'https://media.istockphoto.com/id/1273896468/photo/modern-home-and-electric-car.jpg?s=612x612&w=0&k=20&c=eUtbHUHT3nC1al1CIJQxribAtyJGQqwHGrmNzMIZjkY=',
                  'https://thehomechannel.co.za/wp-content/uploads/2020/12/Australias-Best-Houses-S8.jpg',
                  'https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg',
                  'https://media.istockphoto.com/id/1273896468/photo/modern-home-and-electric-car.jpg?s=612x612&w=0&k=20&c=eUtbHUHT3nC1al1CIJQxribAtyJGQqwHGrmNzMIZjkY=',
                ]}
              />
            </>


            <div className="first">
              <img src="/images/heroimage2.jpg" alt="" />
            </div>
            <div className="second">
              <p onClick={() => {
                setToggler(!toggler)
              }}>+5 more</p>
              <div className="image_overlay" onClick={() => {
                setToggler(!toggler)
              }}></div>
              <img src="/images/heroimage3.jpg" alt="" />
            </div>



          </div>
        </div>


        <div className="icons_section">
          <div className="bedroom">
            <div className="icons">
              <img src="/images/bed.png" alt="" />
              <p>1</p>
            </div>
            <p>Bedroom</p>
          </div>

          <div className="bathroom">
            <div className="icons">
              <img src="/images/bathtub.png" alt="" />
              <p>2</p>
            </div>
            <p>Bathroom</p>
          </div>

          <div className="garage">
            <div className="icons">
              <img src="/images/garage.png" alt="" />
              <p>1</p>
            </div>
            <p>Garage</p>
          </div>

          <div className="area">
            <div className="icons">
              <img src="/images/measuring.png" alt="" />
              <p style={{ color: 'white' }}>0</p>
            </div>
            <p>1300 sq ft</p>
          </div>

          <div className="calendar">
            <div className="icons">
              <img src="/images/calendar.png" alt="" />
              <p style={{ marginLeft: '10px' }}>2018</p>
            </div>
            <p>Year built</p>
          </div>



        </div>

        <div className="description">

          <h3>Description</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa sunt tenetur eos magnam fuga, consequatur nam repellat accusantium laudantium natus voluptatem animi debitis veritatis dignissimos id repellendus quam est molestiae, excepturi adipisci! Quidem doloremque debitis molestias at accusamus. Earum voluptatem debitis ad amet quasi odit dolorem ullam alias odio?</p>


        </div>


        <div className="documents_container">
          <h3>Property Documents</h3>
          <div className='documents'>
            <div>
              <div>
                <img src="/images/document.png" alt="" />
                <p>Document 1</p>
              </div>

              <p>Download</p>
            </div>

            <div>
              <div>
                <img src="/images/document.png" alt="" />
                <p>Document 2</p>
              </div>

              <p>Download</p>
            </div>

            <div>
              <div>
                <img src="/images/document.png" alt="" />
                <p>Document 3</p>
              </div>
              <p>Download</p>
            </div>
          </div>
        </div>


        <div className="details_section">
          <h3>Details</h3>
          <div className="container">
            <div>
              <p>Property ID:</p>
              <p>TY01</p>
            </div>
            <div>
              <p>Price:</p>
              <p>190,000</p>
            </div>
            <div>
              <p>Property Size:</p>
              <p>1300 sq ft</p>
            </div>
            <div>
              <p>Bedroom:</p>
              <p>1</p>
            </div>
            <div>
              <p>Bathroom:</p>
              <p>1</p>
            </div>
            <div>
              <p>Garage:</p>
              <p>1</p>
            </div>
            <div>
              <p>Garage size:</p>
              <p>79 sq ft</p>
            </div>
            <div>
              <p>Year built:</p>
              <p>2019</p>
            </div>
            <div>
              <p>Propert Status:</p>
              <p>For Sale</p>
            </div>

          </div>

        </div>


        <div className="additional_details">
          <h3>Additional Details</h3>

          <div className="container">
            <div>
              <p>Covered parking:</p>
              <p>Yes</p>
            </div>

            <div>
              <p>Laundary:</p>
              <p>Yes</p>
            </div>
            <div>
              <p>Wood flooring:</p>
              <p>Yes</p>
            </div>
            <div>
              <p>Storage:</p>
              <p>Yes</p>
            </div>
            <div>
              <p>Washers:</p>
              <p>Yes</p>
            </div>
            <div>
              <p>High-Speed Internet:</p>
              <p>Yes</p>
            </div>
            <div>
              <p>Cable or Satellite TV:</p>
              <p>Yes</p>
            </div>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="tour_container">
          <div className="image">
            <img src="/images/heroimage1.jpg" alt="" />
          </div>
          <div className="tour">
            <h3>Schedule a tour</h3>
            <CDatePicker selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText='Select a Date' />
            <h3>Tour Type</h3>
            <div className="tour_type" >
              <div className="video_chat" style={video ? {borderWidth:'3px'} : {borderWidth:'1px'}} onClick={()=>{
                setVideo(true)
                setInperson(false)
              }}>
                <p>Video Chat</p>
              </div>
              <div className="inperson" style={inperson ? {borderWidth:'3px'} : {borderWidth:'1px'}} onClick={()=>{
                setVideo(false)
                setInperson(true)
              }}>
                <p>In Person</p>
              </div>
            </div>

            <div className="time">
              <p>Time</p>
              <Select
                options={timeOptions}
                value={selectedTimeOption}
                onChange={(option) => setSelectedTimeOption(option)}
              />
            </div>

            <input type="text" className='name' placeholder='Name' style={{ marginBottom: '10px' }} />
            <input type="text" className='phone' placeholder='Phone' style={{ marginBottom: '10px' }} />
            <input type="email" className='email' placeholder='Email' style={{ marginBottom: '10px' }} />

            <button><p>Submit Your Request</p></button>



          </div>
        </div>

        <div className="tour_container">

          <div className="tour">
            <h3>Request Info</h3>
            <div className="photo">
              <div>
                <img src="https://demo22.houzez.co/wp-content/uploads/2020/03/Artboard-2team-150x150.jpg" alt="" />
              </div>
              <div className="account">
                <img src="/images/profile.png" alt="" />
                <p>Mary Elizabath</p>
              </div>

            </div>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Phone' />
            <input type="text" placeholder='Email' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Message' ></textarea>
            <div className="buttons_container">
              <button>
                <p>Send Message</p>
              </button>
              <button>
                <p>Call</p>
              </button>
            </div>
          </div>

          <div className="image">
            <img src="/images/hotel.webp" alt="" />
          </div>

        </div>


        <div className="address_section">
          <div>

            <h3>Address</h3>
            <button>
              <p>Open on Google Maps</p>
            </button>

          </div>

          <div className="container">
            <div>
              <p>Address</p>
              <p>380 State Rd 3075</p>
            </div>
            <div>
              <p>Zip/Postal Code</p>
              <p>28803</p>
            </div>
            <div>
              <p>City</p>
              <p>Miami Beach</p>
            </div>
          </div>

          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38778.5029984928!2d13.379307475289231!3d52.59390452065307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84d659919bad1%3A0x52120465b5faee0!2sBlankenburg%2C%20Berlin%2C%20Germany!5e0!3m2!1sen!2sin!4v1681565227545!5m2!1sen!2sin" loading="lazy"></iframe>
          </div>
        </div>





      </div>

    </>


  )
}

export default House_page