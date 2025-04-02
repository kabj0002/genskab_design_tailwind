import Header from "@/components/Header";
import "./globals.css";
import PrimaryButton from "@/components/PrimaryButton";
import SignupForm from "@/components/SignupForm";
import MemberList from "@/components/MemberList";
import MemberCard from "@/components/MemberCard";

export default function Home() {
  return (
    <main>
      <Header>
        <SignupForm>
          <PrimaryButton />
        </SignupForm>
      </Header>

      <MemberList>
        <MemberCard className="flex content-between" />
      </MemberList>
    </main>
  );
}
