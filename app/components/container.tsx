import useMoveScroll from "@/lib/useMoveScroll";
import Footer from "./footer";
import Header from "./header";

export default function Container({ children, sections }: {
  children: any;
  sections: any;
}) {
  return (
    <>
      <Header props={sections} />
      {children}
      <Footer />
    </>
  )
}