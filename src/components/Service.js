import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardImgOverlay from "react-bootstrap/CardImgOverlay";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";

function Service() {
  return (
    <div className="wrapper min-h-screen flex flex-col gap-10 py-7 md:py-20 px-5 lg:px-20 bg-gradient-to-b from-green-50 to-gray-400">
      <div className="box-title flex flex-col gap-1 items-center">
        <div className="title font-bold text-green-700 text-lg md:text-3xl">
          Layanan Kami
        </div>
        <div className="sub-title font-bold text-sm/5 text-center">
          GriyaGo kini hadir menjadi solusi bagi kamu
        </div>
      </div>
      <div className="box-service grid grid-cols-1 md:grid-cols-3 gap-3">
        <Card className="text-white relative">
          <CardImg src="/assets/unit-1.svg" alt="Card image" />
          <div className="absolute inset-0 bg-black/50"></div>
          <CardImgOverlay className="flex flex-col justify-center relative z-10">
            <CardTitle className="text-3xl font-bold">Security</CardTitle>
            <CardText className="text-base">
                Fasilitas keamanan 24 jam dengan pos satpam yang siap menjaga
                lingkungan hunian agar tetap aman dan nyaman bagi penghuni.
            </CardText>
            <CardText>Last updated 3 mins ago</CardText>
          </CardImgOverlay>
        </Card>
      </div>
    </div>
  );
}

export default Service;
