import project from '@/assets/scott-graham-5fNmWej4tAA-unsplash (1).jpg';
import TextArea from '@/components/common/TextArea';
import TextCopyButton from '@/components/common/TextCopyButton';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaRegHandPointRight } from 'react-icons/fa';
import { PiStudentBold } from 'react-icons/pi';
import { RiBook2Fill } from 'react-icons/ri';
import avatar from '../../public/adventurer.svg';

export default function Home() {
  return (
    <main className="container max-w-4xl mx-auto  space-y-15 px-6 py-12 ">
      {/* Home */}
      <section
        id="home"
        className=" flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 scroll-mt-[70px]"
      >
        <Image
          src={avatar}
          width={225}
          height={225}
          alt="아바타 이미지입니다."
          className="border-2 border-gray-200 object-cover rounded-full hover:scale-105 transition-transform duration-300"
        />
        <div className="text-center md:text-right">
          <h1 className="text-4xl font-bold mb-2">이준구</h1>
          <p className="text-xl font-medium mb-4">혁신적인 개발자</p>
          <p className="text-gray-600 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum doloribus quasi enim vitae cupiditate
            laborum adipisci laboriosam dolorem eos quibusdam dignissimos consectetur amet, soluta veritatis autem.
            Vitae velit ex hic.
          </p>
        </div>
      </section>
      {/* About */}
      <section id="about" className="space-y-4 scroll-mt-[70px]">
        <h2 className="text-2xl font-bold">소개</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 bg-gray-100 shadow-md rounded-md hover:scale-105 transition-transform duration-300 dark:bg-gray-800">
            <div className="flex items-center mb-4 gap-2">
              <PiStudentBold className="text-lg text-yellow-600" />
              <h3 className="text-xl font-semibold ">교육 및 활동</h3>
            </div>

            <ul className="text-gray-800 leading-relaxed dark:text-gray-300">
              <li className="flex gap-1 items-center">
                <FaRegHandPointRight className="text-lg text-yellow-400" />
                <p>2023 내일 배움캠프 교육</p>
              </li>
              <li className="flex gap-1 items-center">
                <FaRegHandPointRight className="text-lg text-yellow-400" />
                <p>2023 내일 배움캠프 교육</p>
              </li>
              <li className="flex gap-1 items-center">
                <FaRegHandPointRight className="text-lg text-yellow-400" />
                <p>2023 내일 배움캠프 교육</p>
              </li>
            </ul>
          </article>
          <article className="p-6 bg-gray-100 shadow-md rounded-md hover:scale-105 transition-transform duration-300 dark:bg-gray-800">
            <div className="flex items-center mb-4 gap-2">
              <RiBook2Fill className="text-lg text-green-600" />
              <h3 className="text-xl font-semibold ">자격증</h3>
            </div>
            <ul className="text-gray-800 leading-relaxed dark:text-gray-300">
              <li className="flex gap-1 items-center">
                <FaRegHandPointRight className="text-lg text-green-400" />
                <p>2023 내일 배움캠프 교육</p>
              </li>
              <li className="flex gap-1 items-center">
                <FaRegHandPointRight className="text-lg text-green-400" />
                <p>2023 내일 배움캠프 교육</p>
              </li>
              <li className="flex gap-1 items-center">
                <FaRegHandPointRight className="text-lg text-green-400" />
                <p>2023 내일 배움캠프 교육</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
      {/* skill */}
      <section id="skill" className=" space-y-4 scroll-mt-[70px]">
        <h2 className="text-2xl font-bold">기술</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li className="bg-gray-100 shadow-md rounded-md p-6 hover:scale-105 transition-transform duration-300  flex flex-col justify-center items-center gap-1 dark:bg-gray-800">
            <Image src={'/html5.svg'} alt="next.js 이미지입니다." width={50} height={50} />
            <h3 className="text-lg font-semibold ">HTML5</h3>
          </li>
          <li className=" bg-gray-100 shadow-md rounded-md p-6 hover:scale-105 transition-transform duration-300  flex flex-col justify-center items-center gap-1 dark:bg-gray-800">
            <Image src={'/css3.svg'} alt="next.js 이미지입니다." width={50} height={50} />
            <h3 className="text-lg font-semibold ">CSS3</h3>
          </li>
          <li className=" bg-gray-100 shadow-md rounded-md p-6 hover:scale-105 transition-transform duration-300  flex flex-col justify-center items-center gap-1 dark:bg-gray-800">
            <Image src={'/javascript.svg'} alt="next.js 이미지입니다." width={50} height={50} />
            <h3 className="text-lg font-semibold ">JavaScript</h3>
          </li>
          <li className=" bg-gray-100 shadow-md rounded-md p-6 hover:scale-105 transition-transform duration-300  flex flex-col justify-center items-center gap-1 dark:bg-gray-800">
            <Image src={'/react.svg'} alt="next.js 이미지입니다." width={50} height={50} />
            <h3 className="text-lg font-semibold ">React</h3>
          </li>
          <li className=" bg-gray-100 shadow-md rounded-md p-6 hover:scale-105 transition-transform duration-300  flex flex-col justify-center items-center gap-1 dark:bg-gray-800">
            <Image src={'/next.svg'} alt="next.js 이미지입니다." width={50} height={50} />

            <h3 className="text-lg font-semibold ">Next.js</h3>
          </li>
        </ul>
      </section>
      {/* projects */}
      <section id="projects" className="space-y-4 scroll-mt-[70px]">
        <h2 className="text-2xl font-bold">프로젝트</h2>
        <ul className="grid grid-col-1 md:grid-cols-2 gap-6">
          <li className="bg-gray-100 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden dark:bg-gray-800">
            <div className="relative w-full h-48">
              <Image
                src={project}
                fill
                sizes="(max-width: 480px) 40vw, (max-width: 768px) 20vw, (max-width: 1200px) 10vw, 5vw"
                alt="Ice Craft 프로젝트 이미지입니다."
              />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Ice Craft</h3>
              <div className="space-x-2">
                <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-md text-gray-700 border border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                  React
                </span>
                <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Next.js
                </span>
                <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Tailwind
                </span>
                <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Supabase
                </span>
              </div>
              <div className="space-x-2">
                <Link
                  href={'#'}
                  className="text-sm bg-gray-800 text-white px-3 py-1 rounded-md dark:bg-gray-300 dark:text-gray-800"
                >
                  Github
                </Link>
                <Link href={'#'} className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md">
                  Live Demo
                </Link>
                <Link
                  href={'#'}
                  className="text-sm bg-gray-800 text-white px-3 py-1 rounded-md dark:bg-blue-300 dark:text-blue-800"
                >
                  블로그
                </Link>
              </div>
            </div>
          </li>
          <li className="bg-gray-100 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden dark:bg-gray-800">
            <div className="relative w-full h-48">
              <Image
                src={project}
                fill
                sizes="(max-width: 480px) 40vw, (max-width: 768px) 20vw, (max-width: 1200px) 10vw, 5vw"
                alt="Ice Craft 프로젝트 이미지입니다."
              />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Ice Craft</h3>
              <div className="space-x-2">
                <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-md text-gray-700 border border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                  React
                </span>
                <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Next.js
                </span>
                <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Tailwind
                </span>
                <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Supabase
                </span>
              </div>
              <div className="space-x-2">
                <Link
                  href={'#'}
                  className="text-sm bg-gray-800 text-white px-3 py-1 rounded-md dark:bg-gray-300 dark:text-gray-800"
                >
                  Github
                </Link>
                <Link href={'#'} className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md">
                  Live Demo
                </Link>
                <Link
                  href={'#'}
                  className="text-sm bg-gray-800 text-white px-3 py-1 rounded-md dark:bg-blue-300 dark:text-blue-800"
                >
                  블로그
                </Link>
              </div>
            </div>
          </li>{' '}
          <li className="bg-gray-100 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden dark:bg-gray-800">
            <div className="relative w-full h-48">
              <Image
                src={project}
                fill
                sizes="(max-width: 480px) 40vw, (max-width: 768px) 20vw, (max-width: 1200px) 10vw, 5vw"
                alt="Ice Craft 프로젝트 이미지입니다."
              />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Ice Craft</h3>
              <div className="space-x-2">
                <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-md text-gray-700 border border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600">
                  React
                </span>
                <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Next.js
                </span>
                <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Tailwind
                </span>
                <span className="bg-gray-200 text-sm px-2 py-0.5 rounded-md text-gray-700 border border-gray-300">
                  Supabase
                </span>
              </div>
              <div className="space-x-2">
                <Link
                  href={'#'}
                  className="text-sm bg-gray-800 text-white px-3 py-1 rounded-md dark:bg-gray-300 dark:text-gray-800"
                >
                  Github
                </Link>
                <Link href={'#'} className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md">
                  Live Demo
                </Link>
                <Link
                  href={'#'}
                  className="text-sm bg-gray-800 text-white px-3 py-1 rounded-md dark:bg-blue-300 dark:text-blue-800"
                >
                  블로그
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </section>
      {/* contact */}
      <section id="contact" className="space-y-4 scroll-mt-[70px]">
        <h2 className="text-2xl font-bold">연락처</h2>
        <div className="grid grid-cols-1 gap-25 md:grid-cols-2 md:gap-6">
          <form action="">
            <fieldset className="space-y-4 mb-2">
              <legend className="sr-only">이름 및 이메일 그리고 메시지를 남겨주세요.</legend>
              <div className="space-y-1 ">
                <label htmlFor="input-name" className="block w-fit font-semibold">
                  이름
                </label>
                <input
                  type="text"
                  id="input-name"
                  name="userName"
                  className="w-full py-2 px-4 border text-black border-gray-300 rounded-md focus:border-white dark:focus:border-gray-900 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="이름을 입력해주세요"
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="input-email" className="block w-fit font-semibold">
                  이메일
                </label>
                <input
                  type="text"
                  id="input-email"
                  name="email"
                  className="w-full py-2 px-4 border text-black border-gray-300 rounded-md focus:border-white dark:focus:border-gray-900 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="이메일을 입력해주세요"
                  required
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="input-message" className="w-fit block font-semibold ">
                  메시지
                </label>
                <TextArea
                  id="input-message"
                  name="message"
                  className="w-full h-[100px] py-2 px-4 text-black border border-gray-300 rounded-md resize-none focus:border-white dark:focus:border-gray-900 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="메시지를 입력해주세요"
                  required
                  maxRows={10}
                />
              </div>
            </fieldset>

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-blue-500 text-white px-4 py-2 text-sm hover:bg-blue-600 transition-colors "
              >
                이메일 보내기
              </button>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center gap-2">
            <Link
              href={'https://github.com/LeeJunGoo'}
              target="_blank"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-500 hover:transition-colors dark:text-gray-100"
            >
              <FaGithub className="text-2xl" />
              <span className="font-semibold ">Github</span>
            </Link>
            <TextCopyButton />
          </div>
        </div>
      </section>
    </main>
  );
}
