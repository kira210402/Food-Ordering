import landingImage from "../assets/landing.png";
import appDownload from "../assets/appDownload.png"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>

        <span className="text-xl">
          Food is just a click away!
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <span className="font-bold text-3xl tracking-tight">
            Order takeaway even faster!
          </span>
          <span>
            Download the FOODIE App for faster ordering and personalized recommendations
          </span>
          <img src={appDownload} />
        </div>
      </div>
    </div>
  )
}

export default HomePage;