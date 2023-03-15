import "./Imgdesc.css";
import cloud from '../images/cloud1.png';
import english from '../images/language.png';
import experience from '../images/experience2.png';
import branches from '../images/multiple.png'

export default function Imgdesc() {
    return (
        <>
            <div className="Imgdesc">
                <div className="Imgdesc_inner">
                    <div className="Imgdesc_header">
                        <h2>ALL YOUR BUSINESS DEALS - COVERED</h2>
                    </div>
                    <div className="Imgdesc_inner_img">
                        <div className="Imgdesc_img_desc" >
                            <div className="Imgdesc_img_desc_inn">
                                <img src={cloud} style={{ width: "40", height: "40" }} />
                                <label>Clould Software</label>
                                <p>Cloud Software for ERP Companies</p>
                            </div>
                        </div>
                        <div className="Imgdesc_img_desc">
                            <div className="Imgdesc_img_desc_inn">
                                <img src={english} style={{ width: "10", height: "10" }} />
                                <label>English / Arabic</label>
                                <p>English/ Arabic Interface</p>
                            </div>
                        </div>
                        <div className="Imgdesc_img_desc">
                            <div className="Imgdesc_img_desc_inn">
                                <img src={experience} style={{ width: "10", height: "10" }} />
                                <label>15+ Years Experience</label>
                                <p>More Than 15 Years of Experience in ERP in GCC</p>
                            </div>
                        </div>
                        <div className="Imgdesc_img_desc">

                            <div className="Imgdesc_img_desc_inn">
                                <img src={branches} style={{ width: "10", height: "10" }} />
                                <label>Multiple Branches</label>
                                <p>Multiple ERP Branches</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
};
