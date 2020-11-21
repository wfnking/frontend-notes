import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const header = isRoot && (
    <h1 className='text-center'>
      <Link href='/'>
        <a className='text-4xl font-black text-black no-underline'>前端控</a>
      </Link>
    </h1>
  );

  return (
    <div>
      <header>{header}</header>
      <div className='max-w-screen-md px-4 mx-auto'>
        <main>{children}</main>
        {!isRoot && (
          <p className='text-right'>
            <Link href='/'>
              <a className='text-red-500 font-black no-underline'>返回</a>
            </Link>
          </p>
        )}
        <footer>
          © {new Date().getFullYear()}, Built with{" "}
          <a href='https://nextjs.org/'>Next.js</a> &#128293;
        </footer>
      </div>
    </div>
  );
}
