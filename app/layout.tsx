import { LayoutProps } from "@/types";
import LayoutContent from "@/components/common/LayoutContent";
import Footer from "@/components/common/Footer";

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutContent className='bg-grey-extra-light'>
      {children}
      {/* <Footer
                type="main"
                className="mt-12 md:mt-40"
            /> */}
    </LayoutContent>
  );
}
