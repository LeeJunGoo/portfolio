import ThemeButton from '@/components/common/ThemeButton';
import { navList } from '@/util/constants';
import Link from 'next/link';
import HeaderToggle from '../HeaderToggle';
import SideBar from './SideBar';

const Header = ({ theme }: { theme: string | undefined }) => {
  const iconImage = theme === 'dark' ? '/moon.svg' : '/sun.svg';

  return (
    <>
      <header className="sticky top-0 z-[999] backdrop-blur-3xl opacity-95 px-6">
        <div className="container max-w-4xl h-[70px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">이준구</h1>
            <p className="text-sm">프론트엔드 개발자</p>
          </div>
          <div className="hidden md:flex items-center gap-6 ">
            {/* Navigation */}
            <nav>
              <ul className="flex items-center gap-6">
                {navList.map((item) => (
                  <li key={item.label}>
                    <Link className="font-semibold hover:text-blue-500 transition-colors duration-100" href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeButton
              iconImage={iconImage}
              className="rounded-full p-2 bg-yellow-200 dark:bg-gray-600"
              id="darkModeMainToggle"
              ariaLabel="데스크탑 전용 다크모드 버튼입니다."
            />
          </div>
          {/* 모바일 메뉴 토글 버튼 */}
          <HeaderToggle />
        </div>
      </header>
      {/* 사이드 바 */}
      <SideBar iconImage={iconImage} />
    </>
  );
};

export default Header;
