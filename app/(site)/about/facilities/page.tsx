import type { Metadata } from "next";
import FacilitiesBody from "@/components/facilities/FacilitiesBody";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Transport, day care and infirmary support at Lawrence High School ICSE, HSR Layout — care beyond classrooms."
};

export default function FacilitiesPage() {
  return <FacilitiesBody />;
}
