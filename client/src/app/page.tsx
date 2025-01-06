import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { Toolbar } from 'primereact/toolbar'
import { UserPage } from '@/pages/UserPage'

export default function Home() {
  return (
    <>
      <Toolbar className="p-toolbar bg-primary border-noround border-none h-2rem" />
      <UserPage />
    </>
  );
}
