import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";

function PromtpSlider(){

    return(
        <>
        <div className="p-5">
        <div className="d-flex justify-content-between">
          <div> 
             <h2 className="" style={{fontWeight:'700'}}>
            Weekly Prompts
            </h2>
            </div>
            <Link to="/add-ons" className="text-decoration-none text-light-emphasis">
                <div className="all-prompts bg-white fw-600 p-2 text-center rounded" style={{width:'150px',fontSize:'1.1rem',border:'1px solid #dde1e5'}}>
                     All Prompts               
                </div>
                </Link>
        </div>
        <div className="slider">
        <section className="sliding-content">
  
  <div id="carouselExampleIndicators" className="carousel slide w-100" data-bs-ride="carousel">

    <div className="carousel-inner w-100">
     
    <div className="carousel-item active">
            <a href="#">
                <div className="container-fluid">
                    <div className="row text-center">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src="images/img-slide7.webp" class="img-fluid" alt=" "/>
                            <div className="main-text-group">
                            <div className="red-pppp">
                            <p > Spotlight</p>
                           </div>
                           <div className="main-ppp">
                            <p >
                              Girls to the front: celebrating the sounds of Riot Grrrl
                          </p>
                           </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src="images/img-slide8.webp" class="img-fluid" alt=" "/>
                            <div className="main-text-group">
                            <div className="red-pppp">
                            <p > Fest.fm</p>
                           </div>
                           <div  className="main-ppp">
                            <p>
                              Exploring the local sounds and scenes at  Noise Pop 2020
                          </p>
                           </div>
                          </div>
                            
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img src="images/img-slide9.webp" class="img-fluid" alt=" "/>
                            <div className="main-text-group">
                            <div className="red-pppp">
                            <p > Fest.fm</p>

                           </div>
                           <div className="main-ppp">
                            <p >
                              6 artists that blew our minds at Noise Pop Festival 2020
                            </p>
                           </div>
                        </div>
                      </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                          <img src="images/img-slide10.webp" class="img-fluid" alt=" "/>
                          <p className="red-pppp">Spotlight</p>
                          <p className="main-ppp">
                            Exploring the local sounds and scenes at Noise Pop 2020
                        </p>

                      </div> 
                        
                    </div>
                </div>
            </a>
        </div>

      
    </div>
    <div class="boooton">
    <button class="carousel-control-prev next-prev" type="button" data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Prev</span>
</button>
    <button class="carousel-control-next next-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
</section>
        </div>
        </div>
        </>
    )
}
export default PromtpSlider;