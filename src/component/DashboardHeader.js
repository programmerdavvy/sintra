import { Col, Row } from "reactstrap";
import DashboardImage from "../assets/dashboard-header.png"
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
const DashboardHeader = () =>{

    return(
        <>
        <div className=" mx-5 promptsHeaderContainer dashboardHeader" 
        style={{height:'340%',backgroundImage: `url(${DashboardImage})`} }
        > 
        <div className="text-center">
        <div>
        <h1 className="text-white" style={{fontSize:"50px",fontWeight:'600'}}>Welcome,</h1> 
        </div> 
           <div className="pt-3 pb-3">
            <p className="text-white" style={{opacity:".7",fontSize:'1.25rem'}}> What are you looking for?</p>
        </div> 
        <div className="dashboardlinks  text-light-emphasis   fw-600 d-flex justify-content-center">
        <Row>
                <Col>
               <Link to="/prompts" className="text-decoration-none text-light-emphasis">
               <div className="all-prompts bg-white p-3  rounded" style={{width:'200px',fontSize:'1.1rem'}}>
                    All Prompts  <ArrowRight size={20}/>
                </div>
               </Link>
                </Col>
                <Col>
                <Link to="/bots" className="text-light-emphasis text-decoration-none">
                <div className="all-prompts bg-white p-3 rounded " style={{width:'240px',fontSize:'1.1rem'}}>
                Sintra Bots  <span
                      className='mx-2 px-3'
                      style={{
                        background: '#ecfdf3',
                        padding: '5px',
                        fontSize: '10px',
                        borderRadius: '15px',
                      }}
                    >
                      New
                    </span> <ArrowRight size={20}/>
                </div>
                </Link>
                </Col>
                <Col>
                <Link to="/add-ons" className="text-decoration-none text-light-emphasis">
                <div className="all-prompts bg-white p-3 rounded" style={{width:'200px',fontSize:'1.1rem'}}>
                Add-ons <ArrowRight size={20}/>
                </div>
                </Link>
                
                </Col>
            </Row>
        
        </div>
        </div>
       
        </div>
        </>
    )
}
export default DashboardHeader;