
import type { Metadata } from "next";

import AnalyticsClient from "./AnalyticsClient";

export const metadata: Metadata = {
  title: "Analytics | BizLens AI",
  description: "Analyze your business performance, sales trends, customers, and products.",
};



export default function AnalyticsPage() {
  return (
    <AnalyticsClient />
  );
}