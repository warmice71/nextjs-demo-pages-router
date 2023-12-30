import { SignUp } from "@clerk/nextjs";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function SignUpPage() {
  return (
    <div>
      <Header />
      <div className="flex justify-center py-24">
        <SignUp />
      </div>
      <Footer />
    </div>
  );
}
