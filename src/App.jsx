import Logo from "./Components/Logo";
import IconHamburger from "./Components/IconHamburger";
import ImagenHero from "./assets/images/IllustrationHero.png"
import ImagenHero2 from "./assets/images/IllustarionHero2.png"

const App = () => {
  return (
    <div className="bg-white ">
      <header className="container flex justify-between py-10 px-7">
        <button><Logo /></button>
        <button><IconHamburger /></button>
      </header>
      <div className="">
        <img src={ImagenHero} />
        <p className="text-4xl text-center font-semibold text-blue-950 py-4">A Simple Bookmark <br /> Manager</p>
        <p className="text-center py-2 text-gray-600 text-lg">A clean and simple interface to organize <br /> your favourite websites. Open a new <br />browser tab and see your sites load <br /> instanly. Try it for free</p>
        <div className="flex justify-center tracking-wide">
          <button className="bg-blue-500 rounded-md py-5 px-2 font-semibold text-sm text-white">Get it on Chrome</button>
          <button className="bg-white rounded-md py-5 px-2 font-semibold text-sm">Get it on Firefox</button>
        </div>
        <div>
          <img  src={ImagenHero2} alt="" />
          <p className="text-3xl text-center font-semibold text-blue-950 py-4">Boomark in one click</p>
          <p className="text-center py-2 text-gray-600 text-lg">Organize your bookmarks however you like. <br/> Our simple drag-and-drop interface gives <br/> you complete control over how you manage <br/> your favourite sites.</p>
        </div>
        <br />
        <br />
        <div>
          <p className="text-3xl text-center font-semibold text-blue-950 py-4">Download the extension</p>
          <p className="text-center py-2 text-gray-600 text-lg">We've got more browsers in the pipeline. <br />Please do let us know if you've got a <br /> fovourite you'd like us to prioritize</p>
        </div>
      </div>
    </div>
  );

}

export default App;