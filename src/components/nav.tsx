
type Props = {
   navValue: string,
   handleActive: (activeItem: string) => void
}

export default function NavDeskboard({handleActive, navValue}: Props) {
    return (
        <header className="full-w shadow-2xl lg:min-w-[400px] py-2 bg-white lg:h-[100vh] ">
            <a href="#index.html" className="p-4 lg:p-7 text-[2em] md:text-[2.5em] ">Tech Stacks</a>
            <hr className="my-4"/>
            <nav className="py-10">
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