import clsx from 'clsx';
import Container from 'components/element/Container';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MobileNavbarTogglerButton from './OpenNavbarTogglerButton';
import ROUTES from './ROUTES';

function MobileNavbar({ show = false }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 grid h-[64px] place-items-center bg-gray-light text-gray-dark">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <div role="button" className="py-4 text-lg font-bold text-blue">
              Batur Bertutur
            </div>
          </Link>
          <div
            role="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={`${isOpen ? 'Close' : 'Open'} menu`}
            title={`${isOpen ? 'Close' : 'Open'} menu`}
          >
            <MobileNavbarTogglerButton
              isOpen={isOpen}
              className="text-gray-dark"
            />
          </div>
        </div>
      </Container>

      {/* overlay and body */}
      <div
        className={clsx(
          'fixed top-[64px] z-30 min-h-screen-no-header w-[200%] overflow-hidden bg-gray-light backdrop-blur-xl duration-[500ms] ease-out',
          isOpen ? 'left-0' : 'left-[-100%]',
          isOpen ? 'opacity-[97%]' : 'opacity-0',
          !isOpen && 'pointer-events-none'
        )}
      >
        <div className="w-1/2">
          <Container>
            <div className="space-y-4 p-4 pt-16">
              {ROUTES.map((route, index) => (
                <Link key={route.name} href={route.url}>
                  <div
                    className={clsx(
                      'relative text-lg font-semibold duration-300',
                      isOpen ? 'left-0' : 'left-[-150%]'
                    )}
                    style={{
                      transitionDelay: 300 + index * 100 + 'ms',
                    }}
                  >
                    {route.name}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;
