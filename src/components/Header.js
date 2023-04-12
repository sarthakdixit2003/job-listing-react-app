import headerLogo from '../images/bg-header-desktop.svg'


const Header = () => {
  return (
    <header className = 'header'>
        <img className = 'header-background'src = {headerLogo} alt = 'Header Logo' />
    </header>
  )
}

export default Header