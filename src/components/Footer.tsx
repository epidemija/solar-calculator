import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#222222] ">
      <div className='h-2 bg-gradient-to-l from-primary to-[#149C9A] '></div>
      <div className="container mx-auto  text-white p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className='mt-10'>
            {/* <h3 className="font-bold mb-4">ePower</h3> */}
            <Image src='/footer.png' alt="ePower" width={300} height={100} className='object-cover' />
            {/* <p>Mediation of agricultural or green areas, as well as commercial and industrial roofs to photovoltaic investors.</p> */}
          </div>
          <div>
            <h3 className="font-bold mb-4">Info</h3>
            <ul>
              <li><Link href="/fur-projektentwickler">Start

              </Link></li>
              <li><Link href="/tippgeber">Leistungen</Link></li>
              <li><Link href="/magazin">magazine</Link></li>
              <li><Link href="/datenschutz">Karriere</Link></li>
            </ul>
          </div>
          <div>
            <Link href="/">
              W POWER GmbH <br />
              Schwetzinger Straße 22-26 <br />
              68753 Waghäusel <br />
              Germany <br />
              +49 (0) 7254 – 710 88 90 <br />
              info@wpower.eco
            </Link>
          </div>
        </div>
      </div>

      <div className='bg-[#444444] border-t border-gray-500 text-white md:flex justify-between items-center p-5 px-10'>
          <p>Copyright © W POWER GmbH - All rights reserved
          </p>
        <div className="flex justify-end items-center gap-5">
          <Link href="/" aria-label="Facebook" target="_blank" className='text-sm font-light'>
            Kontakt
          </Link>

          <Link href="/" aria-label="Twitter" target="_blank" className='text-sm font-light'>
            Impressum
          </Link>
          <Link href="/" aria-label="LinkedIn" target="_blank" className='text-sm font-light'>
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
