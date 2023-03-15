
import './InnovationShort.css';
import bg from '../images/bgs.jpg';
import { useNavigate } from "react-router-dom";
// import "./fonts/SwanseaBoldItalic-p3Dv.ttf";
export default function Innovation() {
    
    const navigate = useNavigate();
    const handleRead =(e)=>{
          navigate('/InnovPage');
        //   window.location.reload();
         

    }
    return (
        <div className="Innov">
            <div className="Innov_imgpa_r2_c1" style={{ backgroundImage: `url(${bg})`, width: "100", height: "100" }}>
                <div className="Innov_inner">
                    <div className="Innov_inner_inner">
                        <div className="Innov_header_r1">
                            <h2>INNOVATIONS COMPUTERS & TELECOM L.L.C.</h2>
                        </div>
                        <div className="Innov_imgpa_r2">
                            {/* <div className="Innov_imgpa_r2_c2"> */}
                            <p className="Innov_imgpa_r2_c2_p1">
                                {/* <img src={computerpng} style={{ marginLeft:"10px" ,height: 130, width: 190 ,float:"right",background:"rgb(214, 210, 203)",borderRadius:"7px"} }/> */}
                                <span className="Innov_imgpa_r2_c2_sp1" > INNOVATIONS </span>
                                <span className="Innov_imgpa_r2_c2_sp2">is a professionally managed information technology </span>
                                (IT) company in the area of hardware, computer networking and software development. The company employs highly-qualified engineers
                                and sales persons who are capable to execute any IT related job professionally and elegantly.
                                Many of our engineers are Microsoft, Cisco and Oracle Certified with hands-on experience to provide quality solutions.
                            </p>
                            {/* </div> */}
                        </div>
                        {/* <div className="Innov_imgpa_r3">
                            <p>
                                A member of Al-Khalili Clan, since its inception, has provided a wide variety of industry-specific financial
                                information software solutions to meet the business needs of various companies in different sectors.
                                It has earned an outstanding reputation for the development of leading-edge, modifiable business management
                                and customized software solutions. Whether a company is looking for a complete end-to-end software solution or
                                a specific application such as Customer Relationship Management (CRM), Supply Chain, Financial Accounting,
                                Inventory Management, HR & Payroll Management, Asset Management, Production Management, Job Costing or
                                Project Management, <span className="Innov_imgpa_r2_c2_sp1" > INNOVATIONS </span> has just the right solution for you.
                            </p>
                        </div> */}
                        <div className="Innov_imgpa_r4_button">
                            <button onClick={(e) => {handleRead(e.target.value)}}>Read</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}