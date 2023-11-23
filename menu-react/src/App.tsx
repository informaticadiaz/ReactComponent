import SideBarMenu from "./components/SideBarMenu"
import { SideBarMenuItem, SideBarMenuCard } from "./types/types";
import { 
  FcCustomerSupport,
  FcVideoProjector,
  FcCalendar,
  FcCamcorder,
  FcMusic,
 } from "react-icons/fc";
import profileImage from "./assets/bill.jpeg";

function App() {
  const items:SideBarMenuItem[] = [
    {
      id: '1',
      label: 'PSA',
      icon: FcCustomerSupport,
      url: '/'
    },
    {
      id: '2',
      label: 'Videoteca',
      icon: FcVideoProjector,
      url: '/'
    },
    {
      id: '3',
      label: 'Calendario',
      icon: FcCalendar,
      url: '/'
    },
    {
      id: '4',
      label: 'Entrevistas',
      icon: FcCamcorder,
      url: '/'
    },
    {
      id: '5',
      label: 'Podcast',
      icon: FcMusic,
      url: '/'
    }
  ];
  const card: SideBarMenuCard = {
    id: 'card01',
    displayName: 'Ignacio Diaz',
    title: 'Frontend Developer',
    photoUrl: profileImage,
    url: '/',
  }

  return (
    <div>
      <SideBarMenu items={items} card={card} />
    </div>
  )
}

export default App
