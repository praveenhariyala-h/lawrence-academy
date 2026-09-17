import type { Metadata } from "next";
import CampusBody from "@/components/campus/CampusBody";

export const metadata: Metadata = {
  title: "Campus",
  description:
    "Explore classrooms, labs, the library, auditoriums and campus spaces at Lawrence High School ICSE, HSR Layout."
};

export default function CampusPage() {
  return <CampusBody />;
}
