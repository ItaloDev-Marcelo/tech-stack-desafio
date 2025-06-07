
type Props = {
   navValue: string,
   handleActive: (activeItem: string) => void
}

export default function NavDeskboard({handleActive, navValue}: Props) {
    return (
        <header>
            <a href="#index.html">Tech Stacks</a>
            <hr/>
            <nav>
                <ul>
                    <li className={navValue === 'Front' ? 'nav active' : 'nav'} onClick={() => handleActive('Front')}><a href="#">Frontend</a></li>
                    <li className={navValue === 'Back' ? 'nav active' : 'nav'}  onClick={() => handleActive('Back')}><a href="#">Backend</a></li>
                    <li className={navValue === 'Full' ? 'nav active' : 'nav'} onClick={() => handleActive('Full')}><a href="#">FullStack</a></li>
                    <li className={navValue === 'UIUX' ? 'nav active' : 'nav'} onClick={() => handleActive('UIUX')}><a href="#">UI/UX</a></li>
                </ul>
            </nav>
        </header>
    )
}