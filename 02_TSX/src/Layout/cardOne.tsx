import me from '../assets/me.png';

export default function cardFive({ className }: { className: string }) {
  return (
    <div
      className={`${className} h-screen bg-[#F8F8F8] text-black flex justify-evenly items-center overflow-hidden  text-xl rounded-xl`}
    >
      <div className="flex flex-col">
        <span>🎉 | Available for freelance work</span>
        <span className="text-3xl">Hi, I'm Vishal Soni</span>
        <span>I build Website and Webapps</span>
      </div>

      <div>
        <img
          src={me}
          alt="A portrait of me"
          className="mx-6 w-[200px] h-[260px] rounded-full max-w-full shadow-lg border-2 border-transparent 
             transform transition-all duration-700 ease-in-out 
             hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:border-purple-500"
        />
      </div>
    </div>
  );
}
