import './App.css';
import { SideBarMenu } from './components/SideBarMenu';
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import { TbBrandVisualStudio } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { BsFiletypeHtml, BsFiletypeScss, BsFiletypeJs, BsGithub } from 'react-icons/bs'


import profileImage from './assets/images/billgates.jpg';


function App() {
  const items: SideBarMenuItem[] = [
    {
      id: '1',
      label: 'HTML',
      icon: BsFiletypeHtml,
      url: "/",
    },
    {
      id: '2',
      label: 'CSS',
      icon: BsFiletypeScss,
      url: "/",
    },
    {
      id: '3',
      label: 'JS',
      icon: BsFiletypeJs,
      url: "/",
    },
    {
      id: '4',
      label: 'React',
      icon: FaReact,
      url: "/",
    },  
    {
      id: '5',
      label: 'VSCODE',
      icon: TbBrandVisualStudio,
      url: "/",
    },  
    {
      id: '6',
      label: 'GITHUB',
      icon: BsGithub,
      url: "/",
    },
  ];
  const card: SideBarMenuCard = {
    id: 'card01',
    displayName: 'Bill Gates',
    title: 'Developer',
    photoUrl: profileImage,
    url: "/",
  };
  return (
    <div>
      <SideBarMenu items={items} card={card} />
    </div>
  );
}

export default App
