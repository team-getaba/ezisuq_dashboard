export default function SidePanel({ children, onClick }) {
  return (
    <div className="fixed flex justify-center items-center top-0 right-0 w-full h-screen bg-[#00000022]">
      <div className="w-[60%] h-full" onClick={onClick}></div>
      <div className="w-[40%] h-full bg-white">{children}</div>
    </div>
  );
}
