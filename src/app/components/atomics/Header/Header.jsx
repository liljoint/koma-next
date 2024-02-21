import SideBar from '@/app/components/organisms/SideBar/SideBar'
const Header = () => {
  return (
    <header
      className=" mx-auto flex h-[9rem] justify-between bg-[url('../assets/header.png')] bg-cover bg-no-repeat p-5"
      id="home"
    >
      <div className="text-4xl uppercase tracking-[1rem] text-header">koma</div>
      <div>
        <SideBar />
      </div>
    </header>
  )
}
export default Header
