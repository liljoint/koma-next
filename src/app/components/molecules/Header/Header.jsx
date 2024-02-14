import SideBar from '../SideBar/SideBar'

const Header = () => {
  return (
    <header
      className=" mx-auto flex h-[150px] justify-between bg-[url('./assets/header.png')] bg-cover bg-no-repeat p-5"
      id="home"
    >
      <div className="text-header text-4xl uppercase tracking-[1rem]">koma</div>
      <div>
        <SideBar />
      </div>
    </header>
  )
}
export default Header
