import { MDBCarousel, MDBCarouselItem,} from 'mdb-react-ui-kit';
import Ramos from "../Images/ramos.jpg"

function About(){
    return (
        <div>
            <div>
                <MDBCarousel showControls fade>
                    <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://mdbootstrap.com/img/new/slides/041.jpg'
                    alt='...'
                    />
                    <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://mdbootstrap.com/img/new/slides/042.jpg'
                    alt='...'
                    />
                    <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://mdbootstrap.com/img/new/slides/043.jpg'
                    alt='...'
                    />
                </MDBCarousel>
            </div>
            <div>
                <h1 id='committee'>Core Committee</h1>
            </div>
            <div id='committee-card'>
                <div className='card-container'>
                    <div className='staff-img-container'>
                        <img className='staff-img' src={Ramos} alt="ramos" />
                    </div>
                    <div className='staff-info'>
                        <h1 className='staff-info-title'>Committee member name</h1>
                        <p className='staff-info-position'>Position</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='staff-img-container'>
                        <img className='staff-img' src={Ramos} alt="ramos" />
                    </div>
                    <div className='staff-info'>
                        <h1 className='staff-info-title'>Committee member name</h1>
                        <p className='staff-info-position'>Position</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='staff-img-container'>
                        <img className='staff-img' src={Ramos} alt="ramos" />
                    </div>
                    <div className='staff-info'>
                        <h1 className='staff-info-title'>Committee member name</h1>
                        <p className='staff-info-position'>Position</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='staff-img-container'>
                        <img className='staff-img' src={Ramos} alt="ramos" />
                    </div>
                    <div className='staff-info'>
                        <h1 className='staff-info-title'>Committee member name</h1>
                        <p className='staff-info-position'>Position</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='staff-img-container'>
                        <img className='staff-img' src={Ramos} alt="ramos" />
                    </div>
                    <div className='staff-info'>
                        <h1 className='staff-info-title'>Committee member name</h1>
                        <p className='staff-info-position'>Position</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='staff-img-container'>
                        <img className='staff-img' src={Ramos} alt="ramos" />
                    </div>
                    <div className='staff-info'>
                        <h1 className='staff-info-title'>Committee member name</h1>
                        <p className='staff-info-position'>Position</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='staff-img-container'>
                        <img className='staff-img' src={Ramos} alt="ramos" />
                    </div>
                    <div className='staff-info'>
                        <h1 className='staff-info-title'>Committee member name</h1>
                        <p className='staff-info-position'>Position</p>
                    </div>
                </div>
                <div className='card-container'>
                    <div className='staff-img-container'>
                        <img className='staff-img' src={Ramos} alt="ramos" />
                    </div>
                    <div className='staff-info'>
                        <h1 className='staff-info-title'>Committee member name</h1>
                        <p className='staff-info-position'>Position</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 id='about-title'>ABOUT US</h1>
                <p id='about-us'>Amar Jyoti Vidya Mandir started its journey in year 1984 by our
                    founder Shri Vaidya B.B.Chaube. We began our journey with vision to
                    provide better education to the young minds of our society. Started
                    with a hindi medium school in Bhayandar west with small strength we
                    now have 2 branches, one in Virar i.e. Adarsh Public High School and
                    another in Nallasopara i.e. BBC English school & Hirawati devi Hindi
                    High School. We have also added Junior College section to our Amar
                    Jyoti Group started in year 2013-2014 group, for the students who wish
                    to pursue in the field of Commerce. We currently have 50+ teaching
                    staff in our Amar Jyoti family who constantly adds value to our
                    schools and drive it towards our goals. Our students have also made
                    our school proud by constantly scoring above distinction percentage in
                    SSC exams every year. Apart from academics our students also excel in
                    sports wherein we hold record of winning Champions trophy 6 times in a
                    row in Sports competition organised by Manthon Samajik Sanstha and
                    Mira Bhayandar Block Congress Committee. Our students have also won 1
                    gold, 3 silver and 2 bronze for school in sports competition organised
                    by Mahapaur Chashak. We hope to continue our journey with a view to
                    achieve our vision and mission and make our students ready for their
                    future and career.</p>
            </div>
            <div>
                <h1 id='vision-title'>OUR VISION</h1>
                <p id='vision'>Amar Jyoti Vidya Mandir started its journey in year 1984 by our
                    founder Shri Vaidya B.B.Chaube. We began our journey with vision to
                    provide better education to the young minds of our society. Started
                    with a hindi medium school in Bhayandar west with small strength we
                    now have 2 branches, one in Virar i.e. Adarsh Public High School and
                    another in Nallasopara i.e. BBC English school & Hirawati devi Hindi
                    High School. We have also added Junior College section to our Amar
                    Jyoti Group started in year 2013-2014 group, for the students who wish
                    to pursue in the field of Commerce. We currently have 50+ teaching
                    staff in our Amar Jyoti family who constantly adds value to our
                    schools and drive it towards our goals.</p>
            </div>
        </div>
    )
}

export default About;